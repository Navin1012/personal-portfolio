import React from "react";
import artwork from "../../assets/images/manOnTable.svg";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";

const technologies = ["Laravel", "PHP", "MySQL", "React", "JavaScript"];

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  return (
    <section className="frame hero" id="greeting" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">{greeting.title}</h1>
        <p className="hero-role">{greeting.role}</p>
        <p className="hero-intro">{greeting.subTitle}</p>
        <div className="hero-actions">
          <a href="#contact" className="action action-primary">
            Get In Touch
          </a>
          {greeting.resumeLink && (
            <a
              href={greeting.resumeLink}
              className="action"
              download="Navin-Chaudhary-Resume.pdf"
            >
              <i className="far fa-file-pdf" aria-hidden="true" />
              Download Resume
            </a>
          )}
        </div>
        <ul className="hero-tags" aria-label="Core technologies">
          {technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <SocialMedia />
      </div>
      <div className="hero-art">
        <img src={artwork} alt="" />
      </div>
    </section>
  );
}
