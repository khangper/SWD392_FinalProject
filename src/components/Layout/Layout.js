import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;