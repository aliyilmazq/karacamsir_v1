import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="KARAÇAM & ŞİR" style={{ height: 44 }} />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/who-we-are">Who We Are</Link>
        <Link to="/what-we-are-doing">What We Are Doing</Link>
        <Link to="/how-we-are-doing">How We Are Doing</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header; 