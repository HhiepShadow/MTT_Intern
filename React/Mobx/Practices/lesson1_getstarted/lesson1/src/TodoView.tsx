import { observer } from "mobx-react-lite";
import React from "react";
import { Todo } from "./models/Todo";

const TodoView = observer(({ todo }: { todo: Todo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => todo.toggle()}
      />
      {todo.title}
    </li>
  );
});

export default TodoView;
