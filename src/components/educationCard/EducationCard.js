import React from "react";

export default function EducationCard({school}) {
  return (
    <article className="panel education-entry">
      {school.logo && (
        <img className="school-logo" src={school.logo} alt="" loading="lazy" />
      )}
      <div>
        <h3>{school.schoolName}</h3>
        <p className="degree">{school.subHeader}</p>
        <p className="education-date">{school.duration}</p>
        <p>{school.desc}</p>
        {school.descBullets && (
          <ul>
            {school.descBullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
