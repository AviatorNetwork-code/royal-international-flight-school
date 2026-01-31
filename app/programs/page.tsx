// app/programs/page.tsx
import Link from "next/link";
import AppShell from "../../components/ui/AppShell";
import styles from "./programs.module.css";

type Program = {
  title: string;
  subtitle: string;
  duration: string;
  idealFor: string;
  highlights: string[];
  href: string;
  badge?: string;
};

const programs: Program[] = [
  {
    title: "Private Pilot License (PPL)",
    subtitle: "Start flying and build strong fundamentals with structured training.",
    duration: "Typical: 2–6 months",
    idealFor: "New pilots, hobby flyers, first step to aviation career",
    highlights: [
      "FAA-aligned ground & flight training",
      "Safety-first cockpit habits",
      "Flexible scheduling",
      "Progress milestones & stage checks",
    ],
    href: "/programs/private",
    badge: "Most Popular",
  },
  {
    title: "Instrument Rating (IR)",
    subtitle: "Become a more capable pilot with IFR knowledge and procedures.",
    duration: "Typical: 1–4 months",
    idealFor: "Licensed pilots ready to fly in more conditions",
    highlights: [
      "IFR procedures & approaches",
      "Scenario-based training",
      "Flight planning & weather decision-making",
      "Checkride preparation support",
    ],
    href: "/programs/instrument",
  },
  {
    title: "Commercial Pilot (CPL)",
    subtitle: "Train to fly professionally and sharpen precision and proficiency.",
    duration: "Typical: 3–8 months",
    idealFor: "Pilots pursuing professional aviation",
    highlights: [
      "Commercial maneuvers & standards",
      "Professional airmanship",
      "Career-oriented training plan",
      "Hours building strategy",
    ],
    href: "/programs/commercial",
  },
  {
    title: "CFI / CFII",
    subtitle: "Become an instructor: teach with standards, confidence, and professionalism.",
    duration: "Typical: 4–10 weeks",
    idealFor: "Career-track pilots building hours and instructional skill",
    highlights: [
      "FOI + teaching technique",
      "Right-seat proficiency",
      "Mock orals + mock teaching",
      "CFII add-on IFR teaching",
    ],
    href: "/programs/cfi",
    badge: "Career Track",
  },
  {
    title: "Discovery Flight",
    subtitle: "Your first hands-on experience at the controls with an instructor.",
    duration: "30–60 minutes (flight time varies)",
    idealFor: "Anyone curious about learning to fly",
    highlights: [
      "Preflight briefing included",
      "Fly with a certified instructor",
      "Great gift option",
      "Next steps & training roadmap",
    ],
    href: "/programs/discovery-flight",
    badge: "Best First Step",
  },
];

const steps = [
  {
    title: "1) Choose your program",
    text: "Pick the path that matches your goals—recreational, career, or skills upgrade.",
  },
  {
    title: "2) Schedule a visit",
    text: "Meet the team, tour the aircraft, and plan a realistic training timeline.",
  },
  {
    title: "3) Start training",
    text: "Follow a structured syllabus with progress checks and instructor guidance.",
  },
  {
    title: "4) Checkride prep",
    text: "We help you prepare with mock orals, flight reviews, and targeted practice.",
  },
];

const requirements = [
  "Valid government photo ID",
  "English proficiency (FAA requirement)",
  "Medical certificate requirements vary by goal (we’ll guide you)",
  "Positive learning mindset and commitment to safety",
];

export default function ProgramsPage() {
  return (
    <AppShell>
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.kicker}>Training Programs</p>
                <h1 className={styles.h1}>Choose your flight training path</h1>
                <p className={styles.lede}>
                  From first flight to professional training, our programs are built around clear
                  milestones, strong instruction, and a safety-first culture.
                </p>

                <div className={styles.heroCtas}>
                  <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                    Schedule a visit
                  </Link>
                  <Link className={`${styles.btn} ${styles.btnGhost}`} href="/admissions">
                    Admissions &amp; requirements
                  </Link>
                </div>

                <div className={styles.quickFacts}>
                  <div className={styles.fact}>
                    <span className={styles.factLabel}>Flexible</span>
                    <span className={styles.factValue}>Training schedules</span>
                  </div>
                  <div className={styles.fact}>
                    <span className={styles.factLabel}>Structured</span>
                    <span className={styles.factValue}>Syllabus &amp; milestones</span>
                  </div>
                  <div className={styles.fact}>
                    <span className={styles.factLabel}>Safety</span>
                    <span className={styles.factValue}>Culture-first approach</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroCardInner}>
                  <h2 className={styles.h2}>Not sure where to start?</h2>
                  <p className={styles.muted}>
                    Book a Discovery Flight or talk to admissions. We’ll recommend a training plan
                    based on your goals and availability.
                  </p>

                  <div className={styles.heroCardCtas}>
                    <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/programs/discovery-flight">
                      Discovery Flight
                    </Link>
                    <Link className={`${styles.btn} ${styles.btnSecondary}`} href="/contact">
                      Talk to admissions
                    </Link>
                  </div>

                  <div className={styles.note}>
                    <span className={styles.noteDot} />
                    <span className={styles.noteText}>
                      Career track? Ask about a step-by-step roadmap from PPL → IR → CPL.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Programs overview</h2>
              <p className={styles.muted}>
                Explore each program for details, prerequisites, and what to expect.
              </p>
            </div>

            <div className={styles.grid}>
              {programs.map((p) => (
                <article key={p.title} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.h3}>{p.title}</h3>
                      <p className={styles.cardSub}>{p.subtitle}</p>
                    </div>
                    {p.badge ? <span className={styles.badge}>{p.badge}</span> : null}
                  </div>

                  <div className={styles.metaRow}>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>Duration</span>
                      <span className={styles.metaValue}>{p.duration}</span>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>Ideal for</span>
                      <span className={styles.metaValue}>{p.idealFor}</span>
                    </div>
                  </div>

                  <ul className={styles.list}>
                    {p.highlights.map((h) => (
                      <li key={h} className={styles.listItem}>
                        <span className={styles.bullet} aria-hidden="true">
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardFooter}>
                    <Link className={styles.cardLink} href={p.href}>
                      View program <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.twoCol}>
              <div>
                <h2 className={styles.h2}>How training works</h2>
                <p className={styles.muted}>
                  We keep training straightforward: clear goals, consistent standards, and coaching
                  that builds confidence.
                </p>

                <ol className={styles.steps}>
                  {steps.map((s) => (
                    <li key={s.title} className={styles.step}>
                      <div className={styles.stepTitle}>{s.title}</div>
                      <div className={styles.stepText}>{s.text}</div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.panel}>
                <h3 className={styles.h3}>Basic requirements</h3>
                <p className={styles.muted}>
                  Requirements vary by certificate/rating. These are common starting points:
                </p>

                <ul className={styles.reqList}>
                  {requirements.map((r) => (
                    <li key={r} className={styles.reqItem}>
                      <span className={styles.bullet} aria-hidden="true">
                        •
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.panelCtas}>
                  <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/admissions">
                    See full requirements
                  </Link>
                  <Link className={`${styles.btn} ${styles.btnGhost}`} href="/contact">
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.h2}>Ready to get started?</h2>
                <p className={styles.muted}>
                  Tell us your goals and availability — we’ll recommend the right program and next steps.
                </p>
              </div>

              <div className={styles.ctaButtons}>
                <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                  Schedule a visit
                </Link>
                <Link className={`${styles.btn} ${styles.btnSecondary}`} href="/programs/discovery-flight">
                  Book a Discovery Flight
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
