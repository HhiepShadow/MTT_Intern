import { observer } from "mobx-react-lite";
import { TodoList } from "./models/TodoList";
import TodoView from "./TodoView";

const TodoListView = observer(({ todoList }: { todoList: TodoList }) => {
  return (
    <div>
      <ul>
        {todoList.todos.map((todo) => (
          <TodoView todo={todo} />
        ))}
      </ul>
    </div>
  );
});

export default TodoListView;
