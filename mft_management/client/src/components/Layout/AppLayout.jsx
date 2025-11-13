import React from 'react';
import Navbar from './Navbar';
import './AppLayout.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default AppLayout;
