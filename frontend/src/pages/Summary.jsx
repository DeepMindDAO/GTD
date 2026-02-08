import { summaries } from "../data.js";

const Summary = () => {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h2>每日总结</h2>
          <p className="muted">自动生成工作日志与关键复盘信息。</p>
        </div>
        <button className="button primary">生成今日总结</button>
      </div>
      <div className="grid two">
        {summaries.map((summary) => (
          <div className="card" key={summary.title}>
            <h3>{summary.title}</h3>
            <p className="muted">{summary.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
