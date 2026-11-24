import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import PortfolioLanyard from "../../components/lanyard/PortfolioLanyard";
import HeroName from "./HeroName";
import "./HeroEffects.scss";

const technologies = ["Laravel", "PHP", "MySQL", "React", "JavaScript"];

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  return (
    <section className="frame hero" id="greeting" aria-labelledby="hero-title">
      <div className="hero-content">
        <HeroName name={greeting.title} />
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
      <PortfolioLanyard />
    </section>
  );
}
