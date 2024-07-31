import { makeAutoObservable } from "mobx";
import { QA } from "../models/QA";

export default class QAsStore {
    QAs: QA[] = [];
    constructor(QAs: QA[]) {
        makeAutoObservable(this);
        this.QAs = QAs;
    }

    addQA(qa: QA) {
        this.QAs.push(qa);
    }

    addQuestion(question: string) {
        this.QAs.push({
            id: this.QAs[this.QAs.length - 1].id + 1,
            question: question,
            answer: null
        });
    }

    addAnswer(id: number, answer: string) {
        this.QAs = this.QAs.filter(qa => qa.id === id ? {
            ...qa,
            answer: answer
        } : qa);
    }

    get getAllQAs() {
        return this.QAs;
    }
}