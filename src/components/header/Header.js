import React, {useEffect, useRef, useState} from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Top from "../../containers/topbutton/Top";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

const links = [
  [true, "page-top", "Home"],
  [skillsSection.display, "skills", "Skills"],
  [workExperiences.display, "experience", "Work Experiences"],
  [openSource.display, "opensource", "Open Source"],
  [achievementSection.display, "achievements", "Achievements"],
  [blogSection.display, "blogs", "Blogs"],
  [talkSection.display, "talks", "Talks"],
  [resumeSection.display, "resume", "Resume"],
  [true, "contact", "Contact Me"]
];

const navigationItems = links
  .filter(([visible]) => visible)
  .map(([, id, label]) => ({id, label, href: `#${id}`}));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("page-top");
  const menuButton = useRef(null);

  useEffect(() => {
    let frame;

    function update() {
      frame = undefined;
      const targets = navigationItems
        .map(({id}) => document.getElementById(id))
        .filter(Boolean);
      const line = Math.min(180, window.innerHeight * 0.25);
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? targets[targets.length - 1]
        : targets
            .filter(target => target.getBoundingClientRect().top <= line)
            .pop();

      setActiveSection(current?.id ?? "page-top");
    }

    function scheduleUpdate() {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, {passive: true});
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  function handleEscape(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current.focus();
    }
  }

  return (
    <header
      className="site-header"
      onKeyDown={handleEscape}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setMenuOpen(false);
      }}
    >
      <div className="frame header-inner">
        <a href="/" className="wordmark" aria-label="Navin, home">
          {greeting.username}
        </a>
        <div className="header-controls">
          <Top />
          <button
            type="button"
            className="icon-control menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            ref={menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path
                d={
                  menuOpen ? "M6 6l12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <ToggleSwitch />
        </div>
        <nav
          id="site-nav"
          className="site-nav"
          data-open={menuOpen}
          aria-label="Main navigation"
        >
          {navigationItems.map(({id, label, href}) => (
            <a
              key={id}
              href={href}
              aria-current={id === activeSection ? "location" : undefined}
              onClick={event => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                setActiveSection(id);
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
