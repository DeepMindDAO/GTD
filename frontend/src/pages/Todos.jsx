import { todos } from "../data.js";

const Todos = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>待办系统</h2>
          <p className="muted">创建任务、分组标签、同步提醒。</p>
        </div>
        <button className="button primary">新增待办</button>
      </div>
      <div className="card">
        <div className="stack">
          {todos.map((todo) => (
            <div className="todo-row" key={todo.title}>
              <div>
                <p className="label">{todo.title}</p>
                <p className="muted">截止 {todo.due}</p>
              </div>
              <div className="habit-actions">
                <span className="chip">{todo.tag}</span>
                <button className="button ghost">完成</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todos;
