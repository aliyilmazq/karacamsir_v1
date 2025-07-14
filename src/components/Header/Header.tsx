import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="KARAÇAM & ŞİR" style={{ height: 44 }} />
          </Link>
        </div>
        <button 
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/practice-areas" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Practice Areas</NavLink>
          <NavLink to="/about-us" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
          <NavLink to="/team" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Team</NavLink>
          <NavLink to="/contact-us" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          <div style={{ marginLeft: '2rem' }}>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 