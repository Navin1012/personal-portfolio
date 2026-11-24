import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import "./Contact.scss";

export default function Contact() {
  const {title, headline, subtitle, email_address: email, number} = contactInfo;

  return (
    <section
      className="portfolio-section contact-band"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="frame contact-layout" data-reveal-group>
        <div className="contact-intro" data-reveal>
          <p className="contact-label">{title}</p>
          <h2 id="contact-title">{headline}</h2>
          <p className="section-intro">{subtitle}</p>
          <a className="action action-primary" href={`mailto:${email}`}>
            <i className="far fa-envelope" aria-hidden="true" />
            Email Me
          </a>
        </div>

        <div className="panel contact-card" data-reveal>
          <h3>Contact details</h3>
          <a className="contact-method" href={`mailto:${email}`}>
            <i className="far fa-envelope" aria-hidden="true" />
            <span>
              <span className="contact-method-label">Email</span>
              {email}
            </span>
          </a>
          {number && (
            <a className="contact-method" href={`tel:${number}`}>
              <i className="fas fa-phone" aria-hidden="true" />
              <span>
                <span className="contact-method-label">Phone</span>
                {number}
              </span>
            </a>
          )}
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
