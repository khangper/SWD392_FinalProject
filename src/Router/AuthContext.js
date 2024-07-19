import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../constant/pathname';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    const sampleUsers = [
      { id: 1, email: 'hao@gmail.com', password: '123', role: 'user' },
      { id: 2, email: 'khang@gmail.com', password: '123', role: 'instructor' },
      { id: 3, email: 'hai@gmail.com', password: '123', role: 'student' },
    ];

    const foundUser = sampleUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      if (foundUser.role === 'instructor') {
        navigate('/ins-dashboard');
      } else if (foundUser.role === 'student') {
        navigate('/student-dashboard');
      } else {
        navigate(PATH_NAME.HOME);
      }
    } else {
      console.error('Login failed: user not found');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
