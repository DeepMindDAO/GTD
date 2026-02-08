const PomodoroTimer = () => {
  return (
    <div className="card pomodoro">
      <h2>番茄时钟</h2>
      <div className="pomodoro-timer">
        <div>
          <p className="label">专注中</p>
          <h3>24:18</h3>
        </div>
        <div className="pomodoro-actions">
          <button className="button ghost">暂停</button>
          <button className="button primary">完成</button>
        </div>
      </div>
      <p className="muted">下一提醒：休息 5 分钟 + 市场快讯</p>
    </div>
  );
};

export default PomodoroTimer;
