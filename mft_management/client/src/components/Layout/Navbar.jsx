import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          MFT
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/products/add" className="nav-links" onClick={() => setIsOpen(false)}>
              Ürün Ekleme
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={() => setIsOpen(false)}>
              Ürün Listeleme
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-links" onClick={() => setIsOpen(false)}>
              Ayar Sayfası
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-links" onClick={() => setIsOpen(false)}>
              Kullanıcı Yetki Sayfası
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-links-logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
