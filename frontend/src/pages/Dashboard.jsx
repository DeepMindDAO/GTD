import AlertList from "../components/AlertList.jsx";
import HabitTracker from "../components/HabitTracker.jsx";
import PomodoroTimer from "../components/PomodoroTimer.jsx";
import StatCard from "../components/StatCard.jsx";
import TodoList from "../components/TodoList.jsx";
import { alerts, habits, stats, todos } from "../data.js";

const Dashboard = () => {
  return (
    <section className="page">
      <div className="grid stats">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid two">
        <HabitTracker habits={habits} />
        <TodoList todos={todos} />
      </div>
      <div className="grid two">
        <PomodoroTimer />
        <AlertList alerts={alerts} />
      </div>
    </section>
  );
};

export default Dashboard;
