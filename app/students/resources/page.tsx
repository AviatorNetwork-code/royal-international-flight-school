import React from "react";
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";
import styles from "./resourcespage.module.css";

export const metadata = {
  title: "Student Resources | Royal International Flight School",
  description:
    "Downloads, study references, training documents, and student success guides for Royal International Flight School students.",
};

type ResourceItem = {
  title: string;
  desc: string;
  href?: string;
  tag?: "PDF" | "Guide" | "Checklist" | "Reference" | "Coming soon";
};

type ResourceGroup = {
  title: string;
  desc: string;
  items: ResourceItem[];
};

const groups: ResourceGroup[] = [
  {
    title: "Downloads",
    desc: "Practical checklists and templates to keep training organized and consistent.",
    items: [
      {
        title: "Student Onboarding Checklist",
        desc: "What to bring, what to set up, and how to start training smoothly.",
        tag: "Checklist",
      },
      {
        title: "Lesson Prep Template",
        desc: "A simple format to prepare, brief, fly, and debrief more effectively.",
        tag: "Coming soon",
      },
      {
        title: "Solo Readiness Checklist",
        desc: "A high-level checklist of the common requirements before first solo.",
        tag: "Checklist",
      },
      {
        title: "Checkride Document Checklist",
        desc: "The common paperwork and items to bring to your practical test.",
        tag: "Checklist",
      },
    ],
  },
  {
    title: "Books & References",
    desc: "Core references used throughout training. Keep these handy as your foundation.",
    items: [
      {
        title: "FAA Handbooks & Manuals",
        desc: "PHAK, AFH, and other FAA references (official source).",
        href: "https://www.faa.gov/regulations_policies/handbooks_manuals",
        tag: "Reference",
      },
      {
        title: "Airman Certification Standards (ACS)",
        desc: "The FAA standard for what you must know and demonstrate on the checkride.",
        href: "https://www.faa.gov/training_testing/testing/acs",
        tag: "Reference",
      },
      {
        title: "eCFR — Title 14 (FARs)",
        desc: "Official current federal aviation regulations (always up-to-date).",
        href: "https://www.ecfr.gov/current/title-14",
        tag: "Reference",
      },
      {
        title: "ASA Oral Exam Guides",
        desc: "Popular oral prep guides used for practical test readiness.",
        href: "https://asa2fly.com/",
        tag: "Reference",
      },
    ],
  },
  {
    title: "Training Documents",
    desc: "How we keep training standardized—so expectations are clear from day one.",
    items: [
      {
        title: "Syllabus Overview",
        desc: "How lessons are structured, what milestones look like, and how progress is measured.",
        tag: "Guide",
      },
      {
        title: "Stage Checks & Progress Standards",
        desc: "What we evaluate at key milestones and how to prepare.",
        tag: "Guide",
      },
      {
        title: "Briefing & Debrief Format",
        desc: "How to show up prepared and leave with clear action items.",
        tag: "Guide",
      },
      {
        title: "Safety Culture Standards",
        desc: "Professional decision-making expectations on the ramp and in the cockpit.",
        tag: "Guide",
      },
    ],
  },
  {
    title: "Student Success Guides",
    desc: "Short guidance that helps students progress faster and avoid common delays.",
    items: [
      {
        title: "How to Study Efficiently",
        desc: "A simple weekly structure: what to study, when, and why it works.",
        tag: "Guide",
      },
      {
        title: "How to Prepare for Each Lesson",
        desc: "Pre-brief habits that reduce re-learning and build confidence.",
        tag: "Guide",
      },
      {
        title: "Logging Time Correctly",
        desc: "Common logbook mistakes students make—and how to avoid them.",
        tag: "Guide",
      },
      {
        title: "Why Training Gets Delayed",
        desc: "Weather, scheduling gaps, cancellations, and how to stay on track.",
        tag: "Guide",
      },
    ],
  },
];

const tagStyle = (tag?: ResourceItem["tag"]) => {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: 950,
    fontSize: 12,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.75)",
    color: "rgba(15,23,42,0.85)",
    whiteSpace: "nowrap",
  };

  if (tag === "Checklist") {
    return {
      ...base,
      border: "1px solid rgba(212,175,55,0.45)",
      background: "rgba(212,175,55,0.16)",
      color: "rgba(6,19,38,0.95)",
    };
  }

  if (tag === "Coming soon") {
    return {
      ...base,
      border: "1px solid rgba(15,23,42,0.14)",
      background: "rgba(15,23,42,0.04)",
      color: "rgba(15,23,42,0.70)",
    };
  }

  return base;
};

export default function StudentResourcesPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>Students • Resources</div>
        <h1 className={styles.h1}>Student resources</h1>
        <p className={styles.sub}>
          A curated toolbox for training: checklists, references, and short guides that help you
          prepare better, progress faster, and stay aligned with professional standards.
        </p>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/students/quick-links">
            Quick Links
          </Link>
          <Link className={styles.secondary} href="/students/policies">
            Training Policies
          </Link>
        </div>

        <div className={styles.note}>
          <span className={styles.noteDot} />
          <span className={styles.noteText}>
            We’ll keep expanding this page with printable PDFs and training templates.
          </span>
        </div>
      </section>

      {/* GROUPS */}
      <section className={styles.section}>
        <div className={styles.groups}>
          {groups.map((g) => (
            <div key={g.title} className={styles.group}>
              <div className={styles.groupHead}>
                <h2 className={styles.h2}>{g.title}</h2>
                <p className={styles.muted}>{g.desc}</p>
              </div>

              <div className={styles.grid}>
                {g.items.map((i) => {
                  const clickable = Boolean(i.href);
                  return clickable ? (
                    <a
                      key={i.title}
                      className={styles.card}
                      href={i.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles.cardTop}>
                        <div className={styles.cardTitle}>{i.title}</div>
                        {i.tag ? <span style={tagStyle(i.tag)}>{i.tag}</span> : null}
                      </div>
                      <div className={styles.cardDesc}>{i.desc}</div>
                      <div className={styles.cardLink}>
                        Open <span aria-hidden="true">→</span>
                      </div>
                    </a>
                  ) : (
                    <div key={i.title} className={styles.cardDisabled}>
                      <div className={styles.cardTop}>
                        <div className={styles.cardTitle}>{i.title}</div>
                        <span style={tagStyle(i.tag ?? "Coming soon")}>{i.tag ?? "Coming soon"}</span>
                      </div>
                      <div className={styles.cardDesc}>{i.desc}</div>
                      <div className={styles.cardLinkMuted}>Available soon</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Need a document for a scholarship or employer?</h2>
          <p className={styles.bannerText}>
            We can provide enrollment verification and training cost estimates upon request.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <Link className={styles.primary} href="/contact">
            Contact
          </Link>
          <Link className={styles.secondary} href="/students/financial-aid">
            Financial Aid
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
