const Pomodoro = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>番茄时钟中心</h2>
          <p className="muted">配置专注时长、休息节奏和提醒内容。</p>
        </div>
        <button className="button primary">新建专注周期</button>
      </div>
      <div className="grid two">
        <div className="card">
          <h3>今日记录</h3>
          <ul className="list">
            <li>完成 5 个番茄</li>
            <li>累计专注 2 小时 5 分钟</li>
            <li>休息提醒触发 4 次</li>
          </ul>
        </div>
        <div className="card">
          <h3>提醒模板</h3>
          <ul className="list">
            <li>结束时推送行情摘要</li>
            <li>休息时播放冥想提示</li>
            <li>超时未开始发送提醒</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pomodoro;
