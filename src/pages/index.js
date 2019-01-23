import React from "react";
import "normalize.css/normalize.css";
import "./index.css";
import "./Principle.css";

const PRINCIPLES = [
  "mentoring",
  "sharing knowledge",
  "building community",
  "developing software"
];

const Landing = () => (
  <div className="Landing">
    <header className="Landing-header">
      <div className="Landing-container">
        <h1 className="Landing-brand">Core of Science</h1>
        <h2>Slogan slogan</h2>
      </div>
    </header>
    <div className="Landing-main">
      <div className="Landing-container">
        {PRINCIPLES.map(principle => (
          <div className="Principle" key={principle}>
            <img
              className="Principle-logo"
              src="/images/logo.png"
              alt={principle}
            />
            <div className="Principle-details">
              <h3 className="Principle-title">{principle}</h3>
              <p>{`${principle} `.repeat(50).substr(1, 250)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="Landing-footer">
      <div className="Landing-container">Here are the links</div>
    </footer>
  </div>
);

export default Landing;
