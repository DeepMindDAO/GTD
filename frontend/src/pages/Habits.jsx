import { habits } from "../data.js";

const Habits = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>习惯管理</h2>
          <p className="muted">配置每日打卡、周期提醒与数据回溯。</p>
        </div>
        <button className="button primary">新增习惯</button>
      </div>
      <div className="card">
        <div className="stack">
          {habits.map((habit) => (
            <div className="habit-row" key={habit.name}>
              <div>
                <p className="label">{habit.name}</p>
                <p className="muted">连续 {habit.streak} 天</p>
              </div>
              <div className="habit-actions">
                <span className="chip">目标达成 {habit.progress}%</span>
                <button className="button ghost">编辑</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habits;
