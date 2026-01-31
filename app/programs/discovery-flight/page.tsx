// app/programs/discovery-flight/page.tsx
import Link from "next/link";
import styles from "./discoveryFlight.module.css";


const highlights = [
  {
    title: "Preflight briefing",
    text: "Meet your instructor, review the plan, and learn the basics before you fly.",
  },
  {
    title: "Hands-on flying",
    text: "You’ll take the controls (with instructor guidance) and experience real flight.",
  },
  {
    title: "Photo-ready moment",
    text: "Bring a friend to take photos (depending on aircraft policy and safety).",
  },
  {
    title: "Next-step roadmap",
    text: "After landing, we’ll walk you through training options and a realistic plan.",
  },
];

const whatToExpect = [
  "Arrive 15–20 minutes early for check-in and briefing.",
  "Short ground lesson covering instruments, controls, and safety.",
  "Walkaround / preflight inspection with your instructor.",
  "Flight portion (time varies) where you can take the controls.",
  "Post-flight debrief and recommendations for next steps.",
];

const faqs = [
  {
    q: "Do I need experience to do a Discovery Flight?",
    a: "No — it’s designed for beginners. Your instructor will handle everything step-by-step.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable clothes and closed-toe shoes. Sunglasses are recommended on sunny days.",
  },
  {
    q: "Can I bring someone with me?",
    a: "Often yes, but it depends on aircraft seating and safety policy. Ask admissions when booking.",
  },
  {
    q: "Is it a good gift?",
    a: "Yes — a Discovery Flight is one of the best introductions to aviation and makes a great gift.",
  },
];

export default function DiscoveryFlightPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>Programs</p>
              <h1 className={styles.h1}>Discovery Flight</h1>
              <p className={styles.lede}>
                Your first time at the controls. Fly with a certified instructor and experience what
                training feels like — no experience required.
              </p>

              <div className={styles.heroCtas}>
                <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                  Book now
                </Link>
                <Link className={`${styles.btn} ${styles.btnGhost}`} href="/programs">
                  Back to programs
                </Link>
              </div>

              <div className={styles.quickFacts}>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Best for</span>
                  <span className={styles.factValue}>First-time flyers</span>
                </div>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Includes</span>
                  <span className={styles.factValue}>Briefing + flight</span>
                </div>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Goal</span>
                  <span className={styles.factValue}>Experience training</span>
                </div>
              </div>
            </div>

            <aside className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h2 className={styles.h2}>What you’ll get</h2>
                <p className={styles.muted}>
                  A safe, guided introduction to flight training — with time in the air and a clear
                  plan for what to do next.
                </p>

                <ul className={styles.pills}>
                  <li className={styles.pill}>Instructor-guided</li>
                  <li className={styles.pill}>Beginner-friendly</li>
                  <li className={styles.pill}>Great gift</li>
                  <li className={styles.pill}>Next-step roadmap</li>
                </ul>

                <div className={styles.heroCardCtas}>
                  <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                    Schedule Discovery Flight
                  </Link>
                  <Link className={`${styles.btn} ${styles.btnSecondary}`} href="/admissions">
                    Admissions info
                  </Link>
                </div>

                <div className={styles.note}>
                  <span className={styles.noteDot} />
                  <span className={styles.noteText}>
                    Want to become a pilot? Discovery Flight is the fastest first step.
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Highlights</h2>
            <p className={styles.muted}>
              A Discovery Flight is designed to be exciting, clear, and safe — with real learning.
            </p>
          </div>

          <div className={styles.grid}>
            {highlights.map((h) => (
              <article key={h.title} className={styles.card}>
                <h3 className={styles.h3}>{h.title}</h3>
                <p className={styles.cardText}>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect + checklist */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.h2}>What to expect</h2>
              <p className={styles.muted}>
                We’ll guide you from the moment you arrive — briefing, preflight, flying, and a debrief.
              </p>

              <ol className={styles.steps}>
                {whatToExpect.map((t) => (
                  <li key={t} className={styles.step}>
                    <span className={styles.stepBullet} aria-hidden="true">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.panel}>
              <h3 className={styles.h3}>Bring with you</h3>
              <p className={styles.muted}>
                Keep it simple. We recommend:
              </p>

              <ul className={styles.reqList}>
                <li className={styles.reqItem}>
                  <span className={styles.dot} aria-hidden="true">•</span>
                  Government-issued photo ID
                </li>
                <li className={styles.reqItem}>
                  <span className={styles.dot} aria-hidden="true">•</span>
                  Comfortable clothes + closed-toe shoes
                </li>
                <li className={styles.reqItem}>
                  <span className={styles.dot} aria-hidden="true">•</span>
                  Sunglasses (recommended)
                </li>
                <li className={styles.reqItem}>
                  <span className={styles.dot} aria-hidden="true">•</span>
                  A phone/camera for photos after landing
                </li>
              </ul>

              <div className={styles.panelCtas}>
                <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                  Book now
                </Link>
                <Link className={`${styles.btn} ${styles.btnGhost}`} href="/programs">
                  Browse programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>FAQ</h2>
            <p className={styles.muted}>Common questions before your first flight.</p>
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

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.h2}>Ready for your first flight?</h2>
              <p className={styles.muted}>
                Book a Discovery Flight and start your aviation journey the right way.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                Schedule now
              </Link>
              <Link className={`${styles.btn} ${styles.btnSecondary}`} href="/programs">
                Explore programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
