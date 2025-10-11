import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
 return (
  <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Made with ❤️ by Navin Chaudhary")}
      </p>
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Built with React ⚛️ and powered by{" "}
        <a
          href="https://laravel.com/"
          target="_blank"
          rel="noreferrer"
        >
          Laravel
        </a>
      </p>
    </div>
  </Fade>
);

}
