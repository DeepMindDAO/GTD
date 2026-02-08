import { alerts } from "../data.js";

const Alerts = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>重要提醒</h2>
          <p className="muted">集中管理行情、宏观与社媒信号。</p>
        </div>
        <button className="button primary">新增监控</button>
      </div>
      <div className="card">
        <div className="stack">
          {alerts.map((alert) => (
            <div className="alert-row" key={alert.title}>
              <div>
                <p className="label">{alert.title}</p>
                <p className="muted">来源：{alert.source}</p>
              </div>
              <div className="habit-actions">
                <span className={`chip ${alert.level === "高" ? "chip-danger" : ""}`}>
                  {alert.level}
                </span>
                <button className="button ghost">查看</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alerts;
