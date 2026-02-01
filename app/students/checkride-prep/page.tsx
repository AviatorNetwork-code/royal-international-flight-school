// app/students/checkride-prep/page.tsx
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";
import styles from "./checkrideprep.module.css";

export const metadata = {
  title: "Checkride Prep | Royal International Flight School",
  description:
    "Structured checkride preparation: oral prep, flight prep, mock checkrides, and a clear plan aligned to FAA ACS standards.",
};

const pillars = [
  {
    title: "ACS-Aligned Plan",
    desc: "We prep directly to the Airman Certification Standards—no guesswork, no gaps.",
  },
  {
    title: "Oral + Flight Together",
    desc: "Your oral prep and flight prep are connected so you understand the “why,” not just memory.",
  },
  {
    title: "Mock Checkrides",
    desc: "Realistic mock sessions that build confidence, reveal weak areas, and sharpen performance.",
  },
  {
    title: "Professional Standards",
    desc: "Checkride success comes from discipline: briefings, debriefings, and consistent expectations.",
  },
];

const whatYouGet = [
  "ACS topic map + progress tracker",
  "Oral question bank + outlines (customized to your certificate/rating)",
  "Briefing templates (weather, XC planning, performance)",
  "Mock oral + mock flight evaluation (optional)",
  "Final readiness review + “go/no-go” checklist",
];

const commonPitfalls = [
  "Inconsistent checklist use and flow",
  "Weak weather interpretation and decision-making",
  "Unclear airspace and chart knowledge",
  "Systems knowledge without “why it matters”",
  "Poor risk management explanation (PAVE/IMSAFE)",
  "Rushing maneuvers instead of flying standards",
];

const dayOf = [
  "Paperwork ready (ID, endorsements, IACRA confirmation if applicable)",
  "Aircraft documents verified (ARROW) and maintenance status checked",
  "Personal minimums reviewed (sleep, nutrition, stress, hydration)",
  "Arrive early: setup, briefing, and calm prep time",
  "Treat it like a professional flight: brief, fly, debrief",
];

export default function CheckridePrepPage() {
  return (
    <AppShell>
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.badge}>Students • Checkride Prep</div>
          <h1 className={styles.h1}>Checkride Preparation</h1>
          <p className={styles.sub}>
            Checkrides are not about perfection — they’re about standards, decision-making, and consistency.
            Our prep gives you a clear plan for <strong>oral + flight</strong>, aligned to the FAA ACS.
          </p>

          <div className={styles.ctas}>
            <Link className={styles.primary} href="/contact">
              Talk to an Instructor
            </Link>
            <Link className={styles.secondary} href="/students/resources">
              Student Resources
            </Link>
          </div>

          <div className={styles.quickRow}>
            <div className={styles.quick}>
              <div className={styles.quickTop}>Focus</div>
              <div className={styles.quickBig}>Standards</div>
              <div className={styles.quickMuted}>Not “hours”</div>
            </div>
            <div className={styles.quick}>
              <div className={styles.quickTop}>Method</div>
              <div className={styles.quickBig}>ACS Map</div>
              <div className={styles.quickMuted}>Track weak points</div>
            </div>
            <div className={styles.quick}>
              <div className={styles.quickTop}>Outcome</div>
              <div className={styles.quickBig}>Confidence</div>
              <div className={styles.quickMuted}>Before test day</div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className={styles.grid}>
          {pillars.map((p) => (
            <article key={p.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.desc}</p>
            </article>
          ))}
        </section>

        {/* TWO COL */}
        <section className={styles.twoCol}>
          <div className={styles.block}>
            <h2 className={styles.h2}>What you get</h2>
            <p className={styles.muted}>
              Whether you’re preparing for Private, Instrument, Commercial, or CFI,
              the structure stays the same: identify gaps, fix them, then validate readiness.
            </p>

            <ul className={styles.list}>
              {whatYouGet.map((x) => (
                <li key={x} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className={styles.note}>
              <strong>Tip:</strong> The fastest way to improve is consistency: show up prepared, fly often,
              and debrief honestly.
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Common pitfalls we fix</h2>
            <p className={styles.muted}>
              Most checkride “fails” are predictable. We train to remove these patterns early.
            </p>

            <ul className={styles.list}>
              {commonPitfalls.map((x) => (
                <li key={x} className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DAY OF */}
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <h2 className={styles.h2}>Checkride day checklist</h2>
            <p className={styles.muted}>
              Use this the night before and the morning of. Calm beats rushed.
            </p>
          </div>

          <div className={styles.panelGrid}>
            {dayOf.map((x, idx) => (
              <div key={x} className={styles.panelItem}>
                <div className={styles.panelNum}>{idx + 1}</div>
                <div className={styles.panelText}>{x}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.banner}>
          <div>
            <h2 className={styles.h2}>Want a readiness review?</h2>
            <p className={styles.bannerText}>
              Tell us which certificate/rating you’re preparing for and your target date.
              We’ll recommend the best next step (mock oral, mock flight, or targeted polish).
            </p>
          </div>
          <div className={styles.bannerActions}>
            <Link className={styles.primary} href="/contact">
              Contact
            </Link>
            <Link className={styles.secondary} href="/book-orientation">
              Book Orientation
            </Link>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
