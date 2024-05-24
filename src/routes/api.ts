import { isServer } from "solid-js/web";
import { Article } from "~/types";
import data from  "../assets/data.json";


const blogList =data.articles

export function getArticleList() {
    return blogList
}


export function getArticle(name: string): Article | null {
    if (isServer) {
        return null
    }

    return blogList.find((e) => e.name === name ) ?? null
}


export async function getArticleData(name: string): Promise<String> {
    return import(`../assets/articles/${name}.md`)
}

