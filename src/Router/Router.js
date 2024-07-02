import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from '../components/Layout/Layout'
import routes from './routerConfig';

const Router = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {routes.publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
        {routes.privateRoutes.map((route, index) => (
            <Route key={index} element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}>
                <Route path={route.path} element={route.element} />
            </Route>
        ))}
    </Routes>
</div>
  )
}

export default Router