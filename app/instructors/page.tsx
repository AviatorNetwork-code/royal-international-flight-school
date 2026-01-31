"use client";

import "./instructors.css";

export default function InstructorsPage() {
  const pillars = [
    {
      title: "Safety First",
      body:
        "Every instructor must demonstrate disciplined decision-making and consistent adherence to operational standards. No shortcuts, no compromise.",
    },
    {
      title: "Professional Standardization",
      body:
        "We prioritize instructors who teach consistently — using structured briefings, clear objectives, and repeatable performance standards.",
    },
    {
      title: "Mentorship & Communication",
      body:
        "Great instruction is more than flying skills. We select instructors who coach, mentor, and communicate with clarity and respect.",
    },
    {
      title: "Training Excellence",
      body:
        "Instructors must be committed to building complete pilots: strong fundamentals, situational awareness, and professional mindset.",
    },
  ];

  const criteria = [
    "Verified credentials and regulatory compliance",
    "Demonstrated professionalism and strong safety culture",
    "Structured teaching style and clear briefings",
    "Calm cockpit leadership and effective communication",
    "Commitment to continuous improvement and standardization",
    "Student-first mindset with high expectations",
  ];

  const studentExperience = [
    {
      title: "Clear lesson objectives",
      body:
        "Every flight and ground session follows a plan — with defined goals and post-lesson debriefs.",
    },
    {
      title: "Consistent standards",
      body:
        "Students learn using consistent procedures and expectations, so progress is stable and measurable.",
    },
    {
      title: "Respectful, professional training",
      body:
        "You’ll be trained as a future professional pilot — with discipline, structure, and mentorship.",
    },
  ];

  return (
    <main className="instructors">
      {/* HERO */}
      <section className="instructors-hero">
        <div className="container">
          <span className="kicker">Royal International Flight School</span>
          <h1>Instructor Standards</h1>
          <div className="divider" />
          <p className="lead">
            We don’t recruit instructors casually. We select and develop
            professionals who represent the discipline, safety culture, and
            high standards that aviation demands.
          </p>

          <div className="hero-badges">
            <span className="badge">Safety Culture</span>
            <span className="badge">Standardized Training</span>
            <span className="badge">Mentorship Focused</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container grid-2">
          <div className="panel">
            <h2>Why we’re selective</h2>
            <p>
              Your instructor is one of the most important factors in your
              training success. We prioritize quality, professionalism, and
              consistency — because aviation is built on standards.
            </p>
            <p className="emphasis">
              We are building an instructor team that reflects the “Royal”
              philosophy: disciplined, capable, and serious about excellence.
            </p>
          </div>

          <div className="panel panel-dark">
            <div className="quote">
              “The cockpit is not the place for confusion. Clear standards and
              disciplined instruction create confident pilots.”
            </div>
            <div className="quote-foot">— Training Philosophy</div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section alt">
        <div className="container">
          <h2>What we require from instructors</h2>
          <p className="muted">
            Our selection process emphasizes safety, professionalism, and the
            ability to teach with structure and clarity.
          </p>

          <div className="pillars">
            {pillars.map((p) => (
              <div className="card" key={p.title}>
                <div className="card-title">
                  <span className="icon" aria-hidden="true">
                    ✦
                  </span>
                  {p.title}
                </div>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Selection criteria</h2>
            <p className="muted">
              While credentials matter, we also evaluate teaching ability,
              temperament, and commitment to standardized training.
            </p>

            <ul className="list">
              {criteria.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="callout">
            <div className="callout-title">Standardization matters</div>
            <p className="muted">
              Students progress faster when instruction is consistent. Our
              training culture is designed to reduce confusion, reinforce
              fundamentals, and build real confidence.
            </p>

            <div className="mini-grid">
              <div className="mini">
                <div className="mini-top">Briefings</div>
                <div className="mini-sub">Clear objectives</div>
              </div>
              <div className="mini">
                <div className="mini-top">Debriefs</div>
                <div className="mini-sub">Honest feedback</div>
              </div>
              <div className="mini">
                <div className="mini-top">Progress</div>
                <div className="mini-sub">Proficiency based</div>
              </div>
              <div className="mini">
                <div className="mini-top">Culture</div>
                <div className="mini-sub">Professional mindset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT EXPERIENCE */}
      <section className="section alt">
        <div className="container">
          <h2>What students can expect</h2>
          <p className="muted">
            Even while our instructor roster is being finalized, our standards
            remain the same.
          </p>

          <div className="experience">
            {studentExperience.map((x) => (
              <div className="experience-card" key={x.title}>
                <div className="experience-title">{x.title}</div>
                <p>{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to begin?</h2>
          <p>
            Contact admissions to discuss your goals, timeline, and the best
            training pathway — and we’ll help you start with clarity.
          </p>

          <div className="cta-actions">
            <a className="btn btn-primary" href="/contact">
              Contact Admissions
            </a>
            <a className="btn btn-secondary" href="/book-orientation">
              Book Orientation
            </a>
          </div>

          <div className="tiny">
            Instructor profiles will be published as our team is finalized.
          </div>
        </div>
      </section>
    </main>
  );
}
