import { action, makeAutoObservable, observable } from "mobx";

export class Todo {
    id: number = Math.random();
    title: string = "";
    finished: boolean = false;

    constructor(title: string) {
        makeAutoObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
        this.title = title;
    }

    toggle() {
        this.finished = !this.finished;
    }
}