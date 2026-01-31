"use client";

import { useEffect, useState } from "react";

export default function TestingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Set footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#top" onClick={closeMobile}>
            <span className="brand__mark">✈︎</span>
            <span className="brand__name">Royal International</span>
          </a>

          <nav className="nav">
            <a href="#programs">Programs</a>
            <a href="#fleet">Fleet</a>
            <a href="#about">About</a>
            <a className="nav__cta" href="#contact">
              Request Info
            </a>
          </nav>

          <button
            className="menuBtn"
            aria-label="Open menu"
            id="menuBtn"
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="mobileNav"
          id="mobileNav"
          aria-hidden={!mobileOpen}
          style={{ display: mobileOpen ? "block" : "none" }}
        >
          <a href="#programs" onClick={closeMobile}>
            Programs
          </a>
          <a href="#fleet" onClick={closeMobile}>
            Fleet
          </a>
          <a href="#about" onClick={closeMobile}>
            About
          </a>
          <a href="#contact" onClick={closeMobile}>
            Request Info
          </a>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="hero">
          {/* Background image */}
          <div
            className="hero__bg"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
          <div className="hero__overlay" />

          <div className="container hero__content">
            <p className="hero__kicker">Become a Pilot with</p>
            <h1 className="hero__title">
              Royal International
              <br />
              Flight School
            </h1>
            <p className="hero__sub">
              Professional flight training and aircraft rental at
              <br />
              Kissimmee Gateway Airport.
            </p>

            <div className="hero__actions">
              <a className="btn btn--gold" href="#contact">
                Get Started
              </a>
              <a className="btn btn--light" href="#programs">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="section section--muted" id="programs">
          <div className="container">
            <h2 className="section__title">Our Training Programs</h2>
            <p className="section__lead">
              We offer comprehensive, personalized training programs for aspiring
              pilots of all levels. Learn to fly with experienced instructors and
              well-maintained aircraft.
            </p>

            <div className="grid grid--4">
              <article className="card">
                <div className="card__icon">🪪</div>
                <h3 className="card__title">Private Pilot License</h3>
                <p className="card__text">
                  Start your journey with foundational flight training, safety, and
                  confidence-building.
                </p>
                <a className="btn btn--gold btn--block" href="#contact">
                  Learn More
                </a>
              </article>

              <article className="card">
                <div className="card__icon">🧭</div>
                <h3 className="card__title">Instrument Rating</h3>
                <p className="card__text">
                  Learn to fly using instruments, procedures, and advanced
                  situational awareness.
                </p>
                <a className="btn btn--navy btn--block" href="#contact">
                  Learn More
                </a>
              </article>

              <article className="card">
                <div className="card__icon">🧢</div>
                <h3 className="card__title">Commercial Pilot License</h3>
                <p className="card__text">
                  Build professional-level skills, precision, and proficiency for a
                  pilot career.
                </p>
                <a className="btn btn--gold btn--block" href="#contact">
                  Learn More
                </a>
              </article>

              <article className="card">
                <div className="card__icon">🛫</div>
                <h3 className="card__title">Discovery Flight</h3>
                <p className="card__text">
                  Curious about flying? Take a discovery flight and experience the
                  cockpit firsthand.
                </p>
                <a className="btn btn--navy btn--block" href="#contact">
                  Learn More
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="section" id="fleet">
          <div className="container split">
            <div className="split__media">
              <img src="/images/fleet.jpg" alt="Training aircraft on ramp" />
            </div>

            <div className="split__content">
              <h2 className="section__title section__title--left">Our Fleet</h2>
              <h3 className="split__headline">
                Fly in Our Modern Cessna 172 School
              </h3>
              <p className="section__lead section__lead--left">
                Train at Kissimmee Gateway Airport with experienced CFIs and a
                well-maintained aircraft fleet.
              </p>

              <ul className="checks">
                <li>
                  <strong>Fleet size:</strong> Starting with 1 Cessna 172, expanding
                  to 3
                </li>
                <li>
                  <strong>Rental Rate:</strong> $190/hour (including fuel and
                  insurance)
                </li>
                <li>
                  <strong>Features:</strong> Garmin avionics, ADS-B Out/In, dual
                  controls
                </li>
                <li>
                  <strong>Maintenance:</strong> Regularly inspected and maintained
                  to high standards
                </li>
              </ul>

              <a className="btn btn--gold" href="#contact">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section section--muted" id="about">
          <div className="container split split--reverse">
            <div className="split__media">
              <img src="/images/about.jpg" alt="Flight instructor near aircraft" />
            </div>

            <div className="split__content">
              <h2 className="section__title section__title--left">About Us</h2>
              <h3 className="split__headline">Royal International Flight School</h3>
              <p className="section__lead section__lead--left">
                Royal International Flight School provides structured training, modern
                aircraft, and a supportive learning environment. Whether you’re
                flying for fun or pursuing a career, we’ll help you reach your goals.
              </p>

              <a className="btn btn--gold" href="#contact">
                Request Info
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <div className="container contact">
            <div>
              <h2 className="section__title section__title--left">
                Request Information
              </h2>
              <p className="section__lead section__lead--left">
                Tell us what you’re interested in and we’ll get back to you.
              </p>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form__row">
                <label>
                  Full Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="you@email.com" />
                </label>
              </div>

              <div className="form__row">
                <label>
                  Phone
                  <input type="tel" placeholder="(555) 555-5555" />
                </label>
                <label>
                  Program
                  <select>
                    <option>Private Pilot License</option>
                    <option>Instrument Rating</option>
                    <option>Commercial Pilot License</option>
                    <option>Discovery Flight</option>
                  </select>
                </label>
              </div>

              <label>
                Message
                <textarea rows={4} placeholder="Tell us your goals..." />
              </label>

              <button className="btn btn--gold" type="submit">
                Send
              </button>
              <p className="form__note">
                Hook this form to your email/CRM later (Formspree, Zapier, etc.).
              </p>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__inner">
            <p>
              © <span id="year"></span> Royal International Flight School. All rights
              reserved.
            </p>
            <p className="footer__small">
              Kissimmee Gateway Airport • Kissimmee, FL
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
