import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer custom-dark-bg">
      <div className="footer__container">
        <div className="footer__links-row">
          <Link to="/legal-insights-quarterly" className="footer__link">
            Legal Insights Quarterly
          </Link>
          <span className="footer__divider">|</span>
          <Link to="/declaration-clean-conduct" className="footer__link">
            Declaration on Promotion of Clean Conduct
          </Link>
          <span className="footer__divider">|</span>
          <Link to="/compliance" className="footer__link">
            Compliance
          </Link>
          <span className="footer__divider">|</span>
          <Link to="/privacy-notice" className="footer__link">
            Privacy Notice
          </Link>
          <span className="footer__divider">|</span>
          <a
            href="https://www.linkedin.com/company/karacamsir/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer__linkedin"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <div className="footer__bottom-text">
          © 2025 KARAÇAM & ŞİR. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer; 