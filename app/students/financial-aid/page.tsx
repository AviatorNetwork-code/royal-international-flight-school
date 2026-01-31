import React from "react";
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";
import styles from "./financialaidpage.module.css";

export const metadata = {
  title: "Scholarships & Financial Aid | Royal International Flight School",
  description:
    "Scholarships and third-party funding guidance for students at Royal International Flight School.",
};

const externalScholarships = [
  { name: "AOPA Foundation", href: "https://www.aopa.org/training-and-safety/learn-to-fly/scholarships" },
  { name: "Experimental Aircraft Association (EAA)", href: "https://www.eaa.org/eaa/youth/aviation-scholarships" },
  { name: "Women in Aviation International", href: "https://www.wai.org/scholarships" },
  { name: "OBAP", href: "https://obap.org/scholarships/" },
  { name: "NGPA", href: "https://www.ngpa.org/scholarships" },
];

const supportItems = [
  "Enrollment verification letters",
  "Training cost estimates",
  "Instructor recommendations",
];

export default function FinancialAidPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>Students • Financial Aid</div>
        <h1 className={styles.h1}>Scholarships &amp; Financial Aid</h1>
        <p className={styles.sub}>
          Royal International Flight School is committed to helping motivated students pursue their
          aviation goals. While we do not participate in federal student aid programs, our students
          may be eligible for private aviation scholarships and third-party funding opportunities.
        </p>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/contact">
            Contact Admissions
          </Link>
          <Link className={styles.secondary} href="/students/quick-links">
            Student Quick Links
          </Link>
        </div>
      </section>

      {/* EXTERNAL SCHOLARSHIPS */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>External aviation scholarships</h2>
          <p className={styles.muted}>
            Students may apply for scholarships offered by national aviation organizations such as:
          </p>
        </div>

        <div className={styles.grid}>
          {externalScholarships.map((s) => (
            <a
              key={s.name}
              className={styles.card}
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.cardTitle}>{s.name}</div>
              <div className={styles.cardText}>
                Scholarship programs are awarded independently and may have eligibility requirements and limited availability.
              </div>
              <div className={styles.cardLink}>
                Visit site <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.note}>
          Scholarships are awarded independently by each organization and are subject to eligibility requirements and availability.
        </div>
      </section>

      {/* ROYAL SCHOLARSHIP */}
      <section className={styles.sectionAlt}>
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <h2 className={styles.h2}>Royal Flight Scholarship</h2>
            <p className={styles.text}>
              We also offer limited in-house scholarships and training credits to support dedicated
              student pilots who demonstrate commitment and professionalism throughout their training.
            </p>
            <div className={styles.small}>
              Availability is limited and may vary by season.
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Application support</h2>
            <p className={styles.text}>
              Royal International Flight School assists students with:
            </p>
            <ul className={styles.list}>
              {supportItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <div className={styles.blockCtas}>
              <Link className={styles.primary} href="/contact">
                Request support
              </Link>
              <Link className={styles.secondary} href="/admissions">
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Want help finding scholarship options?</h2>
          <p className={styles.bannerText}>
            Contact us to learn more about available scholarship opportunities and what documentation you may need.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <Link className={styles.primary} href="/contact">
            Contact us
          </Link>
          <Link className={styles.secondary} href="/students/policies">
            Training Policies
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
