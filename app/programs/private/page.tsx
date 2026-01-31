import React from "react";
import AppShell from "../../../components/ui/AppShell";
import styles from "./privatepage.module.css";


export const metadata = {
  title: "Private Pilot Program | Royal International Flight School",
  description:
    "Private Pilot training with a clear roadmap, realistic timelines, and transparent pricing expectations.",
};

const highlights = [
  { title: "Clear Training Roadmap", desc: "Know what happens next—every phase is explained." },
  { title: "Flexible Scheduling", desc: "Train consistently with a schedule that fits your life." },
  { title: "Transparency First", desc: "Understand estimated costs and billing before you start." },
  { title: "Safety + Standards", desc: "Professional instruction with consistent expectations." },
];

const phases = [
  {
    title: "Phase 1 — Foundations",
    items: ["Intro flight", "Aircraft basics", "Airport operations", "Stalls & slow flight"],
  },
  {
    title: "Phase 2 — Pattern & Maneuvers",
    items: ["Takeoffs/landings", "Ground reference", "Emergency procedures", "Solo prep"],
  },
  {
    title: "Phase 3 — Cross-Country",
    items: ["Flight planning", "Navigation", "Diversions", "Night requirements"],
  },
  {
    title: "Phase 4 — Checkride Ready",
    items: ["Mock oral", "Mock checkride", "ACS polish", "Endorsements"],
  },
];

export default function PrivateProgramPage() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.badge}>Program • Private Pilot</div>

          <h1 className={styles.h1}>Private Pilot Certificate</h1>
          <p className={styles.sub}>
            Start flying with confidence. Our Private Pilot program is designed around clarity:
            a structured roadmap, realistic training rhythm, and transparency from day one.
          </p>

          <div className={styles.ctas}>
            <a className={styles.primary} href="/book">
              Book Orientation
            </a>
            <a className={styles.secondary} href="/transparency">
              Pricing &amp; Policies
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statTop}>Typical timeline</div>
              <div className={styles.statBig}>2–6 months</div>
              <div className={styles.statMuted}>Depends on frequency + weather</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>FAA minimum</div>
              <div className={styles.statBig}>40 hours</div>
              <div className={styles.statMuted}>Most students need more</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Best for</div>
              <div className={styles.statBig}>New pilots</div>
              <div className={styles.statMuted}>Recreational or career-track</div>
            </div>
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>What’s included</div>
            <ul className={styles.panelList}>
              <li>1:1 instructor coaching</li>
              <li>Weekly progress check-ins</li>
              <li>Written exam study plan</li>
              <li>Checkride readiness plan</li>
            </ul>

            <div className={styles.divider} />

            <div className={styles.panelTitle}>Next steps</div>
            <ol className={styles.panelList}>
              <li>Orientation call</li>
              <li>Medical guidance</li>
              <li>Schedule + training plan</li>
              <li>Start flying</li>
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
          <h2 className={styles.h2}>Requirements</h2>
          <ul className={styles.list}>
            <li>English proficiency (read, speak, write, understand)</li>
            <li>Student Pilot Certificate (we guide you)</li>
            <li>FAA medical: depends on your goals (we advise)</li>
            <li>FAA knowledge test + practical test (checkride)</li>
          </ul>

          <div className={styles.note}>
            We’ll map your medical and training timeline during orientation so you know what to expect.
          </div>
        </div>

        <div className={styles.block}>
          <h2 className={styles.h2}>Program roadmap</h2>

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
        </div>
      </section>

      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Want a line-by-line estimate?</h2>
          <p className={styles.bannerText}>
            See our Transparency page for pricing details, policies, and how billing works.
          </p>
        </div>

        <div className={styles.bannerActions}>
          <a className={styles.primary} href="/transparency">
            Transparency
          </a>
          <a className={styles.secondary} href="/contact">
            Ask a question
          </a>
        </div>
      </section>
    </AppShell>
  );
}
