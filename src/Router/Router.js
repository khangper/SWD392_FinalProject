import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from '../components/Layout/Layout'
import routes from './routerConfig';
import { AuthProvider } from './AuthContext';

const Router = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      {routes.publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}>
        {routes.privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
      </AuthProvider>
   
  </div>
  )
}

export default Router