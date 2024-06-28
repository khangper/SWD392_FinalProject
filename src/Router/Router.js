import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from '../pages/Landing/Login/Login'
import ForgotPassword from '../pages/Landing/ForgotPassword/ForgotPassword'
import SignUp from '../pages/Landing/SignUp1/SignUp'
import StepSignUp from '../pages/Landing/StepSignUp/StepSignUp'
import Thanks from '../pages/Thanks/Thanks'
import Error404 from '../pages/Error1/Error404'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import LiveOutput from '../pages/LiveOutput/LiveOutput'
import AllLiveStream from '../pages/AllLiveStream/AllLiveStream'
import AddLiveStream from '../pages/AddLiveStream/AddLiveStream'
import Explore from '../pages/Explore/Explore'
import Setting from '../pages/Setting/Setting'

const Router = () => {
    const [sidebar, setSidebar] = useState(true);
  return (
    <div>
         <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignUpStep" element={<StepSignUp/>} />
        <Route path="/thanks" element={<Thanks/>} />
        <Route path="error404" element={<Error404/>} />
        <Route
          path="/"
          element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="live_output" element={<LiveOutput/>}/>
          <Route path="add_livestream" element={<AddLiveStream/>} />
          <Route path="all_livestream" element={<AllLiveStream/>} />
          <Route path="explore" element={<Explore/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Router