import {useEffect} from "react";

export default function usePointerLight(site) {
  useEffect(() => {
    const root = site.current;
    const light = root.querySelector(".pointer-light");
    const media = window.matchMedia?.(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    if (!media) return;

    let frame = 0;
    let surface;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    function clearSurface() {
      surface?.removeAttribute("data-lit");
      surface = null;
    }

    function reset() {
      root.removeAttribute("data-pointer");
      clearSurface();
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function draw() {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      light.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (surface) {
        const bounds = surface.getBoundingClientRect();
        const localX = `${targetX - bounds.left}px`;
        const localY = `${targetY - bounds.top}px`;
        surface.style.setProperty("--local-x", localX);
        surface.style.setProperty("--local-y", localY);
        surface.setAttribute("data-lit", "");
      }
      frame =
        Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5
          ? requestAnimationFrame(draw)
          : 0;
    }

    function move(event) {
      if (event.pointerType === "touch") return reset();
      targetX = event.clientX;
      targetY = event.clientY;
      if (!root.hasAttribute("data-pointer")) {
        x = targetX;
        y = targetY;
        root.setAttribute("data-pointer", "");
      }
      const next = event.target.closest?.(
        ".capability, .article-card, .education-entry, .contact-card"
      );
      if (next !== surface) {
        clearSurface();
        surface = next;
      }
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function onScroll() {
      if (!root.hasAttribute("data-pointer")) return;
      const target = document.elementFromPoint(targetX, targetY);
      if (target && root.contains(target)) {
        move({clientX: targetX, clientY: targetY, target});
      } else {
        reset();
      }
    }

    function disconnect() {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", onScroll);
      reset();
    }

    function configure() {
      disconnect();
      if (!media.matches) return;
      root.addEventListener("pointermove", move, {passive: true});
      root.addEventListener("pointerleave", reset);
      window.addEventListener("blur", reset);
      window.addEventListener("scroll", onScroll, {passive: true});
    }
    configure();
    media.addEventListener("change", configure);
    return () => {
      media.removeEventListener("change", configure);
      disconnect();
    };
  }, [site]);
}
