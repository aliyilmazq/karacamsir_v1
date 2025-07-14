import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__block">
            <h4>Legal</h4>
            <nav className="footer__nav">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </nav>
          </div>
          <div className="footer__block">
            <h4>Contact</h4>
            <div className="footer__contact">
              <p>Karaçam & Şir Law Firm</p>
              <p>Istanbul, Turkey</p>
              <p>
                <a href="mailto:info@karacam-sir.com">info@karacam-sir.com</a>
              </p>
              <p>+90 212 000 00 00</p>
            </div>
          </div>
          <div className="footer__block">
            <h4>Connect</h4>
            <div className="footer__social">
              <a 
                href="https://linkedin.com/company/karacam-sir" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="footer__social-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 Karaçam & Şir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 