import Link from "next/link";
import styles from "./page.module.css";

export default function InternationalProgramsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* LEFT */}
            <div>
              <span className={styles.kicker}>Programs · International Students</span>

              <h1 className={styles.h1}>
                International Students (Current Availability)
              </h1>

              <p className={styles.lede}>
                Royal International Flight School currently operates under FAA Part 61.
                At this time, international students may be accepted only for limited,
                short-term flight training. We do not currently offer full professional
                pilot programs or long-term training for international students.
              </p>

              <div className={styles.heroCtas}>
                <Link
                  href="/programs/international/details"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  View Program Details
                </Link>

                <Link
                  href="/contact"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                >
                  Contact Admissions
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h3 className={styles.h3}>Key points (quick view)</h3>

                <ul className={styles.keyList}>
                  <li>Operating under FAA Part 61</li>
                  <li>Short-term training only</li>
                  <li>One certificate or rating at a time</li>
                  <li>No long-term or continuous enrollment</li>
                  <li>Preparing for FAA Part 141 certification</li>
                </ul>

                <div className={styles.cardActions}>
                  <Link
                    href="/programs/international/details"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                  >
                    Detailed Requirements
                  </Link>

                  <Link
                    href="/transparency"
                    className={`${styles.btn} ${styles.btnGhost}`}
                  >
                    Transparency
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBLE TRAINING */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.h2}>✈️ Eligible Training Under Part 61</h2>

              <p className={styles.p}>
                International students may enroll in one standalone certificate or
                rating at a time, such as:
              </p>

              <ul className={styles.bullets}>
                <li>Private Pilot License (PPL)</li>
                <li>Instrument Rating (IR)</li>
                <li>Commercial Pilot License (CPL) add-on</li>
              </ul>

              <p className={styles.p}>
                Training under Part 61 is limited in duration and intended for
                individual certifications only. This does not constitute a full
                professional pilot pathway.
              </p>

              <p className={styles.pMuted}>
                For specific training durations, flight-hour requirements, and
                eligibility details, please visit the detailed program page.
              </p>

              <Link
                href="/programs/international/details"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                View International Program Details
              </Link>
            </div>

            <div>
              <h2 className={styles.h2}>🚫 Not Offered Under Part 61</h2>

              <p className={styles.p}>
                Royal International Flight School does not currently offer the
                following to international students:
              </p>

              <ul className={styles.bullets}>
                <li>Multi-rating professional pilot programs</li>
                <li>Sequential training pathways (PPL → IR → CPL)</li>
                <li>Long-term or continuous flight training</li>
                <li>Full-time structured enrollment</li>
              </ul>

              <p className={styles.p}>
                These programs require FAA Part 141 certification and additional
                regulatory approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.futureGrid}>
            <div>
              <h2 className={styles.h2}>🔄 Future Program Development (Part 141)</h2>

              <p className={styles.p}>
                Royal International Flight School is actively preparing for FAA Part
                141 certification. Once approved, the school plans to offer
                structured professional pilot programs, sequential training
                pathways, and eligibility for long-term international student
                enrollment.
              </p>

              <div className={styles.inlineCtas}>
                <Link
                  href="/programs/international/details"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  Program Details
                </Link>

                <Link
                  href="/contact"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>

            <div className={styles.noteCard}>
              <h3 className={styles.h3}>📩 Questions for International Applicants</h3>

              <ul className={styles.bullets}>
                <li>Current eligibility under Part 61</li>
                <li>Scope and duration for a single rating</li>
                <li>Program-specific requirements</li>
                <li>Updates on Part 141 development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
