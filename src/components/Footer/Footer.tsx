import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // TODO: Implement actual subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer custom-dark-bg">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__links">
              <Link to="/legal-insights-quarterly" className="footer__link" tabIndex={-1} style={{ pointerEvents: 'none', opacity: 0.5 }}>
                Legal Insights Quarterly
              </Link>
              <span className="footer__divider">|</span>
              <Link to="/declaration-clean-conduct" className="footer__link" tabIndex={-1} style={{ pointerEvents: 'none', opacity: 0.5 }}>
                Declaration on Promotion of Clean Conduct
              </Link>
              <span className="footer__divider">|</span>
              <Link to="/compliance" className="footer__link" tabIndex={-1} style={{ pointerEvents: 'none', opacity: 0.5 }}>
                Compliance
              </Link>
              <span className="footer__divider">|</span>
              <Link to="/privacy-notice" className="footer__link" tabIndex={-1} style={{ pointerEvents: 'none', opacity: 0.5 }}>
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
                <Linkedin size={16} />
              </a>
            </div>
            <div className="footer__copyright">
              © 2025 KARAÇAM & ŞİR. All rights reserved
            </div>
          </div>
          <div className="footer__right">
            <form onSubmit={handleSubscribe} className="footer__subscription-form">
              <label className="footer__subscription-label">Newsletter:</label>
              <div className="footer__subscription-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="footer__subscription-input"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="footer__subscription-button"
                >
                  <Mail size={14} />
                </button>
              </div>
            </form>
            {message && (
              <p className={`footer__subscription-message ${message.includes('error') ? 'error' : 'success'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 