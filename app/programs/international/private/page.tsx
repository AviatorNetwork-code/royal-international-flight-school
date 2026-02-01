import Link from "next/link";
import styles from "./private.module.css";

const programPillars = [
  {
    title: "Structured training plan",
    text: "Training follows a documented syllabus with defined stages, lessons, and progress milestones.",
  },
  {
    title: "Scheduled training",
    text: "Training is organized through scheduled flight and ground activities coordinated with admissions and instructors.",
  },
  {
    title: "Consistent participation",
    text: "Students are expected to participate consistently to support steady progress and continuity in training.",
  },
  {
    title: "Documented progress",
    text: "Lesson completion, reviews, and milestones are tracked to support clear progress toward program objectives.",
  },
];

const programIncludes = [
  "Orientation + training standards review",
  "Private Pilot syllabus and stage requirements",
  "Instructor-led ground + flight training plan",
  "Progress reviews and documented milestones",
  "Admissions and student support coordination",
];

const whatYoullNeed = [
  {
    label: "Passport",
    value: "Valid passport for identification and records.",
  },
  {
    label: "Contact + address info",
    value: "Current phone, email, and local address (if applicable).",
  },
  {
    label: "Training availability",
    value: "Availability for consistent participation and scheduled training activity.",
  },
  {
    label: "English readiness",
    value: "Sufficient proficiency to train safely and communicate effectively.",
  },
];

const faqs = [
  {
    q: "How does enrollment work for international students?",
    a: "International programs follow a structured training plan. Admissions will review the program path, scheduling expectations, and how training activity is tracked during orientation.",
  },
  {
    q: "What does “structured program” mean?",
    a: "A defined syllabus, an organized training plan, instructor oversight, and documented milestones such as lesson completion and progress reviews.",
  },
  {
    q: "Can I travel during training?",
    a: "If travel is needed, speak with admissions so your schedule and training plan can be adjusted appropriately and your progress stays on track.",
  },
  {
    q: "Do you help with next steps after Private?",
    a: "Yes. After Private, we can map a pathway to Instrument and Commercial based on your goals, availability, and training timeline.",
  },
];

export default function InternationalPrivateProgramPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* LEFT */}
            <div>
              <p className={styles.kicker}>Programs · International Students</p>
              <h1 className={styles.h1}>Private Pilot Program</h1>

              <p className={styles.lede}>
                A structured Private Pilot training path for international students, built around a clear syllabus,
                coordinated scheduling, instructor oversight, and documented progress aligned with U.S. flight training standards.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book Orientation
                </Link>
                <Link href="/programs/international/details" className={`${styles.btn} ${styles.btnSecondary}`}>
                  International program details
                </Link>
              </div>

              <div className={styles.badges}>
                <span className={styles.badge}>Structured syllabus</span>
                <span className={styles.badge}>Organized schedule</span>
                <span className={styles.badge}>Progress tracked</span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <aside className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h2 className={styles.h2}>Program overview</h2>
                <p className={styles.muted}>
                  Training is delivered through a structured plan with organized scheduling and progress tracking.
                  Admissions will walk you through the full pathway and expectations during orientation.
                </p>

                <ul className={styles.keyList}>
                  <li>Enrollment-based program pathway</li>
                  <li>Organized training schedule</li>
                  <li>Training activity documented</li>
                  <li>Milestones and progress reviews</li>
                  <li>Student support and coordination</li>
                </ul>

                <div className={styles.cardActions}>
                  <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Contact Admissions
                  </Link>
                  <Link href="/programs/international" className={`${styles.btn} ${styles.btnGhost}`}>
                    Back to international
                  </Link>
                </div>

                <div className={styles.note}>
                  <span className={styles.noteDot} aria-hidden="true" />
                  <span className={styles.noteText}>
                    Orientation is the best first step to confirm your pathway, schedule model, and expectations.
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PROGRAM PILLARS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>How this program is organized</h2>
            <p className={styles.muted}>
              The international Private Pilot program is delivered with clear structure, instructor oversight,
              and documented progress so students can train consistently toward their goals.
            </p>
          </div>

          <div className={styles.grid}>
            {programPillars.map((c) => (
              <article key={c.title} className={styles.card}>
                <h3 className={styles.h3}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.h2}>What’s included</h2>
              <p className={styles.muted}>
                Built around a Private Pilot syllabus with staged progress and instructor oversight.
                Your training plan and schedule are coordinated through admissions.
              </p>

              <ul className={styles.bullets}>
                {programIncludes.map((t) => (
                  <li key={t} className={styles.bulletItem}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.inlineCtas}>
                <Link href="/programs/international/details" className={`${styles.btn} ${styles.btnSecondary}`}>
                  View details
                </Link>
                <Link href="/contact" className={`${styles.btn} ${styles.btnGhost}`}>
                  Ask a question
                </Link>
              </div>
            </div>

            <div className={styles.panel}>
              <h3 className={styles.h3}>What you’ll need</h3>
              <p className={styles.muted}>
                Admissions will confirm documentation and readiness during orientation.
              </p>

              <div className={styles.reqGrid}>
                {whatYoullNeed.map((r) => (
                  <div key={r.label} className={styles.reqItem}>
                    <div className={styles.reqLabel}>{r.label}</div>
                    <div className={styles.reqValue}>{r.value}</div>
                  </div>
                ))}
              </div>

              <div className={styles.panelCtas}>
                <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book Orientation
                </Link>
                <Link href="/programs/international" className={`${styles.btn} ${styles.btnGhost}`}>
                  Browse international
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Training expectations</h2>
            <p className={styles.muted}>
              Training is most effective with consistency. Your schedule, participation, and progress tracking
              work together to support steady advancement through the program.
            </p>
          </div>

          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Participation</h3>
              <p className={styles.cardText}>
                Students are expected to attend scheduled training activities and participate consistently to maintain progress.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Documentation</h3>
              <p className={styles.cardText}>
                Lessons, flight/ground sessions, and milestones are tracked to support clear progress toward training objectives.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Progress reviews</h3>
              <p className={styles.cardText}>
                Progress reviews help keep training aligned with the syllabus and ensure you’re ready for the next stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>FAQ</h2>
            <p className={styles.muted}>Common questions for international Private Pilot training.</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.h2}>Start with Orientation</h2>
              <p className={styles.muted}>
                Orientation is the best first step — we review your goals, availability, and training pathway,
                then confirm next steps with admissions.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                Book Orientation
              </Link>
              <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                Contact Admissions
              </Link>
            </div>
          </div>

          <p className={styles.disclaimer}>
            Note: Admissions will provide the most accurate guidance for international enrollment requirements and scheduling expectations.
          </p>
        </div>
      </section>
    </main>
  );
}
