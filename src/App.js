import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Landing/Login/Login";
import ForgotPassword from "./pages/Landing/ForgotPassword/ForgotPassword";
import Layout from "./components/Layout/Layout";
import SignUp from "./pages/Landing/SignUp1/SignUp";
import StepSignUp from "./pages/Landing/StepSignUp/StepSignUp";
import AllLiveStream from "./pages/AllLiveStream/AllLiveStream";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
       <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
       <Route path="/login" element={<Login />} />
       <Route path="/Sign-up" element={<SignUp />} />
       <Route path="/StepSignUp" element={<StepSignUp/>} />

       <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/"
        element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}
      >
        <Route path="home" element={<Home />} />
        <Route path="/AllLiveStream" element={<AllLiveStream/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
