import { makeAutoObservable } from "mobx";
import { Topic } from "../models/Topic";

export default class TopicsStore {
    topics: Topic[] = [];
    constructor(topics: Topic[]) {
        makeAutoObservable(this);
        this.topics = topics;
    }

    addTopic(topic: string) {
        this.topics.push({
            id: this.topics[this.topics.length - 1].id + 1,
            title: topic
        });
    }

    deleteTopic(id: number) {
        this.topics = this.topics.filter(topic => topic.id !== id);
    }

    get getAllTopics() {
        return this.topics;
    }
}

