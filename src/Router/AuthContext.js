import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../constant/pathname';

export const AuthContext = createContext();

const loadSampleUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  if (storedUsers) {
    return storedUsers;
  } else {
    const initialUsers = [
      { id: 1, email: 'hao@gmail.com', password: '123', role: 'user' },
      { id: 2, email: 'khang@gmail.com', password: '123', role: 'instructor' },
      { id: 3, email: 'hai@gmail.com', password: '123', role: 'student' },
    ];
    localStorage.setItem('users', JSON.stringify(initialUsers));
    return initialUsers;
  }
};

let sampleUsers = loadSampleUsers();

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
    const foundUser = sampleUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      navigate(foundUser.role === 'instructor' ? PATH_NAME.INS_DASHBOARD : foundUser.role === 'student' ? PATH_NAME.STD_DASHBOARD : PATH_NAME.HOME);
    } else {
      console.log('Login failed: user not found');
    }
  };

  const signUp = (email, password, role) => {
    const newUser = { id: Date.now(), email, password, role };
    sampleUsers.push(newUser); 
    localStorage.setItem('users', JSON.stringify(sampleUsers));
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navigate(role === 'instructor' ? PATH_NAME.INS_DASHBOARD : PATH_NAME.STD_DASHBOARD);
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate(PATH_NAME.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
