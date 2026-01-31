import React from "react";
import AppShell from "../../components/ui/AppShell";
import styles from "./admissionspage.module.css";
import Link from "next/link";

export const metadata = {
  title: "Admissions | Royal International Flight School",
  description:
    "Admissions guidance, requirements, and next steps to begin flight training at Royal International Flight School.",
};

const steps = [
  {
    title: "1) Book Orientation",
    text: "A short session to map your goal, timeline, and training plan.",
    href: "/book-orientation",
    cta: "Book Orientation",
  },
  {
    title: "2) Confirm Requirements",
    text: "We confirm ID, English proficiency, medical guidance, and training fit.",
    href: "/transparency",
    cta: "Policies & Standards",
  },
  {
    title: "3) Choose Your Program",
    text: "Pick the right program path: Private → Instrument → Commercial → CFI.",
    href: "/programs",
    cta: "View Programs",
  },
  {
    title: "4) Start Training",
    text: "Schedule lessons, track progress milestones, and begin flying consistently.",
    href: "/contact",
    cta: "Talk to Admissions",
  },
];

const requirements = [
  {
    title: "Government-issued photo ID",
    text: "Required for enrollment and airport access policies.",
  },
  {
    title: "English proficiency",
    text: "FAA requires students to read, speak, write, and understand English.",
  },
  {
    title: "Medical guidance",
    text: "Medical requirements depend on your goal. We help you choose the right path.",
  },
  {
    title: "Commitment to consistency",
    text: "Training progresses best with regular lessons and consistent study.",
  },
];

const medicalNotes = [
  "Private (recreational): medical requirements depend on goals and operations.",
  "Career-track: we recommend medical planning early to avoid delays later.",
  "We help you understand options before you spend heavily on training.",
];

const faq = [
  {
    q: "Do I need experience before starting?",
    a: "No. Many students start with zero experience. We build fundamentals step-by-step.",
  },
  {
    q: "How long does it take to get a Private Pilot License?",
    a: "Typical timelines range from 2–6 months depending on scheduling frequency and weather.",
  },
  {
    q: "Do you accept international students?",
    a: "Yes. We can guide you through training structure and next steps. If TSA or additional requirements apply, we’ll clarify early.",
  },
  {
    q: "Can I train on weekends only?",
    a: "Yes, but progress is slower. The best results come from consistent weekly training.",
  },
];

export default function AdmissionsPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>Admissions</div>
        <h1 className={styles.h1}>Start flight training with a clear plan.</h1>
        <p className={styles.sub}>
          Admissions at Royal International is designed to remove confusion. We’ll map your goals,
          timeline, and expectations—before you invest significant time or money.
        </p>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/book-orientation">
            Book Orientation
          </Link>
          <Link className={styles.secondary} href="/programs">
            Explore Programs
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statTop}>Best first step</div>
            <div className={styles.statBig}>Orientation</div>
            <div className={styles.statMuted}>Clear plan + answers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statTop}>Training style</div>
            <div className={styles.statBig}>Structured</div>
            <div className={styles.statMuted}>Milestones + debriefs</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statTop}>Focus</div>
            <div className={styles.statBig}>Safety</div>
            <div className={styles.statMuted}>Standards-first culture</div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Admissions process</h2>
          <p className={styles.muted}>
            A simple path from first contact to your first training lesson.
          </p>
        </div>

        <div className={styles.stepGrid}>
          {steps.map((s) => (
            <div key={s.title} className={styles.stepCard}>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepText}>{s.text}</div>
              <Link className={styles.stepLink} href={s.href}>
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className={styles.sectionAlt}>
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <h2 className={styles.h2}>Basic requirements</h2>
            <p className={styles.muted}>
              Requirements vary by certificate/rating. These are the common starting points:
            </p>

            <div className={styles.reqGrid}>
              {requirements.map((r) => (
                <div key={r.title} className={styles.reqCard}>
                  <div className={styles.reqTitle}>{r.title}</div>
                  <div className={styles.reqText}>{r.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Medical guidance</h2>
            <p className={styles.muted}>
              Medical requirements depend on your goals. During orientation, we help you decide what’s best.
            </p>

            <ul className={styles.list}>
              {medicalNotes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <div className={styles.note}>
              We’ll help you make the right medical decision early so you don’t lose time later.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>Admissions FAQ</h2>
          <p className={styles.muted}>Straight answers to the most common questions.</p>
        </div>

        <div className={styles.faq}>
          {faq.map((item) => (
            <div key={item.q} className={styles.faqItem}>
              <div className={styles.faqQ}>{item.q}</div>
              <div className={styles.faqA}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Ready to begin?</h2>
          <p className={styles.bannerText}>
            Book an orientation and we’ll build your training plan with realistic timelines and expectations.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <Link className={styles.primary} href="/book-orientation">
            Book Orientation
          </Link>
          <Link className={styles.secondary} href="/contact">
            Contact Admissions
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
