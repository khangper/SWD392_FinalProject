import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { publicRoutes, privateRoutes } from './routerConfig';
import Layout from '../components/Layout/Layout';
import { PATH_NAME } from '../constant/pathname';
import Warning from '../components/Warning/Warning';

const Router = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = !!user;
  const [sidebar, setSidebar] = useState(true);
  const [warning, setWarning] = useState('');
  const location = useLocation();

  const filteredPrivateRoutes = useMemo(() => {
    return privateRoutes.map(({ path, element, roles }) => {
      const hasAccess = roles ? roles.includes(user?.role) : true;

      if (!hasAccess && user) {
        return { path, element: <Navigate to={PATH_NAME.HOME} replace /> };
      }

      return { path, element };
    });
  }, [user]);

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        setWarning('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [warning]);

  useEffect(() => {
    const deniedRoute = privateRoutes.find(({ path, roles }) => {
      const hasAccess = roles ? roles.includes(user?.role) : true;
      return !hasAccess && location.pathname === path;
    });

    if (deniedRoute) {
      setWarning('You do not have permission to access to this page');
    }
  }, [location.pathname, user]);

  return (
    <div>
      {warning && <Warning message={warning} />}
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Private Routes */}
        {isAuthenticated ? (
          <Route element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}>
            {filteredPrivateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        ) : (
          <Route path="/" element={<Navigate to={PATH_NAME.LOGIN} replace />} />
        )}

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to={PATH_NAME.ERROR_404} replace />} />
      </Routes>
    </div>
  );
};

export default Router;
