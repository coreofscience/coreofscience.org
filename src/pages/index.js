import React from "react";
import "normalize.css/normalize.css";
import "./index.css";
import "./Principle.css";

const PRINCIPLES = [
  {
    name: "Mentoring",
    content: `
      As an organization, core of science wants to promote the development of
      young students careers. That doesn't mean answering their questions but
      giving them a glance as to what questions are there to ask.
    `
  },
  {
    name: "Sharing knowledge",
    content: `
      We think knowledge becomes all the better when shared, that's why our
      mission is to share critical knowledge with people and organizations
      alike. Knowledge allows people to overcome socio-economic barriers and
      helps organizations make the most of their investments.
    `
  },
  {
    name: "Building community",
    content: `
      One of the biggest challenges of our generation is to build communities.
      In return, when part of a community, an individual can grasp knowledge,
      and accommplish more than they could by acting as one.
    `
  },
  {
    name: "Developing software",
    content: `
      Core of science mantains a set of open source tools and some infraestructure.
      We build, maintain and host these tools with the aim of making the day to
      day life of students and researchers happier and productive.
    `
  }
];

const Landing = () => (
  <div className="Landing">
    <header className="Landing-header">
      <div className="Landing-container">
        <h1 className="Landing-brand">Core of Science</h1>
        <h2>Slogan...</h2>
      </div>
    </header>
    <div className="Landing-main">
      <div className="Landing-container">
        {PRINCIPLES.map(({ name, content }) => (
          <div className="Principle" key={name}>
            <img className="Principle-logo" src="/images/logo.png" alt={name} />
            <div className="Principle-details">
              <h3 className="Principle-title">{name}</h3>
              <p>
                {!!content.trim()
                  ? content
                  : `${name.toLowerCase()} `.repeat(50).substr(0, 250) + `...`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="Landing-footer">
      <div className="Landing-container">
        <div>
          <a
            className="Landing-external-link"
            href="https://github.com/coreofscience/"
          >
            GitHub
          </a>
        </div>
        <div className="Landing-copyright-notice">
          <small>&copy; Corp. Core of Science, 2019</small>
        </div>
      </div>
    </footer>
  </div>
);

export default Landing;
