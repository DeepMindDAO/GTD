const Settings = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>系统设置</h2>
          <p className="muted">管理提醒渠道、账号与数据同步。</p>
        </div>
        <button className="button primary">保存设置</button>
      </div>
      <div className="grid two">
        <div className="card">
          <h3>通知渠道</h3>
          <ul className="list">
            <li>系统通知：已开启</li>
            <li>Telegram：待配置</li>
            <li>邮件通知：已开启</li>
          </ul>
        </div>
        <div className="card">
          <h3>监控偏好</h3>
          <ul className="list">
            <li>价格异常波动阈值：5%</li>
            <li>宏观消息优先级：高</li>
            <li>社媒热点关键词：可自定义</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Settings;
