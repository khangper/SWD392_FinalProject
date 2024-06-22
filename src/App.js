import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Landing/Login/Login";
import ForgotPassword from "./pages/Landing/ForgotPassword/ForgotPassword";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <div>
              <Navbar setSidebar={setSidebar} />
              <Home sidebar={sidebar} />
            </div>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
