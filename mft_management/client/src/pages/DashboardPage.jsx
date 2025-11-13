import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Hoş Geldiniz, {user && user.username}!</h1>
    </div>
  );
};

export default DashboardPage;
