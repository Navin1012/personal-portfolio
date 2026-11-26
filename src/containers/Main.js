import React, {Suspense, useEffect, useRef} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import {
  achievementSection,
  bigProjects,
  openSource,
  podcastSection,
  talkSection,
  twitterDetails,
  workExperiences
} from "../portfolio";
import "../components/dotGrid/DotGrid.css";
import useDeferredEffect, {
  lazyOptionalEffect
} from "../hooks/useDeferredEffect";
import usePortfolioMotion from "../hooks/usePortfolioMotion";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "../Effects.scss";

const DotGrid = lazyOptionalEffect(() =>
  import("../components/dotGrid/DotGrid")
);
const WorkExperience = lazyOptionalEffect(() =>
  import("./workExperience/WorkExperience")
);
const Projects = lazyOptionalEffect(() => import("./projects/Projects"));
const StartupProject = lazyOptionalEffect(() =>
  import("./StartupProjects/StartupProject")
);
const Achievement = lazyOptionalEffect(() =>
  import("./achievement/Achievement")
);
const Talks = lazyOptionalEffect(() => import("./talks/Talks"));
const Twitter = lazyOptionalEffect(() => import("./twitter-embed/twitter"));
const Podcast = lazyOptionalEffect(() => import("./podcast/Podcast"));

const Main = () => {
  const site = useRef(null);
  usePortfolioMotion(site);
  const gridReady = useDeferredEffect(400);
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
    let sectionObserver;
    function scrollToAnchor() {
      frame = window.requestAnimationFrame(() => {
        if (window.location.hash !== initialHash) return;
        function findAndScroll() {
          const target = document.getElementById(initialHash.slice(1));
          if (target || window.location.hash !== initialHash) {
            sectionObserver?.disconnect();
          }
          if (!target || window.location.hash !== initialHash) return false;
          target.scrollIntoView?.({behavior: "instant"});
          return true;
        }

        if (!findAndScroll() && window.MutationObserver) {
          sectionObserver = new MutationObserver(findAndScroll);
          sectionObserver.observe(site.current, {
            childList: true,
            subtree: true
          });
        }
      });
    }

    if (document.readyState === "complete") scrollToAnchor();
    else window.addEventListener("load", scrollToAnchor, {once: true});

    return () => {
      window.removeEventListener("load", scrollToAnchor);
      window.cancelAnimationFrame(frame);
      sectionObserver?.disconnect();
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
        <div className="dot-grid portfolio-dot-grid" aria-hidden="true">
          {gridReady && (
            <Suspense fallback={null}>
              <DotGrid
                baseColor={isDark ? "#3a3446" : "#e5e0ea"}
                activeColor={isDark ? "#ffffff" : "#dccded"}
                shape="circle"
                dotSize={5}
                gap={18}
                proximity={140}
                strength={1}
                bounce={0.6}
                tension={0.4}
                returnDuration={0.8}
                shockRadius={320}
                shockStrength={5}
                swell={0.8}
                stretch={0.5}
                glow={0.5}
                fade={0}
                intro={false}
                opacity={isDark ? 0.9 : 0.72}
                mouseInteraction
                clickShock
                dpr={1.5}
              />
            </Suspense>
          )}
        </div>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <Suspense fallback={null}>
            {workExperiences.display && <WorkExperience />}
            {openSource.display && <Projects />}
            {bigProjects.display && <StartupProject />}
            {achievementSection.display && <Achievement />}
          </Suspense>
          <Blogs />
          <Suspense fallback={null}>
            {talkSection.display && <Talks />}
            {twitterDetails.display && <Twitter />}
            {podcastSection.display && <Podcast />}
          </Suspense>
          <Profile />
        </main>
        <Footer />
      </div>
    </StyleProvider>
  );
};

export default Main;
