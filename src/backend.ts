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