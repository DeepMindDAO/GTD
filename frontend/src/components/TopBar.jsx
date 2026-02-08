const TopBar = () => {
  return (
    <header className="topbar">
      <div>
        <h1>工程级 GTD 控制台</h1>
        <p>用系统化流程管理习惯、任务与信息流。</p>
      </div>
      <div className="topbar-actions">
        <button className="button ghost">导出日报</button>
        <button className="button primary">创建新任务</button>
      </div>
    </header>
  );
};

export default TopBar;
