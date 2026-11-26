import React, {lazy, Suspense, useEffect, useState} from "react";
import {skillsSection} from "../../portfolio";
import useDeferredEffect from "../../hooks/useDeferredEffect";
import "./SoftwareSkill.scss";

const LogoLoop = lazy(() =>
  import("./LogoLoop").catch(() => ({default: TechnologyList}))
);
const technologyColors = {
  PHP: "#777bb4",
  Laravel: "#ff2d20",
  HTML5: "#e34f26",
  CSS3: "#1572b6",
  JavaScript: "#d1a700",
  ReactJS: "#139fc9",
  MySQL: "#4479a1",
  MongoDB: "#13aa52",
  Git: "#f05032",
  GitHub: "#8250df",
  "Tailwind CSS": "#06b6d4",
  "VS Code": "#007acc",
  AWS: "#e47911"
};

const technologyLogos = skillsSection.softwareSkills.map(
  ({skillName, fontAwesomeClassname}) => ({
    title: skillName,
    hoverColor: technologyColors[skillName],
    node: <i className={fontAwesomeClassname} aria-hidden="true" />
  })
);

function TechnologyList() {
  return (
    <ul className="technology-grid" aria-label="Technologies">
      {technologyLogos.map(({title, node, hoverColor}) => (
        <li key={title} style={{"--technology-hover-color": hoverColor}}>
          {node}
          {title}
        </li>
      ))}
    </ul>
  );
}

export default function SoftwareSkill() {
  const ready = useDeferredEffect(400);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    function update() {
      setReducedMotion(Boolean(media?.matches));
    }
    update();
    media?.addEventListener?.("change", update);
    return () => media?.removeEventListener?.("change", update);
  }, []);

  return (
    <div className="technology-showcase">
      {ready && !reducedMotion ? (
        <Suspense fallback={<TechnologyList />}>
          <LogoLoop
            logos={technologyLogos}
            speed={80}
            direction="left"
            logoHeight={36}
            labels="below"
            gap={36}
            hoverSpeed={0}
            scaleOnHover
            draggable
            fadeOut
            intro={false}
            ariaLabel="Technologies"
          />
        </Suspense>
      ) : (
        <TechnologyList />
      )}
    </div>
  );
}
