import React from "react";
import {greeting} from "../../portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame footer-inner">
        <p data-reveal>
          &copy; {new Date().getFullYear()} {greeting.title}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
