import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={`skills-section ${isDark ? "dark-mode" : ""}`} id="skills">
      <div className="skills-container">
        <Fade left duration={1000}>
          <div className="skills-visual">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Developer at work"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-content">
            <h1 className="skills-title">{skillsSection.title}</h1>
            <p className="skills-subtitle">{skillsSection.subTitle}</p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>

      {/* Skills list moved below the main content */}
      <Fade bottom duration={1000}>
        <div className="skills-list-container">
          <div className="skills-list">
            {skillsSection.skills.map((skill, i) => (
              <div key={i} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
