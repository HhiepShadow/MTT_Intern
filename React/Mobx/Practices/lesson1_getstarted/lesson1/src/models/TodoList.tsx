import { computed, makeAutoObservable, observable } from "mobx";
import { Todo } from "./Todo";

export class TodoList {
    todos: Todo[] = []
    get unfinishedTodoCount(): number {
        return this.todos.filter(todo => !todo.finished).length;
    }

    constructor(todos: Todo[]) {
        makeAutoObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })

        this.todos = todos;
    }
}