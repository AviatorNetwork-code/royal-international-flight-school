import React from "react";
import AppShell from "@/components/ui/AppShell";
import styles from "./instrumentpage.module.css";


export const metadata = {
  title: "Instrument Rating Program | Royal International Flight School",
  description:
    "Instrument training built for structure and confidence: a clear roadmap, proficiency milestones, and transparent expectations.",
};

const highlights = [
  { title: "IFR Confidence", desc: "Train to handle real-world IFR, not just pass a checkride." },
  { title: "Structured Milestones", desc: "Stage checks and proficiency targets so you always know where you stand." },
  { title: "Scenario-Based Training", desc: "Realistic routes, weather decisions, and ATC workflows." },
  { title: "Transparent Planning", desc: "Clear study plan + flight plan so you can budget time and cost." },
];

const phases = [
  {
    title: "Phase 1 — IFR Foundations",
    items: ["Instrument scan + control", "IFR regulations", "Clearances + ATC comms", "Holding basics"],
  },
  {
    title: "Phase 2 — Procedures",
    items: ["Instrument approaches", "Missed approach flow", "DME arcs / course intercepts", "Partial panel"],
  },
  {
    title: "Phase 3 — Cross-Country IFR",
    items: ["IFR flight planning", "Enroute ops", "Alternates + weather strategy", "Systems + risk management"],
  },
  {
    title: "Phase 4 — Checkride Ready",
    items: ["Mock oral", "Mock flight", "ACS polish", "Endorsements + test readiness"],
  },
];

const reqs = [
  "Private Pilot Certificate (or higher)",
  "English proficiency (read, speak, write, understand)",
  "Instrument knowledge test + practical test (checkride)",
  "IFR cross-country requirements (we plan them into your schedule)",
];

export default function InstrumentProgramPage() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.badge}>Program • Instrument Rating</div>

          <h1 className={styles.h1}>Instrument Rating</h1>
          <p className={styles.sub}>
            Become a safer, more capable pilot. Our Instrument program focuses on real-world IFR
            decision-making, structured proficiency milestones, and a clear roadmap to checkride readiness.
          </p>

          <div className={styles.ctas}>
            <a className={styles.primary} href="/book">Book Orientation</a>
            <a className={styles.secondary} href="/transparency">Pricing &amp; Policies</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statTop}>Typical timeline</div>
              <div className={styles.statBig}>6–12 weeks</div>
              <div className={styles.statMuted}>With consistent weekly training</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Best for</div>
              <div className={styles.statBig}>IFR proficiency</div>
              <div className={styles.statMuted}>Safety + capability upgrades</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Outcome</div>
              <div className={styles.statBig}>IFR-ready</div>
              <div className={styles.statMuted}>Approaches, holds, real scenarios</div>
            </div>
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>What you’ll train on</div>
            <ul className={styles.panelList}>
              <li>Holds, intercepts, course tracking</li>
              <li>Approaches + missed approaches</li>
              <li>Partial panel + unusual attitudes</li>
              <li>IFR cross-country decision-making</li>
            </ul>

            <div className={styles.divider} />

            <div className={styles.panelTitle}>Next steps</div>
            <ol className={styles.panelList}>
              <li>Orientation + training plan</li>
              <li>Written exam timeline</li>
              <li>IFR flight schedule</li>
              <li>Stage checks → checkride</li>
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
            {reqs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <div className={styles.note}>
            We’ll build your IFR cross-country routes into your plan so requirements are met efficiently.
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
          <h2 className={styles.h2}>Want a clear training + cost plan?</h2>
          <p className={styles.bannerText}>
            Visit our Transparency page to understand pricing, policies, and how billing works.
          </p>
        </div>

        <div className={styles.bannerActions}>
          <a className={styles.primary} href="/transparency">Transparency</a>
          <a className={styles.secondary} href="/contact">Ask a question</a>
        </div>
      </section>
    </AppShell>
  );
}
