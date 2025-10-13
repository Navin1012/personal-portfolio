import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={`main contact-section ${isDark ? "dark-mode" : ""}`}
        id="contact"
      >
        <div className="contact-container">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">{contactInfo.title}</h1>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>
          </div>

          {/* Content Section */}
          <div className="contact-content">
            <div className="contact-info">
              {/* Contact Details */}
              <div className="contact-details">
                {contactInfo.number && (
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92V19.92C22 20.52 21.53 21 20.94 21C10.13 21 3 13.87 3 3.06C3 2.47 3.48 2 4.08 2H7.08C7.63 2 8.08 2.45 8.08 3C8.08 4.92 8.53 6.75 9.38 8.38C9.58 8.78 9.48 9.27 9.13 9.56L7.8 10.66C9.37 13.78 11.72 16.12 14.83 17.68L15.92 16.35C16.22 16 16.71 15.9 17.11 16.1C18.74 16.95 20.57 17.4 22.49 17.4C23.05 17.4 23.5 17.85 23.5 18.4V21.4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <a
                      className="contact-detail"
                      href={"tel:" + contactInfo.number}
                    >
                      {contactInfo.number}
                    </a>
                  </div>
                )}

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    {contactInfo.email_address}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-social">
                <p className="social-title">Follow me on</p>
                <SocialMedia />
              </div>

              {/* Additional Info */}
              {contactInfo.description && (
                <div className="contact-description">
                  <p>{contactInfo.description}</p>
                </div>
              )}
            </div>

            {/* Illustration */}
            <div className="contact-illustration">
              {illustration.animated ? (
                <DisplayLottie animationData={email} />
              ) : (
                <img
                  alt="Contact illustration"
                  src={require("../../assets/images/contactMailDark.svg")}
                />
              )}
            </div>
          </div>

          {/* Background Elements */}
          <div className="contact-background">
            <div className="bg-circle-1"></div>
            <div className="bg-circle-2"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
