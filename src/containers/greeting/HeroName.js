import React from "react";

export default function HeroName({name}) {
  return (
    <h1 id="hero-title" className="hero-name">
      <span>{name.replace(" ", "\n")}</span>
    </h1>
  );
}
