import React from "react";
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";
import styles from "./policiespage.module.css";

export const metadata = {
  title: "Training Policies | Students | Royal International Flight School",
  description:
    "Training policies, scheduling standards, cancellations, weather, billing expectations, and student conduct.",
};

type PolicyCard = {
  title: string;
  desc: string;
  bullets: string[];
};

const policyCards: PolicyCard[] = [
  {
    title: "Scheduling & Attendance",
    desc: "Consistency matters. A steady rhythm keeps you progressing and reduces re-learning time.",
    bullets: [
      "Train consistently (weekly is ideal).",
      "Arrive early for briefing and preflight.",
      "Bring required materials (logbook, headset, study items).",
      "If you’re running late, communicate immediately.",
    ],
  },
  {
    title: "Cancellations & No-Shows",
    desc: "Last-minute changes impact aircraft and instructor scheduling. Clear rules protect everyone’s time.",
    bullets: [
      "Provide as much notice as possible if you must cancel.",
      "No-shows may be billed (aircraft + instructor time reserved).",
      "Frequent last-minute cancellations slow progress significantly.",
      "If weather is questionable, contact us before departing.",
    ],
  },
  {
    title: "Weather & Safety Calls",
    desc: "Safety decisions are never negotiated. We train to professional standards, not pressure.",
    bullets: [
      "Weather calls prioritize safety and training value.",
      "If conditions are not safe or not productive, we reschedule.",
      "We may convert to ground training when flight is not advisable.",
      "Students are encouraged to ask questions and learn the “why.”",
    ],
  },
  {
    title: "Ground Training Expectations",
    desc: "Progress comes from preparation. Flight time is most effective when the ground work is done.",
    bullets: [
      "Show up prepared for the lesson objective.",
      "Complete assigned study before flight sessions.",
      "Use briefings and debriefs as part of training—not optional extras.",
      "Ask early for help if you feel behind.",
    ],
  },
  {
    title: "Billing & Payment Standards",
    desc: "Transparent billing with clear expectations. No surprises—ever.",
    bullets: [
      "Training is billed for aircraft and instructor time.",
      "You are responsible for tracking progress and budgeting with guidance.",
      "Stage checks and mock checks may be scheduled as milestones.",
      "Ask for an estimate any time—line-by-line planning is encouraged.",
    ],
  },
  {
    title: "Professional Conduct",
    desc: "We operate like a professional environment. Respect, discipline, and safety culture apply to everyone.",
    bullets: [
      "Respect instructors, staff, and fellow students.",
      "Follow airport rules and safety procedures at all times.",
      "No unsafe behavior on the ramp or around aircraft.",
      "Professional mindset is part of training, not optional.",
    ],
  },
];

const quickLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Transparency", href: "/transparency" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function StudentPoliciesPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>Students • Policies</div>
        <h1 className={styles.h1}>Training policies & standards</h1>
        <p className={styles.sub}>
          These policies exist to protect safety, maintain consistency, and keep training efficient.
          Clear expectations create better outcomes for students—and a more professional learning environment.
        </p>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/contact">
            Ask a question
          </Link>
          <Link className={styles.secondary} href="/students/quick-links">
            Student Quick Links
          </Link>
        </div>

        <div className={styles.miniLinks}>
          {quickLinks.map((l) => (
            <Link key={l.href} className={styles.miniLink} href={l.href}>
              {l.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* POLICY GRID */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Core policies</h2>
          <p className={styles.muted}>
            These are the standards we use to keep training consistent, safe, and predictable.
          </p>
        </div>

        <div className={styles.grid}>
          {policyCards.map((p) => (
            <article key={p.title} className={styles.card}>
              <h3 className={styles.h3}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <ul className={styles.list}>
                {p.bullets.map((b) => (
                  <li key={b} className={styles.listItem}>
                    <span className={styles.bullet} aria-hidden="true">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Need clarity on a policy?</h2>
          <p className={styles.bannerText}>
            If anything is unclear—scheduling, weather calls, billing, or training expectations—contact us.
            We prefer questions early rather than confusion later.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <Link className={styles.primary} href="/contact">
            Contact
          </Link>
          <Link className={styles.secondary} href="/transparency">
            Transparency
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
