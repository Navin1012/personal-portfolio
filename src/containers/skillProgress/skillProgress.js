import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="progress-section">
          <div className="progress-container">
            <div className="progress-content">
              <h1 className="progress-title">Technical Proficiency</h1>
              <div className="skills-grid">
                {techStack.experience.map((exp, i) => {
                  return (
                    <div key={i} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-name">{exp.Stack}</span>
                        <span className="skill-percentage">{exp.progressPercentage}</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: exp.progressPercentage }}
                          data-percentage={exp.progressPercentage}
                        >
                          <div className="progress-glow"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="progress-visual">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Technical Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}