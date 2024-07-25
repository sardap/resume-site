package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/ReneKroon/ttlcache/v2"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/google/go-github/v50/github"
	"github.com/sardap/ultimate-chess-2024/server/uc2024"
	"golang.org/x/oauth2"
)

var (
	client *github.Client
	cache  *ttlcache.Cache
)

func requestRepoInfo(repo string) (*github.Repository, error) {
	result, _, err := client.Repositories.Get(context.TODO(), "sardap", repo)
	if err != nil {
		return nil, err
	}

	return result, nil
}

func requestRepoLang(repo string) (map[string]int, error) {
	result, _, err := client.Repositories.ListLanguages(
		context.TODO(), "sardap", repo,
	)
	if err != nil {
		return nil, err
	}

	return result, nil
}

func requestRepoCont(repo string) ([]*github.Contributor, error) {
	result, _, err := client.Repositories.ListContributors(
		context.TODO(), "sardap", repo, nil,
	)
	if err != nil {
		return nil, err
	}

	return result, nil
}

func requestRepoReleases(repo string) ([]*github.RepositoryRelease, error) {
	result, _, err := client.Repositories.ListReleases(
		context.TODO(), "sardap", repo, nil,
	)
	if err != nil {
		return nil, err
	}

	return result, nil
}

type PublicRepo struct {
	Name            string    `json:"name"`
	CreatedDate     time.Time `json:"created_at"`
	StargazersCount int       `json:"stargazers_count"`
}

type CompleteRepo struct {
	Repo  PublicRepo `json:"repo"`
	Langs []string   `json:"langs"`
	Contr int        `json:"commits"`
}

func completeInfo(reposStr string) (map[string]*CompleteRepo, error) {
	log.Printf("Fetching complete info\n")
	repos, _, err := client.Repositories.List(context.TODO(), "sardap", &github.RepositoryListOptions{
		Visibility: "public",
		ListOptions: github.ListOptions{
			PerPage: 100,
		},
	})
	if err != nil {
		return nil, err
	}

	result := make(map[string]*CompleteRepo)
	for _, repo := range repos {
		if *repo.Private {
			continue
		}

		langs, _ := requestRepoLang(*repo.Name)
		langsAry := make([]string, 0, len(langs))
		for k := range langs {
			langsAry = append(langsAry, k)
		}

		contr, _ := requestRepoCont(*repo.Name)
		commits := 0
		for _, c := range contr {
			if *c.Login == "sardap" {
				commits = *c.Contributions
			}
		}

		result[*repo.Name] = &CompleteRepo{
			Repo: PublicRepo{
				Name:            *repo.Name,
				CreatedDate:     repo.CreatedAt.Time,
				StargazersCount: *repo.StargazersCount,
			},
			Langs: langsAry,
			Contr: commits,
		}
	}
	log.Printf("Fetched complete info\n")

	return result, nil
}

func repoEndpoint(c *gin.Context) {
	repoID := c.Param("id")

	key := fmt.Sprintf("repo:%s", repoID)

	tmp, err := cache.Get(key)
	if err != nil {
		c.JSON(500, gin.H{})
		return
	}

	var repo = tmp.(*github.Repository)

	c.JSON(200, repo)
}

func repoLangsEndpoint(c *gin.Context) {
	repoID := c.Param("id")

	key := fmt.Sprintf("lang:%s", repoID)

	tmp, err := cache.Get(key)
	if err != nil {
		c.JSON(500, gin.H{})
		return
	}

	var repo = tmp.(map[string]int)

	c.JSON(200, repo)
}

func repoContrEndpoint(c *gin.Context) {
	repoID := c.Param("id")

	key := fmt.Sprintf("cont:%s", repoID)

	tmp, err := cache.Get(key)
	if err != nil {
		c.JSON(500, gin.H{})
		return
	}

	var repo = tmp.([]*github.Contributor)

	c.JSON(200, repo)
}

func repoReleasesEndpoint(c *gin.Context) {
	repoID := c.Param("id")

	key := fmt.Sprintf("rele:%s", repoID)

	tmp, err := cache.Get(key)
	if err != nil {
		c.JSON(500, gin.H{})
		return
	}

	var repo = tmp.([]*github.RepositoryRelease)

	c.JSON(200, repo)
}

func completeEndpoint(c *gin.Context) {
	tmp, err := cache.Get("complete")
	if err != nil {
		c.JSON(500, gin.H{})
		return
	}

	var repo = tmp.(map[string]*CompleteRepo)

	c.JSON(200, repo)
}

func newItemCallback(key string, value interface{}) {
	log.Printf("New key(%s) added\n", key)
}

func checkExpirationCallback(key string, value interface{}) bool {
	return true
}

func expirationCallback(key string, reason ttlcache.EvictionReason, value interface{}) {
	log.Printf("This key(%s) has expired because of %s\n", key, reason)
}

func loaderFunction(key string) (data interface{}, ttl time.Duration, err error) {
	var result interface{}
	var resErr error
	newTTL := ttl
	switch key[:4] {
	case "repo":
		result, resErr = requestRepoInfo(key[5:])
	case "lang":
		result, resErr = requestRepoLang(key[5:])
	case "cont":
		result, resErr = requestRepoCont(key[5:])
	case "rele":
		result, resErr = requestRepoReleases(key[5:])
		newTTL = time.Duration(15) * time.Minute
	case "comp":
		result, resErr = completeInfo(key[5:])
	}

	return result, newTTL, resErr
}

func main() {
	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("ACCESS_TOKEN")},
	)
	tc := oauth2.NewClient(ctx, ts)

	client = github.NewClient(tc)

	cache = ttlcache.NewCache()
	cache.SetTTL(time.Duration(2) * time.Hour)
	cache.SetExpirationReasonCallback(expirationCallback)
	cache.SetLoaderFunction(loaderFunction)
	cache.SetNewItemCallback(newItemCallback)
	cache.SetCheckExpirationCallback(checkExpirationCallback)
	cache.SetCacheSizeLimit(50)

	go func() {
		for {
			cache.Get("complete")
			time.Sleep(time.Duration(1) * time.Hour)
		}
	}()

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Header("Cross-Origin-Opener-Policy", "same-origin")
		c.Header("Cross-Origin-Embedder-Policy", "require-corp")
		c.Next()
	})

	r.Use(cors.Default())

	// r.GET("/api/repo/:id", repoEndpoint)
	// r.GET("/api/repolang/:id", repoLangsEndpoint)
	r.GET("/api/repocontr/:id", repoContrEndpoint)
	// r.GET("/api/reporele/:id", repoReleasesEndpoint)
	r.GET("/api/complete", completeEndpoint)
	r.StaticFS("/assets", http.Dir(os.Getenv("STATIC_FILES")))

	uc2024.AddChessServerGroup(r)

	r.Run()
}
