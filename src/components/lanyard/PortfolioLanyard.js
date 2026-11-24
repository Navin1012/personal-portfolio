import React, {lazy, Suspense, useEffect, useRef, useState} from "react";
import frontImage from "./navin-card-front.png";
import backImage from "./card-back.svg";
import strapImage from "./band.svg";
import "./PortfolioLanyard.scss";

const Lanyard = lazy(() => import("./Lanyard"));

export default function PortfolioLanyard() {
  const [animated, setAnimated] = useState(false);
  const home = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    function update() {
      setAnimated(
        Boolean(
          window.ResizeObserver &&
            window.IntersectionObserver &&
            !motion?.matches
        )
      );
    }
    update();
    const slot = home.current;
    const header = document.querySelector(".site-header");
    function measureFallback() {
      const lead = Math.max(
        0,
        slot.getBoundingClientRect().top +
          window.scrollY -
          (header?.offsetHeight ?? 0)
      );
      slot.style.setProperty("--lanyard-lead", `${lead}px`);
    }
    measureFallback();
    const resize = window.ResizeObserver && new ResizeObserver(measureFallback);
    resize?.observe(slot);
    if (header) resize?.observe(header);
    motion?.addEventListener?.("change", update);
    return () => {
      resize?.disconnect();
      motion?.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <div className="hero-art portfolio-lanyard-slot" ref={home}>
      <div className="portfolio-lanyard__fallback">
        <img src={frontImage} alt="Navin Chaudhary, Software Developer" />
      </div>
      <div className="portfolio-lanyard">
        {animated && (
          <Suspense fallback={null}>
            <Lanyard
              home={home}
              frontImage={frontImage}
              backImage={backImage}
              strapImage={strapImage}
              imageFit="contain"
              cardColor="#ffffff"
              strapColor="#111111"
              finish="matte"
              metal="silver"
              strapLength={0.35}
              breeze={0}
              intro={false}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
