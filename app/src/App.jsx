import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import api from "./api";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/user/me", { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        if (error.response?.status === 401) {
          setUser(null);
        } else {
          console.error("Failed to fetch user:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            user ? <Dashboard user={user} setUser={setUser} /> : <Home />
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
