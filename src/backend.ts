import { backendSite } from "./consts";

const langsBlockList = [
    "Makefile",
    "Shell",
    "HLSL",
    "CSS",
    "HTML",
    "ShaderLab",
    "Dockerfile",
    "SCSS"
];

export async function getLanguages(repo: string): Promise<string[]> {
    const response = await fetch(`${backendSite}/api/repolang/${repo}`);
    const apiRes = await response.json();

    const langs: string[] = [];

    Object.keys(apiRes).forEach(i => {
        if (!langsBlockList.includes(i)) {
            langs.push(i);
        }
    });

    return langs;
}

interface Repo {
    created_at: string;
    stargazers_count: number;
}

export async function getRepo(repo: string): Promise<Repo> {
    const response = await fetch(`${backendSite}/api/repo/${repo}`);
    const apiRes = await response.json();
    return apiRes;
}

export async function getCommits(repo: string): Promise<number> {
    const response = await fetch(`${backendSite}/api/repocontr/${repo}`);
    const apiRes = await response.json();

    for (let i = 0; i < apiRes.length; i++) {
        if (apiRes[i].login === "sardap") {
            return apiRes[i].contributions;
            break;
        }
    }

    return 0;
}