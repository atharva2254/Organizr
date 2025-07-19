import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
