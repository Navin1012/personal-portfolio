import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className = "",
  href,
  newTab = false,
  variant = "primary",
  size = "medium",
  icon = null,
  disabled = false,
  loading = false,
  onClick
}) {
  const handleClick = e => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const ButtonContent = () => (
    <>
      {loading && (
        <div className="button-loader">
          <div className="loader-spinner"></div>
        </div>
      )}
      {icon && !loading && <span className="button-icon">{icon}</span>}
      <span className="button-text">{text}</span>
      <span className="button-hover-effect"></span>
      <span className="button-ripple-effect"></span>
    </>
  );

  const buttonClassNames = `
    modern-button 
    ${variant} 
    ${size} 
    ${loading ? "loading" : ""} 
    ${disabled ? "disabled" : ""} 
    ${className}
  `.trim();

  if (href && !disabled) {
    return (
      <div className={`button-wrapper ${className}`}>
        <a
          className={buttonClassNames}
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : ""}
          onClick={handleClick}
        >
          <ButtonContent />
        </a>
      </div>
    );
  }

  return (
    <div className={`button-wrapper ${className}`}>
      <button
        className={buttonClassNames}
        disabled={disabled || loading}
        onClick={handleClick}
        type="button"
      >
        <ButtonContent />
      </button>
    </div>
  );
}
