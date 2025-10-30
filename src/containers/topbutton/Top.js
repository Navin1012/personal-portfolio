import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  const TopEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const button = document.getElementById("topButton");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        button.classList.add("show", "pulse");
      } else {
        button.classList.remove("show", "pulse");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once at mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
