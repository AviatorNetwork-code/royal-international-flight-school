// app/programs/international/details/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

export default function InternationalDetailsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <Link href="/programs/international" className={styles.backLink}>
                ← Back to International Programs
              </Link>

              <div className={styles.brand}>Royal International Flight School</div>

              <h1 className={styles.h1}>International Training Requirements & Expectations</h1>

              <p className={styles.lede}>
                This page provides a clear overview of training structure, participation expectations,
                scheduling practices, and documentation standards commonly used for international flight
                training <strong>when applicable under current program availability</strong>.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Contact Admissions
                </Link>
                <Link href="/book-orientation" className={`${styles.btn} ${styles.btnSecondary}`}>
                  Book Orientation
                </Link>
              </div>

              <p className={styles.disclaimerTop}>
                Royal International Flight School currently operates under <strong>FAA Part 61</strong>.
                International applicants may be eligible for <strong>limited, short-term</strong> training
                in a defined scope (one certificate or rating at a time). Final eligibility and requirements
                are confirmed during orientation.
              </p>
            </div>

            {/* RIGHT: Contents */}
            <div className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <h3 className={styles.h3}>Contents</h3>

                <ol className={styles.contents}>
                  <li>
                    <a className={styles.contentsLink} href="#enrollment">
                      Program Enrollment & Training Structure
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#participation">
                      Training Participation & Activity Expectations
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#schedule">
                      Scheduling & Attendance
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#continuity">
                      Training Continuity & Adjustments
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#records">
                      Progress Standards, Records, and Completion
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#inperson">
                      In-Person Training Requirements
                    </a>
                  </li>
                  <li>
                    <a className={styles.contentsLink} href="#orientation">
                      Orientation & Confirmation of Requirements
                    </a>
                  </li>
                </ol>

                <div className={styles.cardDivider} />

                <div className={styles.smallTitle}>Program-specific details</div>
                <p className={styles.smallText}>
                  International program pages (routes) include the correct scope, pacing, and requirements:
                </p>

                <div className={styles.programLinks}>
                  <Link className={styles.pillLink} href="/programs/international/private">
                    Private Pilot (PPL)
                  </Link>
                  <Link className={styles.pillLink} href="/programs/international/instrument">
                    Instrument (IR)
                  </Link>
                  <Link className={styles.pillLink} href="/programs/international/commercial">
                    Commercial (CPL add-on)
                  </Link>
                  <Link className={styles.pillLink} href="/programs/international/cfi">
                    CFI / CFII
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.paper}>
            {/* 1 */}
            <div id="enrollment" className={styles.block}>
              <h2 className={styles.h2}>1) Program Enrollment & Training Structure</h2>
              <p className={styles.p}>
                International flight training is conducted under a <strong>defined training scope</strong> with a clear
                completion objective, typically for <strong>one certificate or rating at a time</strong>.
              </p>
              <ul className={styles.bullets}>
                <li>Training follows an established syllabus with lesson objectives and milestones.</li>
                <li>Participation occurs through scheduled flight and ground activities.</li>
                <li>Progress is monitored and training activity is documented throughout the training scope.</li>
              </ul>
            </div>

            {/* 2 */}
            <div id="participation" className={styles.block}>
              <h2 className={styles.h2}>2) Training Participation & Activity Expectations</h2>
              <p className={styles.p}>
                Participation expectations vary depending on the certificate/rating and the student’s circumstances.
                During orientation, we confirm the expected training cadence and which activities count toward documented
                participation for the approved scope.
              </p>
              <ul className={styles.bullets}>
                <li>Training activity is planned around consistent weekly progress.</li>
                <li>Flight events and assigned ground instruction may be part of the plan.</li>
                <li>We review schedule expectations and documentation practices during orientation.</li>
              </ul>
              <p className={styles.pMuted}>
                Note: References to “full-time” training vary by context and may not apply to every student or training scope.
              </p>
            </div>

            {/* 3 */}
            <div id="schedule" className={styles.block}>
              <h2 className={styles.h2}>3) Scheduling & Attendance</h2>
              <p className={styles.p}>
                International training is delivered through scheduled flight and ground events. Students are expected to
                attend scheduled activities and follow school policies for rescheduling, cancellations, and makeups.
              </p>
              <ul className={styles.bullets}>
                <li>Scheduled events include flight lessons and assigned ground instruction.</li>
                <li>Attendance and participation are monitored within the training scope.</li>
                <li>Significant gaps in training may affect continuity and completion planning.</li>
              </ul>
            </div>

            {/* 4 */}
            <div id="continuity" className={styles.block}>
              <h2 className={styles.h2}>4) Training Continuity & Adjustments</h2>
              <p className={styles.p}>
                To support safe progress, training follows a planned sequence with lesson objectives and milestones.
                Adjustments can be made when needed based on performance, weather, maintenance, and scheduling realities.
              </p>
              <ul className={styles.bullets}>
                <li>Students follow a planned sequence of lessons aligned to the chosen certificate/rating.</li>
                <li>Continuity supports safe learning progression and accurate progress tracking.</li>
                <li>Schedule adjustments are coordinated through the school when necessary.</li>
              </ul>
              <p className={styles.pMuted}>
                Royal International Flight School does not currently offer long-term sequential pathways for international students under Part 61 (PPL → IR → CPL).
              </p>
            </div>

            {/* 5 */}
            <div id="records" className={styles.block}>
              <h2 className={styles.h2}>5) Progress Standards, Records, and Completion</h2>
              <p className={styles.p}>
                Advancement is based on proficiency and meeting milestone standards. Training records are maintained to document
                participation, progress, and completion status within the approved training scope.
              </p>
              <ul className={styles.bullets}>
                <li>Satisfactory progress toward completion is expected.</li>
                <li>Milestones or stage checks may be used to verify readiness to advance.</li>
                <li>Completion is based on meeting program objectives and applicable standards.</li>
              </ul>
            </div>

            {/* 6 */}
            <div id="inperson" className={styles.block}>
              <h2 className={styles.h2}>6) In-Person Training Requirements</h2>
              <p className={styles.p}>
                Flight training is centered on scheduled, in-person participation. Independent study tools and online resources
                may be used as supplements, but do not replace required in-person training activity.
              </p>
              <ul className={styles.bullets}>
                <li>Scheduled flight training events</li>
                <li>Scheduled briefings and assigned ground instruction</li>
                <li>Required in-person activities tied to lesson objectives and milestones</li>
              </ul>
            </div>

            {/* 7 */}
            <div id="orientation" className={styles.block}>
              <h2 className={styles.h2}>7) Orientation & Confirmation of Requirements</h2>
              <p className={styles.p}>
                Orientation is required prior to enrollment. During orientation, we confirm eligibility, training scope,
                scheduling expectations, participation standards, and the student’s responsibilities to remain in good standing.
              </p>
              <div className={styles.ctaBar}>
                <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book Orientation
                </Link>
                <Link href="/contact" className={`${styles.btn} ${styles.btnGhost}`}>
                  Contact Admissions
                </Link>
              </div>
              <p className={styles.legal}>
                This page is for informational purposes only and does not constitute legal advice. Final requirements are reviewed
                during orientation based on program placement, training scope, and student circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
