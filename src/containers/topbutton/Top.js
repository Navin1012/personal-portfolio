import React from "react";

export default function Top() {
  return (
    <a
      className="icon-control top-action"
      href="#page-top"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 13 6-6 6 6m-6-6v12" />
      </svg>
    </a>
  );
}
