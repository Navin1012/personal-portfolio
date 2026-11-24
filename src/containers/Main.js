import React, {useEffect, useRef} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import usePointerLight from "../hooks/usePointerLight";
import usePortfolioMotion from "../hooks/usePortfolioMotion";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "../Effects.scss";

const Main = () => {
  const site = useRef(null);
  usePortfolioMotion(site);
  usePointerLight(site);
  const darkPref = window.matchMedia?.("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    darkPref?.matches ?? false
  );
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#0B0B0B" : "#FAFAFA");
  }, [isDark]);

  useEffect(() => {
    const initialHash = window.location.hash;
    if (!initialHash) return;

    // Wait for the browser's initial scroll and the React layout to settle.
    let frame;
    function scrollToAnchor() {
      frame = window.requestAnimationFrame(() => {
        if (window.location.hash !== initialHash) return;
        const target = document.getElementById(initialHash.slice(1));
        target?.scrollIntoView?.({behavior: "instant"});
      });
    }

    if (document.readyState === "complete") scrollToAnchor();
    else window.addEventListener("load", scrollToAnchor, {once: true});

    return () => {
      window.removeEventListener("load", scrollToAnchor);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark, changeTheme}}>
      <div
        className="portfolio-site"
        ref={site}
        data-theme={isDark ? "dark" : "light"}
        id="page-top"
        tabIndex={-1}
      >
        <div className="pointer-light" aria-hidden="true" />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />

          <Profile />
        </main>
        <Footer />
      </div>
    </StyleProvider>
  );
};

export default Main;
