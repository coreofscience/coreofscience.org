import React from "react";
import { FirebaseProvider } from "../context/firebase";
import "../styles/scss/style.scss";
import EmailForm from "../components/email";

const PRINCIPLES = {
  share: {
    name: "Sharing knowledge",
    content: `
      We think knowledge becomes all the better when shared, that's why our
      mission is to share critical knowledge with people and organizations
      alike. Knowledge allows people to overcome socio-economic barriers and
      helps organizations make the most of their investments.
    `
  },
  science: {
    name: "Creating science",
    content: `
      Science is made by humans, their time, happiness and fullfillment is
      very important to our organization. We want to develop tools that make
      research easier, faster and more effective. And to do so, we need to
      make science or core, front and center.
    `
  },
  tech: {
    name: "Building thechnology",
    content: `
      Core of science mantains a set of open source tools and some
      infraestructure. We build, maintain and host these tools with the aim
      of making the day to day life of students and researchers happier and
      productive.
    `
  }
};

const PEOPLE = {
  vivi: {
    name: "Viviana Zuluaga",
    email: "martha@coreofscience.org",
    bio: `
      Viviana Zuluaga is an expert on biology, specialized on metabolomics.
      She's really good at bibliographic structured search.
    `,
    photo: "people/vivi.png"
  },
  sebas: {
    name: "Sebastián Robledo",
    email: "sebastian@coreofscience.org",
    bio: `
      Sebastián Robledo is an expert on business management, specialized on
      viral market adoption. He's particularly great at helping people
      fulfill their potential.
    `,
    photo: "people/sebas.png"
  },
  oscar: {
    name: "Oscar Arbeláez",
    email: "oscar@coreofscience.org",
    bio: `
      Oscar Arbeláez is an expert on physics, specialized on computational
      science. On a good day he can write some lines of code and he's really
      interested on software development team dynamics.
    `,
    photo: "people/oscar.png"
  }
};

