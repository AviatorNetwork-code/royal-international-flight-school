import Link from "next/link";
import styles from "./page.module.css";

export default function InternationalDetailsPage() {
  return (
    <main className={styles.page}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/programs/international" className={styles.backLink}>
            ← Back to International Programs
          </Link>

          <div className={styles.topActions}>
            <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
              Book Orientation
            </Link>
            <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* Document sheet */}
      <section className={styles.docWrap}>
        <div className={styles.doc}>
          <header className={styles.docHeader}>
            <div className={styles.docKicker}>Royal International Flight School</div>
            <h1 className={styles.docTitle}>International Training Requirements & Expectations</h1>
            <div className={styles.docMeta}>
              This overview summarizes program structure, scheduling expectations, participation standards,
              and documentation practices commonly used for international flight training in the United States.
            </div>
          </header>

          <div className={styles.hr} />

          {/* Table of contents */}
          <div className={styles.toc}>
            <div className={styles.tocTitle}>Contents</div>
            <ol className={styles.tocList}>
              <li>Program Enrollment & Structure</li>
              <li>Full-Time Training Participation & Clock Hours</li>
              <li>Scheduling & Attendance Expectations</li>
              <li>Training Path, Continuity, and Program Changes</li>
              <li>Progress Standards, Records, and Completion</li>
              <li>In-Person Training Requirements</li>
              <li>Orientation and Confirmation of Requirements</li>
            </ol>
          </div>

          <div className={styles.hr} />

          <Section
            title="1) Program Enrollment & Structure"
            body={
              <>
                <p>
                  International students train through a structured program plan with defined stages,
                  required participation, and documented progress. The goal is consistent training activity
                  aligned to a clear completion objective.
                </p>
                <ul>
                  <li>Training follows an established program syllabus with milestones and stage objectives.</li>
                  <li>Participation is expected through scheduled flight and ground activities.</li>
                  <li>Progress is monitored and training activity is documented throughout the program.</li>
                </ul>
              </>
            }
          />

          <Section
            title="2) Full-Time Training Participation & Clock Hours"
            body={
              <>
                <p>
                  Full-time participation is typically measured using <strong>clock hours</strong> and documented
                  training activity. During orientation, the school will review the schedule model and which
                  training activities count toward participation expectations.
                </p>
                <ul>
                  <li>
                    Full-time vocational participation is commonly expressed as weekly clock hours and may be referenced
                    (depending on instruction type) as <strong>18</strong> or <strong>22</strong> clock hours per week.
                  </li>
                  <li>
                    Students are expected to maintain consistent weekly training activity aligned with the program plan.
                  </li>
                  <li>
                    The exact schedule format and applicable activities are confirmed during orientation and placement.
                  </li>
                </ul>

                <p className={styles.callout}>
                  Admissions will review the training schedule model, participation expectations, and documentation approach
                  during orientation.
                </p>
              </>
            }
          />

          <Section
            title="3) Scheduling & Attendance Expectations"
            body={
              <>
                <p>
                  International training is delivered through scheduled flight and ground events. Students are expected to
                  attend scheduled training activities and follow school attendance policies.
                </p>
                <ul>
                  <li>Scheduled training events include flight training and assigned ground instruction.</li>
                  <li>Attendance and participation are monitored throughout training.</li>
                  <li>Significant gaps in training may affect continuity and progress planning.</li>
                </ul>
              </>
            }
          />

          <Section
            title="4) Training Path, Continuity, and Program Changes"
            body={
              <>
                <p>
                  International training is conducted under an established program path with defined milestones. To support
                  steady progress, students are expected to maintain continuity and follow the agreed training plan.
                </p>
                <ul>
                  <li>Students follow a planned sequence of lessons with stage objectives.</li>
                  <li>Training continuity supports safe learning progression and accurate progress tracking.</li>
                  <li>Program or schedule adjustments are coordinated through the school when needed.</li>
                </ul>
              </>
            }
          />

          <Section
            title="5) Progress Standards, Records, and Completion"
            body={
              <>
                <p>
                  Advancement is based on meeting proficiency and milestone standards. Training records are maintained to
                  document participation, progress, and completion status.
                </p>
                <ul>
                  <li>Satisfactory progress toward program completion is expected.</li>
                  <li>Milestones and stage checks may be used to verify readiness to advance.</li>
                  <li>Completion is based on meeting program objectives and standards.</li>
                </ul>
              </>
            }
          />

          <Section
            title="6) In-Person Training Requirements"
            body={
              <>
                <p>
                  International training is centered on scheduled, in-person participation. Independent study tools and online
                  resources may be used as supplements, but they do not replace required in-person training activity.
                </p>
                <ul>
                  <li>Scheduled flight training events</li>
                  <li>Scheduled briefings and ground instruction (as assigned)</li>
                  <li>Required in-person training activities tied to program milestones</li>
                </ul>
              </>
            }
          />

          <Section
            title="7) Orientation and Confirmation of Requirements"
            body={
              <>
                <p>
                  Orientation is required prior to enrollment. During orientation, we confirm eligibility, program placement,
                  schedule expectations, participation standards, and the student’s responsibilities to remain in good standing.
                </p>

                <div className={styles.docCtas}>
                  <Link href="/book-orientation" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Book Orientation
                  </Link>
                  <Link href="/programs/international" className={`${styles.btn} ${styles.btnSecondary}`}>
                    Back to International Programs
                  </Link>
                </div>
              </>
            }
          />

          <div className={styles.footerNote}>
            This document is for informational purposes and does not constitute legal advice. Final requirements are reviewed during
            orientation based on program placement and student circumstances.
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.sectionBody}>{body}</div>
    </section>
  );
}
