import {useEffect} from "react";

export default function usePortfolioMotion(site) {
  useEffect(() => {
    const root = site.current;
    const hero = root.querySelector(".hero");

    if (hero && !window.location.hash && !window.scrollY) {
      try {
        if (!sessionStorage.getItem("portfolioHeroSeen")) {
          sessionStorage.setItem("portfolioHeroSeen", "true");
          hero.dataset.intro = "true";
        }
      } catch {
        // Keep the hero static when session storage is unavailable.
      }
    }

    const top = root.querySelector(".top-action");
    if (!window.IntersectionObserver) {
      if (top) top.dataset.available = "true";
      return;
    }

    const reveal = new IntersectionObserver(
      entries => {
        const groups = new Map();
        for (const {target, isIntersecting} of entries) {
          if (!isIntersecting) continue;

          const group = target.closest("[data-reveal-group]");
          if (group) {
            const index = groups.get(group) || 0;
            target.style.setProperty(
              "--reveal-delay",
              `calc(${Math.min(index, 3)} * var(--motion-step))`
            );
            groups.set(group, index + 1);
          }
          target.dataset.revealed = "true";
          reveal.unobserve(target);
        }
      },
      {threshold: 0.12}
    );
    root
      .querySelectorAll("[data-reveal]")
      .forEach(target => reveal.observe(target));

    const scrollInset =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
      0;
    const heroExit = new IntersectionObserver(
      ([entry]) => {
        top.dataset.available = String(
          !entry.isIntersecting &&
            entry.boundingClientRect.bottom <= scrollInset + 1
        );
      },
      {rootMargin: `-${scrollInset + 1}px 0px 0px`}
    );
    if (hero && top) heroExit.observe(hero);
    else if (top) top.dataset.available = "true";

    return () => {
      reveal.disconnect();
      heroExit.disconnect();
    };
  }, [site]);
}
