import React from "react";
import AppShell from "../../components/ui/AppShell";
import styles from "./aboutpage.module.css";

export const metadata = {
  title: "About Us | Royal International Flight School",
  description:
    "Royal International Flight School is built on structure, discipline, and transparent pilot training standards.",
};

export default function AboutPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>About Royal International</div>
        <h1 className={styles.h1}>Training pilots with clarity, discipline, and purpose.</h1>
        <p className={styles.sub}>
          Royal International Flight School was created to remove confusion from flight training.
          We focus on structure, professionalism, and clear expectations—so students always know
          where they stand and where they’re going.
        </p>
      </section>

      {/* MISSION */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Our Mission</h2>
        <p className={styles.text}>
          Our mission is to train safe, disciplined, and competent pilots by emphasizing
          proficiency over shortcuts. We believe that strong fundamentals, transparent standards,
          and consistent instruction create confident aviators—whether flying recreationally
          or pursuing a professional career.
        </p>
      </section>

      {/* VALUES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Our Training Philosophy</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Structure First</h3>
            <p>
              Every student follows a clear roadmap. Lessons build on one another with defined
              objectives, standards, and debriefs.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Safety Is Non-Negotiable</h3>
            <p>
              We never rush milestones. Safety decisions are made conservatively and consistently,
              following published standards—not pressure or shortcuts.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Transparency</h3>
            <p>
              Students understand costs, timelines, expectations, and policies from the beginning.
              No surprises. No vague promises.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Professional Mindset</h3>
            <p>
              Whether your goal is recreational flying or an airline career, we train with
              professional discipline and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH US */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.h2}>Why Train With Us</h2>

        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <h3>Clear Standards, Not Guesswork</h3>
            <p>
              Students are evaluated against published standards—not instructor opinion
              or rushed timelines. You always know what “good” looks like.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Consistency Across Instructors</h3>
            <p>
              Our instructors follow the same syllabus, expectations, and debrief format,
              so training quality never depends on who you fly with.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Proficiency Over Hours</h3>
            <p>
              We don’t sell shortcuts or unrealistic timelines. We build skill,
              confidence, and judgment that lasts beyond the checkride.
            </p>
          </div>

          <div className={styles.whyCard}>
            <h3>Transparent Planning</h3>
            <p>
              From your first orientation, you’ll understand the training path,
              expectations, and policies—before money or hours are committed.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE TRAIN */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.h2}>Who We Train</h2>
        <ul className={styles.list}>
          <li>New students starting from zero experience</li>
          <li>Pilots continuing through instrument or commercial training</li>
          <li>Career-track students pursuing instructor or airline pathways</li>
          <li>International students seeking structured, standards-based training</li>
        </ul>
      </section>

      {/* INSTRUCTORS */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Our Instructors</h2>
        <p className={styles.text}>
          Our instructors are selected for professionalism, consistency, and mentorship ability.
          They follow standardized procedures and syllabi to ensure training quality does not
          vary from lesson to lesson—or instructor to instructor.
        </p>
        <p className={styles.text}>
          Instruction at Royal International is not improvised. Every lesson has a purpose,
          performance standard, and documented outcome.
        </p>
      </section>

      {/* VISION */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Our Vision</h2>
        <p className={styles.text}>
          Our vision is to set a higher standard for flight training—one built on
          discipline, professionalism, and transparency.
        </p>
        <p className={styles.text}>
          We aim to develop pilots who think critically, operate safely, and carry
          professional habits into every cockpit they fly—whether locally,
          internationally, or in advanced aviation careers.
        </p>
        <p className={styles.text}>
          As Royal International grows, our focus remains unchanged: structured
          instruction, standardized teaching, and honest expectations—without compromise.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Train with confidence.</h2>
          <p className={styles.bannerText}>
            If you value structure, safety, and honest expectations, we’d be glad to guide your
            training journey.
          </p>
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href="/book-orientation">
            Book Orientation
          </a>
          <a className={styles.secondary} href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </AppShell>
  );
}
