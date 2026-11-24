import React, {useContext, useEffect, useState} from "react";
import StyleContext from "../../contexts/StyleContext";
import NeonLogo from "./NeonLogo";

const palettes = {
  light: {
    baseColor: "#303b55",
    colors: ["#9279bd", "#7562a7", "#5c67a1", "#426189", "#2b364e"]
  },
  dark: {
    baseColor: "#dce4f3",
    colors: ["#e4d9fa", "#bbaee7", "#9daee1", "#849fca", "#687eaa"]
  }
};

export default function HeroName({name}) {
  const {isDark} = useContext(StyleContext);
  const [showEffect, setShowEffect] = useState(false);
  const text = name.replace(" ", "\n");
  const palette = isDark ? palettes.dark : palettes.light;

  useEffect(() => {
    const media = window.matchMedia?.(
      "(prefers-reduced-motion: reduce), (forced-colors: active)"
    );
    function syncPreference() {
      setShowEffect(!media?.matches);
    }
    syncPreference();
    media?.addEventListener?.("change", syncPreference);
    return () => media?.removeEventListener?.("change", syncPreference);
  }, []);

  return (
    <h1 id="hero-title" className="hero-neon">
      {showEffect && (
        <NeonLogo
          {...palette}
          text={text}
          fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          fontWeight={700}
          scale={0.88}
          heat={0.16}
          radius={1.03}
          softness={0.14}
          swell={0.06}
          idle="none"
          intro={false}
          igniteOnClick={false}
          dpr={1.5}
          aria-hidden="true"
        />
      )}
      <span className="hero-neon__text">{text}</span>
    </h1>
  );
}
