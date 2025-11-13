import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded.user);
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
        axios.defaults.headers.common['x-auth-token'] = token;
      } catch (error) {
        console.error('Invalid token');
        setToken(null);
      }
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['x-auth-token'];
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = async (username, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ username, password });
    try {
      const res = await axios.post('/api/auth/login', body, config);
      setToken(res.data.token);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
