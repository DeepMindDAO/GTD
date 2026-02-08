import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Habits from "./pages/Habits.jsx";
import Todos from "./pages/Todos.jsx";
import Pomodoro from "./pages/Pomodoro.jsx";
import Summary from "./pages/Summary.jsx";
import Alerts from "./pages/Alerts.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <TopBar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
