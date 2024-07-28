import { makeAutoObservable } from 'mobx'

export class Message {
    title: string;
    author: object;
    likes: string[];

    constructor(title: string, author: object, likes: string[]) {
        makeAutoObservable(this);
        this.title = title;
        this.author = author;
        this.likes = likes;
    }

    updateTitle(title: string) {
        this.title = title;
    }
}