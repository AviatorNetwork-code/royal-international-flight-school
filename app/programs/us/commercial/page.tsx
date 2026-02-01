import React from "react";
import AppShell from "@/components/ui/AppShell";
import styles from "./commercialpage.module.css";


export const metadata = {
  title: "Commercial Pilot Program | Royal International Flight School",
  description:
    "Commercial Pilot training focused on professionalism, precision, and real-world flight operations.",
};

const highlights = [
  { title: "Professional Standards", desc: "Train to fly with precision, discipline, and consistency." },
  { title: "Real-World Scenarios", desc: "Complex aircraft handling, systems, and decision-making." },
  { title: "Structured Proficiency", desc: "Stage checks and performance benchmarks." },
  { title: "Career-Oriented Training", desc: "Built for pilots preparing for professional operations." },
];

const phases = [
  {
    title: "Phase 1 — Advanced Aircraft Control",
    items: ["Chandelles", "Lazy eights", "Steep spirals", "Power-off 180s"],
  },
  {
    title: "Phase 2 — Complex Operations",
    items: ["Complex aircraft systems", "Performance planning", "Advanced emergencies", "Crew coordination"],
  },
  {
    title: "Phase 3 — Commercial Cross-Country",
    items: ["Long-range planning", "High-workload environments", "Risk management", "Professional decision-making"],
  },
  {
    title: "Phase 4 — Checkride Ready",
    items: ["Mock oral", "Mock flight", "ACS refinement", "Professional polish"],
  },
];

const requirements = [
  "Private Pilot Certificate",
  "Instrument Rating",
  "English proficiency (read, speak, write, understand)",
  "Commercial knowledge test + practical test (checkride)",
  "FAA aeronautical experience requirements (we plan these efficiently)",
];

export default function CommercialProgramPage() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.badge}>Program • Commercial Pilot</div>

          <h1 className={styles.h1}>Commercial Pilot Certificate</h1>
          <p className={styles.sub}>
            Train like a professional. Our Commercial Pilot program focuses on precision flying,
            advanced decision-making, and the standards expected of professional aviators.
          </p>

          <div className={styles.ctas}>
            <a className={styles.primary} href="/book">Book Orientation</a>
            <a className={styles.secondary} href="/transparency">Pricing &amp; Policies</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statTop}>Typical timeline</div>
              <div className={styles.statBig}>3–6 months</div>
              <div className={styles.statMuted}>Depends on training frequency</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Training focus</div>
              <div className={styles.statBig}>Precision</div>
              <div className={styles.statMuted}>Professional-level maneuvers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statTop}>Outcome</div>
              <div className={styles.statBig}>Commercial ready</div>
              <div className={styles.statMuted}>Meets FAA commercial standards</div>
            </div>
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>What you’ll master</div>
            <ul className={styles.panelList}>
              <li>Advanced maneuvers to commercial standards</li>
              <li>Complex aircraft operations</li>
              <li>Professional risk management</li>
              <li>Commercial-level decision-making</li>
            </ul>

            <div className={styles.divider} />

            <div className={styles.panelTitle}>Next steps</div>
            <ol className={styles.panelList}>
              <li>Orientation + training audit</li>
              <li>Aircraft + instructor assignment</li>
              <li>Stage checks</li>
              <li>Commercial checkride</li>
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
            {requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <div className={styles.note}>
            We’ll build a commercial timeline that efficiently satisfies FAA experience requirements.
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
          <h2 className={styles.h2}>Ready to fly professionally?</h2>
          <p className={styles.bannerText}>
            Review our Transparency page to understand pricing, policies, and training expectations.
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
