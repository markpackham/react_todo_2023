import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={completed.id}
          />
        );
      })}
    </ul>
  );
}
