import React, { useContext, useState, useEffect } from 'react';
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

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => setWarning(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [warning]);

  const renderRoutes = (routes) => {
    return routes.map(({ path, element, roles }) => {
      const hasAccess = roles ? roles.includes(user?.role) : true;

      if (!hasAccess && user) {
        return (
          <Route
            key={path}
            path={path}
            element={<Navigate to={PATH_NAME.HOME} replace />}
            onEnter={() => setWarning('You do not have access to this page')}
          />
        );
      }

      return <Route key={path} path={path} element={element} />;
    });
  };

  return (
    <div>
      {warning && (
        <Warning message={warning} onClose={() => setWarning('')} />
      )}
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Private Routes */}
        {isAuthenticated ? (
          <Route element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}>
            {renderRoutes(privateRoutes)}
          </Route>
        ) : (
          <Route path="*" element={<Navigate to={PATH_NAME.LOGIN} replace />} />
        )}

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to={PATH_NAME.ERROR_404} replace />} />
      </Routes>
    </div>
  );
};

export default Router;
