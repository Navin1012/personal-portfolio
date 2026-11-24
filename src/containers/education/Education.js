import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;

  return (
    <section
      className="portfolio-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="frame section-split">
        <h2 id="education-title">Education</h2>
        <div className="education-list" data-reveal>
          {educationInfo.schools.map(school => (
            <EducationCard
              key={school.schoolName + school.subHeader}
              school={school}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
