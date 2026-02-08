import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "控制台" },
  { to: "/habits", label: "习惯" },
  { to: "/todos", label: "待办" },
  { to: "/pomodoro", label: "番茄" },
  { to: "/summary", label: "总结" },
  { to: "/alerts", label: "提醒" },
  { to: "/settings", label: "设置" }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-mark">GTD</span>
        <span className="logo-sub">工程级效率系统</span>
      </div>
      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>版本 v0.1</p>
        <p>同步状态：在线</p>
      </div>
    </aside>
  );
};

export default Sidebar;
