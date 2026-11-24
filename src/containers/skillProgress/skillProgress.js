import React from "react";
import {techStack} from "../../portfolio";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <section className="portfolio-section" aria-labelledby="proficiency-title">
      <div className="frame section-split">
        <h2 id="proficiency-title" data-reveal>
          Technical Proficiency
        </h2>
        <ul className="panel proficiency-list" data-reveal-group>
          {techStack.experience.map(({Stack, progressPercentage}) => (
            <li key={Stack} data-reveal>
              <div className="proficiency-label">
                <span>{Stack}</span>
                <span aria-hidden="true">{progressPercentage}</span>
              </div>
              <div
                className="proficiency-track"
                role="meter"
                aria-label={Stack}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={parseFloat(progressPercentage)}
              >
                <div style={{width: progressPercentage}} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
