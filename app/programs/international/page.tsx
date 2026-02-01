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
                Structured international flight training
              </h1>

              <p className={styles.lede}>
                International students train under a structured program with
                mandatory schedules, required participation, and documented
                progress in accordance with U.S. flight training standards.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book Orientation
                </Link>

                <Link
                  href="/programs/international/details"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                >
                  For more info, click here
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h3 className={styles.h3}>Key points (quick view)</h3>

                <ul className={styles.keyList}>
                  <li>Structured training programs</li>
                  <li>Mandatory schedules & participation</li>
                  <li>Full-program enrollment (not pay-as-you-go)</li>
                  <li>Progress monitored & documented</li>
                  <li>International student support & oversight</li>
                </ul>

                <div className={styles.cardActions}>
                  <Link
                    href="/programs/international/details"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                  >
                    View Detailed Requirements
                  </Link>

                  <Link
                    href="/contact"
                    className={`${styles.btn} ${styles.btnGhost}`}
                  >
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
