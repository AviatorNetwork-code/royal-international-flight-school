import React from "react";
import AppShell from "../../../components/ui/AppShell";
import styles from "./cfipage.module.css";


export const metadata = {
  title: "CFI / CFII Program | Royal International Flight School",
  description:
    "CFI and CFII training built for mastery: teaching skills, professionalism, and checkride readiness.",
};

const highlights = [
  { title: "Teach With Confidence", desc: "Learn to explain, demonstrate, and correct—professionally." },
  { title: "Structured Lesson Plans", desc: "Ready-to-use frameworks you can customize to your style." },
  { title: "Oral Exam Mastery", desc: "FOI, endorsements, and scenario-based teaching prep." },
  { title: "Checkride Ready", desc: "Mock teaching, mock oral, and flight polish to ACS standards." },
];

const tracks = [
  {
    title: "CFI Track — Fundamentals of Instruction + Teaching Flightides",
    desc: "Build instructional skill: lesson structure, FOI mastery, and teaching delivery.",
    bullets: [
      "FOI (Fundamentals of Instruction) prep + examples",
      "Lesson planning + teaching demos",
      "Endorsements + logbook readiness",
      "Mock oral + mock teaching sessions",
    ],
  },
  {
    title: "CFII Add-On — IFR Teaching + Procedures",
    desc: "Learn to teach IFR the right way: procedures, risk management, and real-world decision-making.",
    bullets: [
      "IFR lesson flow + common student errors",
      "Approaches, holds, and partial panel teaching",
      "IFR cross-country planning instruction",
      "Scenario-based CFII mock oral",
    ],
  },
];

const phases = [
  {
    title: "Phase 1 — Instructor Foundations",
    items: ["FOI mastery", "Lesson plan structure", "Teaching technique", "Professional standards"],
  },
  {
    title: "Phase 2 — Teaching Labs",
    items: ["Mock teaching sessions", "Whiteboard drills", "Common student errors", "Critique + coaching"],
  },
  {
    title: "Phase 3 — Flight Instruction",
    items: ["Demonstration quality maneuvers", "Right-seat proficiency", "Teaching in-flight", "Safety + risk management"],
  },
  {
    title: "Phase 4 — Checkride Ready",
    items: ["Mock oral", "Mock teaching check", "Flight polish", "Endorsements + readiness"],
  },
];

const requirements = [
  "Commercial Pilot Certificate (CFI)",
  "Instrument Rating (recommended; required for CFII)",
  "English proficiency (read, speak, write, understand)",
  "CFI knowledge tests (FOI + FIA) and practical test",
  "CFII knowledge test (if applicable) and practical test",
];

export default function CfiProgramPage() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.badge}>Program • CFI / CFII</div>

          <h1 className={styles.h1}>Certified Flight Instructor (CFI) + CFII</h1>
          <p className={styles.sub}>
            Become the kind of instructor students trust. Our CFI/CFII program builds teaching skill,
            professionalism, and checkride readiness with a structured roadmap and strong coaching.
          </p>

          <div className={styles.ctas}>
            <a className={styles.primary} href="/book">Book Orientation</a>
            <a className={styles.secondary} href="/transparency">Pricing &amp; Policies</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statTop}>Typical timeline</div>
              <div className={styles.statBig}>4–10 weeks</div>
              <div className={styles.statMuted}>Depends on prep + weekly cadence</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Best for</div>
              <div className={styles.statBig}>Career-track</div>
              <div className={styles.statMuted}>Build hours + teach professionally</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Outcome</div>
              <div className={styles.statBig}>Instructor-ready</div>
              <div className={styles.statMuted}>Teach, coach, and evaluate safely</div>
            </div>
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>What you’ll master</div>
            <ul className={styles.panelList}>
              <li>FOI + lesson delivery that sounds professional</li>
              <li>Endorsements, requirements, and logbook discipline</li>
              <li>Right-seat proficiency + demo-quality maneuvers</li>
              <li>CFII scenarios: IFR teaching + procedures</li>
            </ul>

            <div className={styles.divider} />

            <div className={styles.panelTitle}>Next steps</div>
            <ol className={styles.panelList}>
              <li>Orientation + training audit</li>
              <li>Study plan + schedule</li>
              <li>Teaching labs + flight sessions</li>
              <li>Mock checks → checkride</li>
            </ol>
          </div>
        </aside>
      </section>

      <section className={styles.grid}>
        {highlights.map((h) => (
          <article key={h.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{h.title}</h3>
            <p className={styles.cardText}>{h.desc}</p>
          </article>
        ))}
      </section>

      <section className={styles.twoCol}>
        <div className={styles.block}>
          <h2 className={styles.h2}>Tracks</h2>
          <div className={styles.tracks}>
            {tracks.map((t) => (
              <div key={t.title} className={styles.track}>
                <div className={styles.trackTitle}>{t.title}</div>
                <p className={styles.trackDesc}>{t.desc}</p>
                <ul className={styles.list}>
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.note}>
            We can start with CFI and add CFII after—same structure, same standards, same coaching.
          </div>
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2}>Roadmap</h2>

          <div className={styles.phases}>
            {phases.map((p) => (
              <div key={p.title} className={styles.phase}>
                <div className={styles.phaseTitle}>{p.title}</div>
                <ul className={styles.phaseList}>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className={styles.h3}>Requirements</h3>
          <ul className={styles.list}>
            {requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Ready to teach?</h2>
          <p className={styles.bannerText}>
            We’ll build your study plan, teaching labs, and flight schedule around your target checkride date.
          </p>
        </div>

        <div className={styles.bannerActions}>
          <a className={styles.primary} href="/book">Book Orientation</a>
          <a className={styles.secondary} href="/contact">Ask a question</a>
        </div>
      </section>
    </AppShell>
  );
}
