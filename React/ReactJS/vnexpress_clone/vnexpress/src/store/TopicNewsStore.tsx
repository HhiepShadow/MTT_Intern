import { makeAutoObservable } from "mobx";
import { TopicNewsItemModel } from "../models/TopicNewsItemModel";

export default class TopicNewsStore {
    topicNews: TopicNewsItemModel[] = [];

    constructor(topicNews: TopicNewsItemModel[]) {
        makeAutoObservable(this);
        this.topicNews = topicNews;
    }
}