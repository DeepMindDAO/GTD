const AlertList = ({ alerts }) => {
  return (
    <div className="card">
      <h2>重要提醒</h2>
      <div className="stack">
        {alerts.map((alert) => (
          <div className="alert-row" key={alert.title}>
            <div>
              <p className="label">{alert.title}</p>
              <p className="muted">来源：{alert.source}</p>
            </div>
            <span className={`chip ${alert.level === "高" ? "chip-danger" : ""}`}>
              {alert.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertList;
