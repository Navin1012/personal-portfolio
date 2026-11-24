import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

export default function ToggleSwitch() {
  const {isDark, changeTheme} = useContext(StyleContext);
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="icon-control theme-toggle"
      aria-label={label}
      title={label}
      onClick={changeTheme}
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
        <g className="theme-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
        </g>
        <path
          className="theme-moon"
          d="M20.9 13.35A9 9 0 0 1 10.65 3.1 9 9 0 1 0 20.9 13.35Z"
        />
      </svg>
    </button>
  );
}
