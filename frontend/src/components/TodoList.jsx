const TodoList = ({ todos }) => {
  return (
    <div className="card">
      <h2>今日待办</h2>
      <div className="stack">
        {todos.map((todo) => (
          <div className="todo-row" key={todo.title}>
            <div>
              <p className="label">{todo.title}</p>
              <p className="muted">截止 {todo.due}</p>
            </div>
            <span className="chip">{todo.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
