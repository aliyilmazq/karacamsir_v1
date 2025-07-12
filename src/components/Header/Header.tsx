import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

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
          <Link to="/who-we-are" onClick={closeMenu}>Who We Are</Link>
          <Link to="/what-we-are-doing" onClick={closeMenu}>What We Are Doing</Link>
          <Link to="/how-we-are-doing" onClick={closeMenu}>How We Are Doing</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/careers" onClick={closeMenu}>Careers</Link>
          <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 