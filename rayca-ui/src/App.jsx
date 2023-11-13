import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import ProjectsPage from "./pages/Projects";
import Create from "./pages/Create";
import Project from "./pages/Project";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
