import { useEffect } from "react";
import "./App.css";
import { createTimer } from "./Observer";
import Timer from "./Timer";
import TodoListView from "./TodoListView";
import { TodoList } from "./models/TodoList";
import { Todo } from "./models/Todo";
import { autorun, reaction } from "mobx";

function App() {
  const myTimer = createTimer();

  const store: TodoList = new TodoList([
    new Todo("Get Coffee"),
    new Todo("Write simpler code"),
  ]);

  useEffect(() => {
    setInterval(() => {
      myTimer.increase()
    }, 1000);
  })

  autorun(() => {
    console.log("Tasks left: " + store.unfinishedTodoCount);
  })

  reaction(
    () => store.unfinishedTodoCount,
    (unfinishedTodoCount: number): void => {
      console.log(`Unfinished todos count: ${unfinishedTodoCount}`);
    },
    {
      delay: 1000,
      name: 'UnfinishedTodosCountLogger',
      onError: (err: Error) => {
        console.log(`Error: ${err}`);
      }
    }
  )

  return (
    <>
      <Timer timer={myTimer} />
      <TodoListView todoList={store}/>
    </>
  );
}

export default App;
