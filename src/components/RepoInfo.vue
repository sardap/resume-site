<template>
  <div>
    <div>
      <a :href="repoLink"
        ><h2>{{ title }}</h2></a
      >
    </div>
    <div class="border">
      <div v-if="loadedBasic === true" id="card">
        <div id="created-date">
          <p class="card-header">Created Date</p>
          <p>{{ createdDate }}</p>
        </div>
        <div id="technologies">
          <p class="card-header">Technologies</p>
          <p>{{ techs.join(", ") }}</p>
        </div>
        <div v-if="langs" :key="langs" id="languages">
          <p class="card-header">Languages</p>
          <p>{{ langs.join(", ") }}</p>
        </div>
        <div v-if="starGazers > 0">
          <p class="card-header">Stars</p>
          <p>{{ starGazers }}</p>
        </div>
        <div v-if="commits" :key="commits">
          <p class="card-header" style="margin-top: 10px;">Commits</p>
          <p>{{ commits }}</p>
        </div>
      </div>
      <div v-else-if="loadedBasic === false">
        pulling...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import moment from "moment";

const LangsBlockList = [
  "Makefile",
  "Shell",
  "HLSL",
  "CSS",
  "HTML",
  "ShaderLab",
  "Dockerfile"
];
const backendSite = "https://backend.sarda.dev";

@Options({
  props: {
    repo: String,
    title: String,
    techs: {
      type: Array,
      required: true
    },
    createdDateP: String
  },
  methods: {
    getRepoInfo() {
      fetch(`${backendSite}/api/repo/${this.repo}`)
        .then(response => response.json())
        .then(apiRes => {
          let createdAt: string;
          if (!this.createdDateP) {
            createdAt = apiRes.created_at;
          } else {
            createdAt = this.createdDateP;
          }

          this.createdDate = moment(createdAt)
            .local()
            .format("YYYY-MM-DD");

          this.starGazers = apiRes.stargazers_count;
          this.loadedBasic = true;

          fetch(`${backendSite}/api/repolang/${this.repo}`)
            .then(response => response.json())
            .then(apiRes => {
              this.langs = [];
              Object.keys(apiRes).forEach(i => {
                if (!LangsBlockList.includes(i)) {
                  this.langs.push(i);
                }
              });
            });

          fetch(`${backendSite}/api/repocontr/${this.repo}`)
            .then(response => response.json())
            .then(apiRes => {
              for (let i = 0; i < apiRes.length; i++) {
                if (apiRes[i].login === "sardap") {
                  this.commits = apiRes[i].contributions;
                  break;
                }
              }
            });
        });
    }
  },
  created() {
    this.getRepoInfo();
  },
  data() {
    return {
      repoLink: `https://github.com/sardap/${this.repo}`,
      langs: [],
      commits: 0,
      loadedBasic: false
    };
  }
})
export default class GBA extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/shared.css";
p {
  margin: 1px;
}

.info-line {
  padding: 5px;
}

#card {
  max-width: 30em;
}

#created-date {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

#technologies {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

#languages {
  display: inline-block;
  vertical-align: top;
  width: 33%;
}

.card-header {
  font-weight: bold;
}

.border {
  max-width: 30em;
  margin: 0 auto;
  padding-block-start: 1em;
  padding-block-end: 1em;
}

.card-info {
  margin-left: auto;
  margin-right: auto;
}
</style>
