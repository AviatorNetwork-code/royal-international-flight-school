import React from "react";
import AppShell from "../../../components/ui/AppShell";
import styles from "./quicklinkspage.module.css";

export const metadata = {
  title: "Student Quick Links | Royal International Flight School",
  description:
    "Common student pilot links for FAA applications, weather, planning tools, study resources, and official references.",
};

type LinkItem = {
  name: string;
  href: string;
  note: string;
  tag?: "Required" | "Recommended" | "Optional";
};

type LinkGroup = {
  title: string;
  desc: string;
  items: LinkItem[];
};

const groups: LinkGroup[] = [
  {
    title: "FAA & Official",
    desc: "The official tools you’ll use for certificates, medical, and regulations.",
    items: [
      {
        name: "IACRA",
        href: "https://iacra.faa.gov/IACRA/Default.aspx",
        note: "FAA system for certificate applications and instructor recommendations.",
        tag: "Required",
      },
      {
        name: "FAA Handbooks & Manuals",
        href: "https://www.faa.gov/regulations_policies/handbooks_manuals",
        note: "Pilot’s Handbook of Aeronautical Knowledge, Airplane Flying Handbook, and more.",
        tag: "Recommended",
      },
      {
        name: "eCFR — Title 14 (FARs)",
        href: "https://www.ecfr.gov/current/title-14",
        note: "Official and current FAA regulations (always up-to-date).",
        tag: "Recommended",
      },
      {
        name: "MedXPress",
        href: "https://medxpress.faa.gov/",
        note: "Where you complete an FAA medical application before visiting an AME.",
        tag: "Recommended",
      },
      {
        name: "FAA AME Locator",
        href: "https://designee.faa.gov/designeeLocator",
        note: "Find Aviation Medical Examiners near you.",
        tag: "Recommended",
      },
    ],
  },
  {
    title: "Weather",
    desc: "Primary weather tools for briefing, planning, and risk management.",
    items: [
      {
        name: "Aviation Weather Center (AWC)",
        href: "https://aviationweather.gov/",
        note: "METARs, TAFs, charts, icing/turbulence, and official aviation products.",
        tag: "Required",
      },
      {
        name: "Windy",
        href: "https://www.windy.com/",
        note: "Big-picture weather awareness (use as a supplement, not your only source).",
        tag: "Optional",
      },
    ],
  },
  {
    title: "Flight Planning & Charts",
    desc: "Tools used to plan routes, view charts, and stay organized.",
    items: [
      {
        name: "ForeFlight",
        href: "https://foreflight.com/",
        note: "EFB for planning, weather overlays, briefing, and flight organization.",
        tag: "Recommended",
      },
      {
        name: "SkyVector",
        href: "https://skyvector.com/",
        note: "Free VFR/IFR charts and planning (great backup reference).",
        tag: "Recommended",
      },
      {
        name: "FAA Chart Supplements (Digital)",
        href: "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd",
        note: "Airport details, frequencies, procedures, and remarks (official source).",
        tag: "Recommended",
      },
    ],
  },
  {
    title: "Knowledge Test & Study",
    desc: "Study systems and prep resources used by serious students.",
    items: [
      {
        name: "Sheppard Air",
        href: "https://www.sheppardair.com/",
        note: "Highly effective preparation for FAA knowledge tests (follow their method).",
        tag: "Recommended",
      },
      {
        name: "ASA Pilot Training",
        href: "https://asa2fly.com/",
        note: "Oral exam guides and training books used for checkride preparation.",
        tag: "Optional",
      },
      {
        name: "Pilot Workshops",
        href: "https://pilotworkshops.com/",
        note: "Scenario-based learning (excellent for IFR decision-making and risk).",
        tag: "Optional",
      },
    ],
  },
];

const tagStyle = (tag?: LinkItem["tag"]) => {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: 950,
    fontSize: 12,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.7)",
    color: "rgba(15,23,42,0.85)",
    whiteSpace: "nowrap",
  };

  if (tag === "Required") {
    return {
      ...base,
      border: "1px solid rgba(212,175,55,0.45)",
      background: "rgba(212,175,55,0.16)",
      color: "rgba(6,19,38,0.95)",
    };
  }
  if (tag === "Recommended") {
    return {
      ...base,
      border: "1px solid rgba(15,23,42,0.16)",
      background: "rgba(15,23,42,0.04)",
    };
  }
  return base;
};

export default function StudentQuickLinksPage() {
  return (
    <AppShell>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>Students • Quick Links</div>
        <h1 className={styles.h1}>Student tools & resources</h1>
        <p className={styles.sub}>
          These are the most common links student pilots use for FAA paperwork,
          weather briefings, flight planning, and checkride preparation.
          Use this page as your “daily toolbox.”
        </p>

        <div className={styles.note}>
          <span className={styles.noteDot} />
          <span className={styles.noteText}>
            If you’re unsure which tools you need for your stage of training, ask your instructor.
          </span>
        </div>
      </section>

      {/* GROUPS */}
      <section className={styles.section}>
        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.title} className={styles.group}>
              <div className={styles.groupHead}>
                <h2 className={styles.h2}>{g.title}</h2>
                <p className={styles.muted}>{g.desc}</p>
              </div>

              <div className={styles.items}>
                {g.items.map((i) => (
                  <a
                    key={i.href}
                    className={styles.item}
                    href={i.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.itemTop}>
                      <div className={styles.itemName}>{i.name}</div>
                      {i.tag ? <span style={tagStyle(i.tag)}>{i.tag}</span> : null}
                    </div>
                    <div className={styles.itemNote}>{i.note}</div>
                    <div className={styles.itemLink}>
                      Open <span aria-hidden="true">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.banner}>
        <div>
          <h2 className={styles.h2}>Need help getting set up?</h2>
          <p className={styles.bannerText}>
            We can recommend what to install and what to use based on your program and stage of training.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <a className={styles.primary} href="/contact">
            Contact
          </a>
          <a className={styles.secondary} href="/students/policies">
            Training Policies
          </a>
        </div>
      </section>
    </AppShell>
  );
}
