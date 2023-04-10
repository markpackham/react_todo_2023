export default function TodoItem({ id, title, completed }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          // onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        //   onClick={() => deleteTodo(todo.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
