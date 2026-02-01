// app/students/international/page.tsx
import React from "react";
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";
import styles from "./internationalpage.module.css";

export const metadata = {
  title: "International Students | Royal International Flight School",
  description:
    "International student training information. We currently offer Part 61 training and are working toward Part 141 authorization.",
};

const faqs = [
  {
    q: "Do you offer student visas (M-1) right now?",
    a: "Not yet. We are not approved for Part 141 at this time, so we do not offer M-1 visa training currently. We are actively working toward offering additional international pathways.",
  },
  {
    q: "What training do you offer today?",
    a: "We currently offer FAA Part 61 training. This includes Private Pilot, Instrument, Commercial, and CFI/CFII pathways (based on prerequisites).",
  },
  {
    q: "Can I start training now as an international student?",
    a: "In many cases, yes—depending on your individual eligibility and documentation. We’ll review your goals and situation during an admissions call and guide you through next steps.",
  },
  {
    q: "Will Part 141 be available later?",
    a: "That’s the plan. Once approved, we’ll publish updated guidance and available visa pathways on this page.",
  },
];

export default function InternationalStudentsPage() {
  return (
    <AppShell>
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.badge}>Students • International</div>
          <h1 className={styles.h1}>International students</h1>
          <p className={styles.sub}>
            We welcome international applicants and will always be transparent about what we offer.
            <strong> At this time, we provide Part 61 training.</strong> We are working toward offering
            additional international pathways in the future.
          </p>

          <div className={styles.callout}>
            <div className={styles.calloutTitle}>Current status</div>
            <ul className={styles.calloutList}>
              <li>
                <span className={styles.dot} aria-hidden="true" />
                <strong>Part 61 training available now</strong> (Private, Instrument, Commercial, CFI/CFII)
              </li>
              <li>
                <span className={styles.dot} aria-hidden="true" />
                <strong>Not Part 141 yet</strong> → we do not offer M-1 visa training currently
              </li>
              <li>
                <span className={styles.dot} aria-hidden="true" />
                We are actively working toward expanded international options
              </li>
            </ul>
          </div>

          <div className={styles.ctas}>
            <Link className={styles.primary} href="/contact">
              Contact Admissions
            </Link>
            <Link className={styles.secondary} href="/admissions">
              Admissions Requirements
            </Link>
          </div>
        </section>

        {/* TWO COL */}
        <section className={styles.twoCol}>
          <div className={styles.card}>
            <h2 className={styles.h2}>What you can do now</h2>
            <p className={styles.muted}>
              If you’re ready to start, we’ll help you build a clear plan around your goals and timeline.
            </p>

            <ul className={styles.list}>
              <li>
                <span className={styles.bullet} aria-hidden="true">✓</span>
                <span>Schedule an admissions call to review eligibility and goals</span>
              </li>
              <li>
                <span className={styles.bullet} aria-hidden="true">✓</span>
                <span>Get a training roadmap (PPL → IR → CPL → CFI/CFII)</span>
              </li>
              <li>
                <span className={styles.bullet} aria-hidden="true">✓</span>
                <span>Receive a realistic timeline estimate based on availability and training frequency</span>
              </li>
              <li>
                <span className={styles.bullet} aria-hidden="true">✓</span>
                <span>Understand cost expectations and policies before you begin</span>
              </li>
            </ul>

            <div className={styles.cardActions}>
              <Link className={styles.primary} href="/programs">
                View Programs
              </Link>
              <Link className={styles.secondary} href="/transparency">
                Pricing & Policies
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.h2}>What we’re building</h2>
            <p className={styles.muted}>
              We’re working toward additional international training pathways and will post updates here.
            </p>

            <div className={styles.miniGrid}>
              <div className={styles.mini}>
                <div className={styles.miniTitle}>Part 141 pathway</div>
                <div className={styles.miniText}>
                  Our goal is to offer expanded program structures once approved.
                </div>
              </div>
              <div className={styles.mini}>
                <div className={styles.miniTitle}>Visa guidance updates</div>
                <div className={styles.miniText}>
                  As options become available, we’ll publish clear step-by-step guidance.
                </div>
              </div>
              <div className={styles.mini}>
                <div className={styles.miniTitle}>Structured onboarding</div>
                <div className={styles.miniText}>
                  Stronger pre-arrival planning so you can start efficiently.
                </div>
              </div>
              <div className={styles.mini}>
                <div className={styles.miniTitle}>International support</div>
                <div className={styles.miniText}>
                  Clear documentation checklists and timeline planning.
                </div>
              </div>
            </div>

            <div className={styles.note}>
              <strong>Note:</strong> Until Part 141 is active, we do not offer M-1 visa training.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <div className={styles.faqHead}>
            <h2 className={styles.h2}>FAQ</h2>
            <p className={styles.muted}>
              Quick answers for the most common international student questions.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqCard}>
                <div className={styles.faqQ}>{f.q}</div>
                <div className={styles.faqA}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.banner}>
          <div>
            <h2 className={styles.h2}>Talk to admissions</h2>
            <p className={styles.bannerText}>
              Tell us where you’re coming from, your goal (PPL, career track, etc.), and your timeline.
              We’ll respond with the best next step for your situation.
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
