import { makeAutoObservable } from "mobx";
import { Article } from "../models/Article";

export default class ArticlesStore {
    articles: Article[] = [];

    constructor(articles: Article[]) {
        makeAutoObservable(this);
        this.articles = articles;
    }

    addArticle(title: string, content: string, img: string) {
        this.articles.push({
            id: this.articles[this.articles.length - 1].id + 1,
            title: title,
            content: content,
            img: img,
            time: new Date()
        });
    }

    get getAllArticles() {
        return this.articles;
    }
}