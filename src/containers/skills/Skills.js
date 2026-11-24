import React from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section
      className="portfolio-section"
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-title"
    >
      <div className="frame">
        <div data-reveal>
          <h2 id="skills-title">{skillsSection.title}</h2>
          <p className="section-intro">{skillsSection.subTitle}</p>
        </div>
        <ul className="card-grid capability-grid" data-reveal-group>
          {skillsSection.skills.map(({title, icon, description}) => (
            <li className="panel capability" key={title} data-reveal>
              <i className={icon} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="toolkit" data-reveal>
          <h3>Technologies</h3>
          <SoftwareSkill />
        </div>
      </div>
    </section>
  );
}
