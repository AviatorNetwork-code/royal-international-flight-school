import Link from "next/link";
import styles from "./commercial.module.css";

const programPillars = [
  {
    title: "Structured Commercial syllabus",
    text: "Training follows a defined syllabus with maneuver standards, lesson objectives, and staged progress milestones.",
  },
  {
    title: "Professional flight proficiency",
    text: "Focus on precision, consistency, and decision-making aligned with commercial-level expectations and practical test preparation.",
  },
  {
    title: "Organized training schedule",
    text: "Training is coordinated through scheduled flight and ground activities to support steady progression through the program.",
  },
  {
    title: "Progress tracking",
    text: "Training activity, milestone completion, and readiness reviews are tracked throughout the syllabus.",
  },
];

const programIncludes = [
  "Orientation + training plan confirmation",
  "Commercial syllabus with stage objectives",
  "Maneuvers, performance, and proficiency standards",
  "Scenario-based aeronautical decision-making",
  "Progress reviews and documented milestones",
];

const whatYoullNeed = [
  {
    label: "Prerequisites",
    value: "Admissions will confirm prerequisite certificates, aeronautical experience, and eligibility during orientation.",
  },
  {
    label: "Training continuity",
    value: "Consistency supports skill refinement and steady progress through commercial maneuvers and standards.",
  },
  {
    label: "Professional mindset",
    value: "Commercial training emphasizes precision, discipline, and strong decision-making habits.",
  },
  {
    label: "English readiness",
    value: "Proficiency to communicate clearly and train safely in a professional training environment.",
  },
];

const faqs = [
  {
    q: "What is Commercial training focused on?",
    a: "Commercial training emphasizes higher-level proficiency, accuracy, and decision-making — preparing you to meet commercial standards and practical test requirements.",
  },
  {
    q: "How is training organized?",
    a: "Training is delivered through a structured syllabus with scheduled flight and ground activities and tracked progress milestones.",
  },
  {
    q: "Do you help plan the pathway after Commercial?",
    a: "Yes. Many students continue to CFI/CFII. Admissions can help map the pathway based on your goals and timeline.",
  },
  {
    q: "How do you track readiness?",
    a: "Progress reviews and milestone checks help ensure you’re ready for more advanced stages and practical test preparation.",
  },
];

export default function InternationalCommercialProgramPage() {
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
              <h1 className={styles.h1}>Commercial Pilot Program</h1>

              <p className={styles.lede}>
                A structured Commercial training path for international students, built around professional standards,
                organized scheduling, instructor oversight, and documented progress aligned with U.S. flight training requirements.
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
                <span className={styles.badge}>Commercial syllabus</span>
                <span className={styles.badge}>Organized schedule</span>
                <span className={styles.badge}>Progress tracked</span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <aside className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h2 className={styles.h2}>Program overview</h2>
                <p className={styles.muted}>
                  Commercial training builds professional-level precision and decision-making. Orientation confirms your pathway,
                  schedule model, and how progress is tracked through the syllabus.
                </p>

                <ul className={styles.keyList}>
                  <li>Commercial maneuvers and standards</li>
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
              Commercial training is delivered through a structured syllabus with defined objectives and tracked milestones,
              supporting steady progress and practical test readiness.
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
                Built around commercial standards and staged proficiency building. Your training plan and schedule are coordinated through admissions.
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
                Admissions will confirm prerequisites and documentation during orientation.
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
              Commercial proficiency improves with repetition and consistency. Scheduled training activity and progress tracking
              support steady advancement through the syllabus.
            </p>
          </div>

          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Consistency</h3>
              <p className={styles.cardText}>
                Regular participation helps refine maneuvers, accuracy, and professional-level performance standards.
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
                Progress reviews help ensure you’re ready for advanced stages and practical test preparation.
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
            <p className={styles.muted}>Common questions for international Commercial training.</p>
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
              <h2 className={styles.h2}>Ready to train at a professional level?</h2>
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
