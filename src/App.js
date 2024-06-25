import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Landing/Login/Login";
import ForgotPassword from "./pages/Landing/ForgotPassword/ForgotPassword";
import Layout from "./components/Layout/Layout";
import AddLiveStream from "./pages/AddLiveStream/AddLiveStream";
import AllLiveStream from "./pages/AllLiveStream/AllLiveStream";
import SignUp from "./pages/Landing/SignUp1/SignUp";
import StepSignUp from "./pages/Landing/StepSignUp/StepSignUp";
import { Thanks } from "./pages/Thanks/Thanks";
import Error404 from "./pages/Error1/Error404";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignUpStep" element={<StepSignUp/>} />
        <Route path="thanks" element={<Thanks/>} />
        <Route path="error404" element={<Error404/>} />
        <Route
          path="/"
          element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="add_livestream" element={<AddLiveStream/>} />
          <Route path="all_livestream" element={<AllLiveStream/>} />

          
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
