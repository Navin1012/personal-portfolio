import React from "react";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <ul className="technology-grid">
      {skillsSection.softwareSkills.map(({skillName, fontAwesomeClassname}) => (
        <li key={skillName}>
          <i className={fontAwesomeClassname} aria-hidden="true" />
          {skillName}
        </li>
      ))}
    </ul>
  );
}
