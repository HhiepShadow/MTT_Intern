import { makeAutoObservable } from "mobx";

export class Timer {
    secondsPassed: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer() {
        this.secondsPassed += 1;
    }
}