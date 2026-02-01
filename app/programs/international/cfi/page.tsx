import Link from "next/link";
import styles from "./cfiCfii.module.css";

const programPillars = [
  {
    title: "Structured instructor syllabus",
    text: "Training follows a defined instructor syllabus with lesson objectives, teaching standards, and staged progress milestones.",
  },
  {
    title: "Teaching-focused training",
    text: "Emphasis on instructional technique, lesson planning, communication, and demonstrating maneuvers to a consistent standard.",
  },
  {
    title: "Organized training schedule",
    text: "Training is coordinated through scheduled ground and flight activities to support steady progression and readiness reviews.",
  },
  {
    title: "Progress tracking",
    text: "Lesson completion, teaching evaluations, and readiness reviews are tracked throughout the program pathway.",
  },
];

const programIncludes = [
  "Orientation + pathway confirmation",
  "CFI lesson planning and instructional technique",
  "Flight maneuvers: demonstration + correction",
  "Oral preparation and teaching evaluations",
  "CFII pathway options (instrument instruction focus)",
];

const whatYoullNeed = [
  {
    label: "Prerequisites",
    value: "Admissions will confirm required certificates, aeronautical experience, and eligibility during orientation.",
  },
  {
    label: "Instructor mindset",
    value: "CFI training emphasizes professionalism, communication, and consistent teaching habits.",
  },
  {
    label: "Preparation & study",
    value: "Instructor programs require consistent study and lesson planning alongside scheduled training.",
  },
  {
    label: "English readiness",
    value: "Proficiency to teach, brief, and communicate clearly in a training environment.",
  },
];

const faqs = [
  {
    q: "What’s the difference between CFI and CFII?",
    a: "CFI focuses on teaching private/commercial training topics. CFII adds instrument instruction training — teaching IFR procedures and approaches.",
  },
  {
    q: "What is CFI training focused on?",
    a: "Teaching technique, lesson planning, communication, and demonstrating maneuvers to a consistent standard — preparing for instructor practical test expectations.",
  },
  {
    q: "How do you evaluate readiness?",
    a: "Progress reviews and teaching evaluations help ensure you’re ready for advanced stages and practical test preparation.",
  },
  {
    q: "Can I do CFII after CFI?",
    a: "Yes. Admissions can help map the pathway based on your goals, timeline, and training plan.",
  },
];

export default function InternationalCFICFIIProgramPage() {
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
              <h1 className={styles.h1}>CFI / CFII Instructor Program</h1>

              <p className={styles.lede}>
                A structured instructor-training pathway for international students, built around teaching standards,
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
                <span className={styles.badge}>Instructor syllabus</span>
                <span className={styles.badge}>Organized schedule</span>
                <span className={styles.badge}>Progress tracked</span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <aside className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h2 className={styles.h2}>Program overview</h2>
                <p className={styles.muted}>
                  Instructor training emphasizes teaching technique and professional standards. Orientation confirms your pathway,
                  schedule model, and how progress is tracked throughout training.
                </p>

                <ul className={styles.keyList}>
                  <li>CFI teaching technique + lesson planning</li>
                  <li>Demonstration and correction of maneuvers</li>
                  <li>Organized ground + flight activities</li>
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
              Instructor training is delivered through a structured syllabus with defined objectives and tracked milestones,
              supporting steady progress and instructor practical test readiness.
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
                Built around instructor standards and teaching proficiency. Your training plan and schedule are coordinated through admissions.
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
              Instructor programs require preparation, consistency, and teaching practice. Scheduled training activity and progress tracking
              support steady advancement through the syllabus.
            </p>
          </div>

          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Preparation</h3>
              <p className={styles.cardText}>
                Lesson planning and consistent study help you teach clearly and demonstrate maneuvers to standard.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Documentation</h3>
              <p className={styles.cardText}>
                Training activity and milestones are tracked throughout the program to support progress toward objectives.
              </p>
            </div>
            <div className={styles.expectCard}>
              <h3 className={styles.h3}>Readiness reviews</h3>
              <p className={styles.cardText}>
                Progress reviews and evaluations help ensure you’re ready for advanced stages and practical test preparation.
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
            <p className={styles.muted}>Common questions for international CFI/CFII training.</p>
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
              <h2 className={styles.h2}>Ready to become an instructor?</h2>
              <p className={styles.muted}>
                Start with Orientation — we’ll confirm prerequisites, build your pathway, and coordinate your training schedule.
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
