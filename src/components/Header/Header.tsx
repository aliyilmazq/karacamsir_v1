import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          <Link to="/who-we-are" onClick={closeMenu}>{t('nav.whoWeAre')}</Link>
          <Link to="/what-we-are-doing" onClick={closeMenu}>{t('nav.whatWeAreDoing')}</Link>
          <Link to="/how-we-are-doing" onClick={closeMenu}>{t('nav.howWeAreDoing')}</Link>
          <Link to="/blog" onClick={closeMenu}>{t('nav.blog')}</Link>
          <Link to="/careers" onClick={closeMenu}>{t('nav.careers')}</Link>
          <Link to="/contact-us" onClick={closeMenu}>{t('nav.contactUs')}</Link>
          <div style={{ marginLeft: '2rem' }}>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 