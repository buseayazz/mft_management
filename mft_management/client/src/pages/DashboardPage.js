import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome, {user && user.username}</h1>
      <p>Your role is: {user && user.role}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
