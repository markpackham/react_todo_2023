export default function TodoList() {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}

      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
