"use client";

import "./transparency.css";

export default function TransparencyPage() {
  return (
    <main className="transparency">
      {/* HERO */}
      <section className="transparency-hero">
        <div className="container">
          <span className="kicker">Our Commitment</span>
          <h1>Transparency & Standards</h1>
          <div className="divider" />
          <p>
            At Royal International Flight School, transparency is not optional.
            We believe trust is built through clear communication, honest
            expectations, and professional standards.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="transparency-section">
        <div className="container narrow">
          <p className="lead">
            Aviation training is a serious investment of time, effort, and
            responsibility. Our commitment is to operate with integrity,
            clarity, and accountability at every stage of a student’s journey.
          </p>
        </div>
      </section>

      {/* SAFETY */}
      <section className="transparency-section alt">
        <div className="container">
          <h2>Safety First — Always</h2>
          <p>
            Safety is the foundation of every decision we make. From aircraft
            maintenance and operational procedures to instructor oversight and
            student readiness, safety is never compromised.
          </p>
          <ul>
            <li>Structured preflight and briefing procedures</li>
            <li>Strict weather and operational minimums</li>
            <li>Continuous instructor supervision</li>
            <li>No pressure to fly in unsafe conditions</li>
          </ul>
        </div>
      </section>

      {/* TRAINING STANDARDS */}
      <section className="transparency-section">
        <div className="container">
          <h2>Training Standards</h2>
          <p>
            Our programs follow a structured syllabus designed to build skill,
            judgment, and professionalism. Progress is based on proficiency —
            not rushed timelines or minimum hours.
          </p>
          <ul>
            <li>Clear training milestones and expectations</li>
            <li>Objective performance-based progression</li>
            <li>Professional instructor evaluations</li>
            <li>Emphasis on decision-making and discipline</li>
          </ul>
        </div>
      </section>

      {/* COSTS & EXPECTATIONS */}
      <section className="transparency-section alt">
        <div className="container">
          <h2>Costs & Expectations</h2>
          <p>
            Flight training costs vary based on individual progress, weather,
            scheduling, and proficiency. We are transparent about how training
            is billed and what factors influence total cost.
          </p>
          <ul>
            <li>No unrealistic promises or guaranteed timelines</li>
            <li>Clear explanation of training components</li>
            <li>Honest discussions about progress and readiness</li>
            <li>Guidance to help students plan responsibly</li>
          </ul>
        </div>
      </section>

      {/* STUDENT RESPONSIBILITY */}
      <section className="transparency-section">
        <div className="container">
          <h2>Student Responsibility</h2>
          <p>
            Professional pilot training requires commitment and discipline.
            Students are expected to arrive prepared, respect procedures, and
            take ownership of their learning.
          </p>
          <ul>
            <li>Preparation before each lesson</li>
            <li>Respect for safety rules and instructors</li>
            <li>Professional conduct on the ground and in the air</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>
      </section>

      {/* ETHICS */}
      <section className="transparency-section alt">
        <div className="container">
          <h2>Ethics & Integrity</h2>
          <p>
            We do not oversell, exaggerate outcomes, or compromise standards.
            Aviation demands honesty — and so do we.
          </p>
          <p className="emphasis">
            If something is not safe, not appropriate, or not in a student’s
            best interest, we will say so — clearly and directly.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="transparency-cta">
        <div className="container">
          <h2>Our Promise</h2>
          <p>
            Royal International Flight School is committed to transparency,
            professionalism, and the long-term success of every student we
            train.
          </p>
          <p className="emphasis">
            Aviation has no shortcuts — and we stand by that principle.
          </p>
        </div>
      </section>
    </main>
  );
}
