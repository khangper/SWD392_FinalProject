import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Router/AuthContext';
import InsSidebar from '../InstructorSidebar/InsSidebar';
import StdSidebar from '../StudentSidebar/StdSidebar';
import InsAStdFooter from '../InsAStdFooter/InsAStdFooter';
import StdNavbar from '../StudentNavbar/StdNavbar';

const Layout = ({ sidebar, setSidebar }) => {
  const { user } = useContext(AuthContext);

  const renderSidebar = () => {
    if (user?.role === 'instructor') {
      return <InsSidebar sidebar={sidebar} />;
    } else if (user?.role === 'student') {
      return <StdSidebar sidebar={sidebar} />;
    }
    return <Sidebar sidebar={sidebar} />;
  };

  const renderNavbar = () => {
    if (user?.role === 'student') {
      return <StdNavbar setSidebar={setSidebar} />;
    }
    return <Navbar setSidebar={setSidebar} />;
  };

  const renderFooter = () => {
    if (user?.role === 'instructor' || user?.role === 'student') {
      return <InsAStdFooter sidebar={sidebar} />;
    }
    return <Footer sidebar={sidebar} />;
  };

  const containerClass = user?.role === 'instructor' || user?.role === 'student' ? (sidebar ? 'container instructor' : 'container instructor-large') : (sidebar ? 'container' : 'container large-container');

  return (
    <div>
      {renderNavbar()}
      {renderSidebar()}
      <div className={containerClass}>
        <Outlet />
      </div>
      {renderFooter()}
    </div>
  );
};

export default Layout;
