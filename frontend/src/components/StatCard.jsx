const StatCard = ({ label, value, trend }) => {
  return (
    <div className="card stat-card">
      <div>
        <p className="label">{label}</p>
        <h3>{value}</h3>
      </div>
      <span className="trend">{trend}</span>
    </div>
  );
};

export default StatCard;