const Landing = () => (
  <FirebaseProvider>
    <div className="body-wrap boxed-container">
      <header className="site-header">
        <div className="header-shape header-shape-1" />
        <div className="header-shape header-shape-2" />
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="/" title="Core of Science">
                  <img
                    style={{ height: "1em" }}
                    src="images/logo.png"
                    alt="core of science logo"
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Core of science</h1>
                <p className="hero-paragraph">Slogan core of science...</p>
                <EmailForm className="hero-form field field-grouped" />
              </div>
              <div className="hero-illustration">
                <div className="hero-shape hero-shape-1">
                  <svg
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible" }}
                  >
                    <circle
                      className="anime-element fadeup-animation"
                      cx="20"
                      cy="20"
                      r="20"
                      fill="#FFD8CD"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hero-shape hero-shape-2">
                  <svg
                    width="88"
                    height="88"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible" }}
                  >
                    <circle
                      className="anime-element fadeup-animation"
                      cx="44"
                      cy="44"
                      r="44"
                      fill="#FFD2DA"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hero-main-shape">
                  <img
                    src="images/logo.png"
                    alt="core of science main product"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <div className="features-inner section-inner">
              <div className="features-header text-center">
                <div className="container-sm">
                  <h2 className="section-title mt-0">Meet Core of Science</h2>
                  <p className="section-paragraph">
                    An organization dedicated to science.
                  </p>
                </div>
              </div>
              <div className="features-wrap">
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div
                      className="feature-icon"
                      style={{ background: "#FFD2DA" }}
                    >
                      <svg
                        width="88"
                        height="88"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M43 47v7a13 13 0 0 0 13-13v-7c-7.18 0-13 5.82-13 13z"
                            fill="#FF6381"
                          />
                          <path
                            d="M32 41v4a9 9 0 0 0 9 9v-4a9 9 0 0 0-9-9z"
                            fill="#FF97AA"
                          />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title h3-mobile mb-8">
                      {PRINCIPLES.share.name}
                    </h4>
                    <p className="text-sm">{PRINCIPLES.share.content}</p>
                  </div>
                </div>
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div
                      className="feature-icon"
                      style={{ background: "#FFD8CD" }}
                    >
                      <svg
                        width="88"
                        height="88"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="nonzero">
                          <path
                            d="M54 56h-9a2 2 0 0 1-2-2V43a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zm-9-13v10h9V43h-9z"
                            fill="#FCAC96"
                          />
                          <path
                            d="M41 50h-7V34h14v5h2v-5a2 2 0 0 0-2-2H34a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h7v-4z"
                            fill="#FC8464"
                          />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title h3-mobile mb-8">
                      {PRINCIPLES.science.name}
                    </h4>
                    <p className="text-sm">{PRINCIPLES.science.content}</p>
                  </div>
                </div>
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div
                      className="feature-icon"
                      style={{ background: "#C6FDF3" }}
                    >
                      <svg
                        width="88"
                        height="88"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="nonzero">
                          <circle fill="#1ADAB7" cx="38" cy="50" r="5" />
                          <path
                            d="M53 42h2v-8a1 1 0 0 0-1-1h-8v2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L53 36.414V42z"
                            fill="#1ADAB7"
                          />
                          <path
                            fill="#83F0DD"
                            d="M34 41.414l3-3 3 3L41.414 40l-3-3 3-3L40 32.586l-3 3-3-3L32.586 34l3 3-3 3zM55.414 48L54 46.586l-3 3-3-3L46.586 48l3 3-3 3L48 55.414l3-3 3 3L55.414 54l-3-3z"
                          />
                        </g>
                      </svg>
                    </div>
                    <h4 className="feature-title h3-mobile mb-8">
                      {PRINCIPLES.tech.name}
                    </h4>
                    <p className="text-sm">{PRINCIPLES.tech.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="testimonials-shape testimonials-shape-1">
            <svg
              width="280"
              height="280"
              viewBox="0 0 280 280"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                  id="testimonials-shape-1"
                >
                  <stop stopColor="#261FB6" offset="0%" />
                  <stop stopColor="#4950F6" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                cx="140"
                cy="685"
                r="140"
                transform="translate(0 -545)"
                fill="url(#testimonials-shape-1)"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="testimonials-shape testimonials-shape-2">
            <svg
              width="125"
              height="107"
              viewBox="0 0 125 107"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#C6FDF3" cx="48" cy="59" r="48" />
                <path
                  d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z"
                  fill="#55EBD0"
                />
                <path
                  d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z"
                  fill="#1ADAB7"
                />
              </g>
            </svg>
          </div>
          <div className="testimonials-shape testimonials-shape-3">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              mlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="93.05%"
                  y1="19.767%"
                  x2="15.034%"
                  y2="85.765%"
                  id="testimonials-shape-3"
                >
                  <stop stopColor="#FF3058" offset="0%" />
                  <stop stopColor="#FF6381" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                cx="24"
                cy="434"
                r="24"
                transform="translate(0 -410)"
                fill="url(#testimonials-shape-3)"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="container">
            <div className="testimonials-inner section-inner">
              <h2 className="section-title mt-0 text-center">People</h2>
              <div className="testimonials-wrap">
                {Object.keys(PEOPLE).map(nick => {
                  const person = PEOPLE[nick];
                  return (
                    <div
                      key={nick}
                      className="testimonial text-xs is-revealing"
                    >
                      <div className="testimonial-inner">
                        <div className="testimonial-main">
                          <div className="testimonial-header">
                            <img
                              className="mb-16"
                              src={person.photo}
                              alt="Testimonial"
                            />
                          </div>
                          <div className="testimonial-body">
                            <p className="mb-0">{person.bio}</p>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-link">
                            <a href={`mailto:${person.email}`}>
                              {person.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section text-light">
          <div className="container-sm">
            <div className="newsletter-inner section-inner">
              <div className="newsletter-header text-center">
                <h2 className="section-title mt-0">Stay in the know</h2>
                <p className="section-paragraph">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
              </div>
              <EmailForm className="footer-form newsletter-form field field-grouped" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-inner has-top-divider">
            <div className="brand footer-brand">
              <a href="/">
                <img
                  width="32"
                  height="32"
                  src="images/logo.png"
                  alt="core of science logo"
                />
              </a>
            </div>
            <ul className="footer-links list-reset">
              <li>
                <a href="https://github.com/coreofscience">GitHub</a>
              </li>
              <li>
                <a href="https://tos-manizales.firebaseapp.com/">ToS</a>
              </li>
            </ul>
            <ul className="footer-social-links list-reset">
              <li>
                <a href="https://web.facebook.com/treeofscience1/">
                  <span className="screen-reader-text">Facebook</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#FFF"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ToS_Manizales">
                  <span className="screen-reader-text">Twitter</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#FFF"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="footer-copyright">
              &copy; 2019 Core of Science, built using cruip.com/april
            </div>
          </div>
        </div>
      </footer>
    </div>
  </FirebaseProvider>
);

export default Landing;
