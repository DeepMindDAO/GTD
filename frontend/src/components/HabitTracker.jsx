const HabitTracker = ({ habits }) => {
  return (
    <div className="card">
      <h2>习惯追踪</h2>
      <div className="stack">
        {habits.map((habit) => (
          <div className="habit-row" key={habit.name}>
            <div>
              <p className="label">{habit.name}</p>
              <p className="muted">连续 {habit.streak} 天</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${habit.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
