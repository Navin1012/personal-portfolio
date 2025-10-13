import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-content">
              {/* Badge */}
              <div className={`professional-badge ${isDark ? 'dark' : 'light'}`}>
                <span className="badge-icon">💻</span>
                <span>PHP Laravel Developer</span>
              </div>

              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                Hi, I'm <span className="name-highlight">Navin Chaudhary</span>
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>


              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>

              {/* Tech Stack Pill */}
              <div className="tech-stack-pills">
                <span className="tech-pill">Laravel</span>
                <span className="tech-pill">PHP</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">JavaScript</span>
              </div>

              <SocialMedia />

              <div className="cta-section">
                {/* Main CTA Buttons */}
                <div className="cta-buttons">
                  <a href="#contact" className="cta-btn primary-cta">
                    <span className="btn-icon">💬</span>
                    <span className="btn-text">Get In Touch</span>
                    <div className="hover-effect"></div>
                  </a>

                  {greeting.resumeLink && (
                    <a
                      href={greeting.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn secondary-cta"
                    >
                      <span className="btn-icon">📄</span>
                      <span className="btn-text">View Resume</span>
                      <div className="download-arrow">↓</div>
                      <div className="hover-effect"></div>
                    </a>
                  )}
                </div>


              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <div className="lottie-container">
                <DisplayLottie animationData={landingPerson} />
                <div className="floating-element element-1">🚀</div>
                <div className="floating-element element-2">💡</div>
                <div className="floating-element element-3">⭐</div>
              </div>
            ) : (
              <div className="image-container">
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                />
                <div className="image-overlay"></div>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </Fade>
  );
}