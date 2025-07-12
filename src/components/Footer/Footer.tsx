import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__block footer__block--contact">
            <h4>Contact Us</h4>
            <div className="footer__contact-item">
              <span className="footer__icon">📞</span>
              <span>+90 212 000 00 00</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__icon">✉️</span>
              <a href="mailto:info@karacam-sir.com">info@karacam-sir.com</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__icon">📍</span>
              <span>Example St. No:1<br />Istanbul, Turkey</span>
            </div>
          </div>
          <div className="footer__block footer__block--navigation">
            <h4>Quick Links</h4>
            <nav className="footer__nav">
              <Link to="/">Home</Link>
              <Link to="/who-we-are">Who We Are</Link>
              <Link to="/what-we-are-doing">Practice Areas</Link>
              <Link to="/how-we-are-doing">Our Approach</Link>
              <Link to="/blog">Blog & Insights</Link>
              <Link to="/contact-us">Contact</Link>
            </nav>
          </div>
          <div className="footer__block footer__block--legal">
            <h4>Legal Information</h4>
            <nav className="footer__nav">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/disclaimer">Legal Disclaimer</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </nav>
          </div>
          <div className="footer__block footer__block--about">
            <h4>About Karaçam & Şir</h4>
            <p className="footer__description">
              Leading law firm in Istanbul providing comprehensive legal services 
              with expertise in corporate law, litigation, and international business.
            </p>
            <div className="footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span>𝕏</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p>© {new Date().getFullYear()} Karaçam & Şir Law Firm. All rights reserved.</p>
            <p className="footer__credits">Designed with excellence in mind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 