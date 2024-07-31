import { makeAutoObservable } from "mobx";
import { HotTopic } from "../models/HotTopic";

export default class HotTopicsStore {
    hotTopics: HotTopic[] = [];
    constructor(hotTopics: HotTopic[]) {
        makeAutoObservable(this);
        this.hotTopics = hotTopics;
    }

    addHotTopic(hotTopic: string, img: string) {
        this.hotTopics.push({
            id: this.hotTopics[this.hotTopics.length - 1].id + 1,
            title: hotTopic,
            img: img
        });
    }

    get getAllHotTopics() {
        return this.hotTopics;
    }
}