import Link from "next/link";
import styles from "./instrument.module.css";

const programPillars = [
  {
    title: "Structured Instrument syllabus",
    text: "Training follows a defined IFR syllabus with lesson objectives, staged progress, and measurable proficiency standards.",
  },
  {
    title: "Organized training schedule",
    text: "Instrument training is coordinated through scheduled flight and ground activities designed to support steady progress.",
  },
  {
    title: "Progress tracking",
    text: "Lessons, simulator (if applicable), flight activities, and milestones are tracked throughout the program.",
  },
  {
    title: "Practical test readiness",
    text: "Training builds toward consistent IFR procedures, decision-making, and checkride readiness aligned to program objectives.",
  },
];

const programIncludes = [
  "Orientation + training plan confirmation",
  "Instrument syllabus with stage objectives",
  "IFR procedures, navigation, and approaches",
  "Scenario-based decision-making training",
  "Progress reviews and documented milestones",
];

const whatYoullNeed = [
  { label: "Current certificate", value: "Private Pilot Certificate (or equivalent) before starting Instrument training." },
  { label: "Medical (if applicable)", value: "Admissions will confirm what documentation is needed for your training plan." },
  { label: "English readiness", value: "Proficiency to communicate clearly and train safely in an IFR environment." },
  { label: "Availability", value: "Consistency supports IFR skill-building and steady progression through the syllabus." },
];

const faqs = [
  {
    q: "What is Instrument training focused on?",
    a: "Instrument training develops your ability to fly using instruments, follow IFR procedures, and safely operate in reduced visibility and cloud environments.",
  },
  {
    q: "Do you use simulators?",
    a: "Depending on your training plan and availability, simulator sessions may be used as part of the syllabus to support procedures and proficiency building.",
  },
  {
    q: "How do you track progress?",
    a: "Training activity and milestones are tracked through the syllabus and progress reviews. Admissions can explain how this works during orientation.",
  },
  {
    q: "What’s the next step after Instrument?",
    a: "Many students continue to Commercial. Admissions can help map the pathway based on your goals and timeline.",
  },
];

export default function InternationalInstrumentProgramPage() {
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
              <h1 className={styles.h1}>Instrument Rating Program</h1>

              <p className={styles.lede}>
                A structured Instrument training path for international students, built around IFR procedures,
                organized scheduling, instructor oversight, and documented progress aligned with U.S. training standards.
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
                <span className={styles.badge}>IFR syllabus</span>
                <span className={styles.badge}>Organized schedule</span>
                <span className={styles.badge}>Progress tracked</span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <aside className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h2 className={styles.h2}>Program overview</h2>
                <p className={styles.muted}>
                  Instrument training emphasizes procedures, precision, and decision-making. Orientation confirms your
                  pathway, schedule model, and how training progress is tracked through the syllabus.
                </p>

                <ul className={styles.keyList}>
                  <li>IFR procedures and approaches</li>
                  <li>Organized flight + ground activities</li>
                  <li>Training activity documented</li>
                  <li>Progress reviews and readiness checks</li>
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
                    Orientation confirms prerequisites, training plan, and schedule coordination.
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
              Instrument training is delivered through a structured syllabus with defined objectives and tracked milestones,
              supporting consistent progress and practical test readiness.
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

      {/* WHAT'S INCLUDED + REQUIREMENTS */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.h2}>What’s included</h2>
              <p className={styles.muted}>
                Built around IFR procedures and staged skill-building. Your training plan and schedule are coordinated through admissions.
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
              <h3 className={styles.h3}>Prerequisites & preparation</h3>
              <p className={styles.muted}>
                Admissions will confirm your prerequisites and documentation during orientation.
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
              Instrument skills build with repetition and consistency. Scheduled training activity and progress tracking
              support steady advancement through the syllabus.
            </p>
          </div>

          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Consistency</h3>
              <p className={styles.cardText}>
                Regular participation helps you retain procedures and improve accuracy in IFR flight and approach work.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Documentation</h3>
              <p className={styles.cardText}>
                Flight/ground activity and milestones are tracked throughout training to support progress toward program objectives.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Readiness reviews</h3>
              <p className={styles.cardText}>
                Progress reviews help ensure you’re ready for more advanced procedures and practical test preparation.
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
            <p className={styles.muted}>Common questions for international Instrument training.</p>
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
              <h2 className={styles.h2}>Ready to train IFR?</h2>
              <p className={styles.muted}>
                Start with Orientation — we’ll confirm prerequisites, build your training pathway, and coordinate your schedule.
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
