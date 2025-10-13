import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="20px">
      <footer className={`footer ${isDark ? "dark-mode" : ""}`}>
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-message">
                <div className="footer-heart">
                  {emoji("❤️")}
                </div>
                <p className="footer-text">
                  Crafted with passion by <span className="footer-name">Navin Chaudhary</span>
                </p>
              </div>
              
              <div className="footer-tech">
                <p className="footer-built-with">
                  Built with modern technologies
                </p>
                <div className="tech-stack">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-link"
                  >
                    <div className="tech-icon react-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 18.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-12c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"/>
                        <path d="M12 21.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm0-18c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"/>
                        <path d="M12 24c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm0-23c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/>
                      </svg>
                    </div>
                    React
                  </a>
                  <span className="tech-separator">+</span>
                  <a
                    href="https://laravel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-link"
                  >
                    <div className="tech-icon laravel-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    Laravel
                  </a>
                </div>
              </div>
            </div>

            
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>&copy; {currentYear} Navin Chaudhary. All rights reserved.</span>
            </div>
            <div className="footer-extra">
              <span className="footer-version">v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="footer-background">
          <div className="footer-wave"></div>
        </div>
      </footer>
    </Fade>
  );
}