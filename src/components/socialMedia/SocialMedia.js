import React from "react";
import {socialMediaLinks} from "../../portfolio";

const networks = [
  ["github", "GitHub", "fab fa-github"],
  ["linkedin", "LinkedIn", "fab fa-linkedin-in"],
  ["gmail", "Email", "fas fa-envelope"],
  ["instagram", "Instagram", "fab fa-instagram"],
  ["gitlab", "GitLab", "fab fa-gitlab"],
  ["facebook", "Facebook", "fab fa-facebook-f"],
  ["twitter", "Twitter", "fab fa-twitter"],
  ["medium", "Medium", "fab fa-medium"],
  ["stackoverflow", "Stack Overflow", "fab fa-stack-overflow"],
  ["kaggle", "Kaggle", "fab fa-kaggle"]
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  return (
    <ul className="social-links" aria-label="Social and email links">
      {networks
        .filter(([key]) => socialMediaLinks[key])
        .map(([key, label, icon]) => (
          <li key={key}>
            <a
              className="icon-control"
              href={
                key === "gmail"
                  ? `mailto:${socialMediaLinks[key]}`
                  : socialMediaLinks[key]
              }
              target={key === "gmail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <i className={icon} aria-hidden="true" />
            </a>
          </li>
        ))}
    </ul>
  );
}
