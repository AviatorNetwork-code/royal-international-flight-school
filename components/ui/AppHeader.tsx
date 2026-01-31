"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  navy: "#23436e",
  gold: "#D4AF37",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 800,
  padding: "8px 10px",
  borderRadius: 10,
};

const pillBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.20)",
  color: "white",
  fontWeight: 900,
  fontSize: 13,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  whiteSpace: "nowrap",
};

const ctaBtn: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 999,
  border: "1px solid rgba(0,0,0,0.10)",
  background: BRAND.gold,
  color: BRAND.navy,
  fontWeight: 900,
  fontSize: 13,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
};

const ddItem: React.CSSProperties = {
  display: "block",
  padding: "10px 12px",
  textDecoration: "none",
  color: "#0F172A",
  fontWeight: 900,
  fontSize: 13,
};

const ddDivider: React.CSSProperties = {
  height: 1,
  background: "rgba(15,39,66,0.12)",
};

export default function AppHeader() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const [programsOpen, setProgramsOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);

  const programsRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!programsRef.current?.contains(e.target as Node)) setProgramsOpen(false);
      if (!studentsRef.current?.contains(e.target as Node)) setStudentsOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProgramsOpen(false);
        setStudentsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* MAIN BAR */}
      <div
        style={{
          background: BRAND.navy,
          borderBottom: "1px solid rgba(212,175,55,0.35)",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            height: 98,
            padding: "0 60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT NAV */}
          <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Link
              href="/"
              style={{
                ...linkStyle,
                textDecoration: isActive("/") ? "underline" : "none",
                textUnderlineOffset: 8,
              }}
            >
              Home
            </Link>

            <Link
              href="/about"
              style={{
                ...linkStyle,
                textDecoration: isActive("/about") ? "underline" : "none",
                textUnderlineOffset: 8,
              }}
            >
              About Us
            </Link>

            {/* PROGRAMS */}
            <div ref={programsRef} style={{ position: "relative" }}>
              <button
                onClick={() => {
                  setProgramsOpen((v) => !v);
                  setStudentsOpen(false);
                }}
                style={{
                  ...linkStyle,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
              >
                Programs ▾
              </button>

              {programsOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    minWidth: 240,
                    borderRadius: 14,
                    background: "white",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
                    overflow: "hidden",
                  }}
                >
                  <Link href="/programs" onClick={() => setProgramsOpen(false)} style={ddItem}>
                    Programs Overview
                  </Link>
                  <div style={ddDivider} />
                  <Link href="/programs/private" onClick={() => setProgramsOpen(false)} style={ddItem}>
                    Private Pilot
                  </Link>
                  <Link href="/programs/instrument" onClick={() => setProgramsOpen(false)} style={ddItem}>
                    Instrument Rating
                  </Link>
                  <Link href="/programs/commercial" onClick={() => setProgramsOpen(false)} style={ddItem}>
                    Commercial Pilot
                  </Link>
                  <Link href="/programs/cfi" onClick={() => setProgramsOpen(false)} style={ddItem}>
                    CFI / CFII
                  </Link>
                </div>
              )}
            </div>

            {/* STUDENTS */}
            <div ref={studentsRef} style={{ position: "relative" }}>
              <button
                onClick={() => {
                  setStudentsOpen((v) => !v);
                  setProgramsOpen(false);
                }}
                style={{
                  ...linkStyle,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
              >
                Students ▾
              </button>

              {studentsOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    minWidth: 260,
                    borderRadius: 14,
                    background: "white",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
                    overflow: "hidden",
                  }}
                >
                  <Link href="/students/financial-aid" style={ddItem}>Financial Aid</Link>
                  <Link href="/students/quick-links" style={ddItem}>Quick Links</Link>
                  <Link href="/students/resources" style={ddItem}>Resources</Link>
                  <Link href="/students/benefits" style={ddItem}>Benefits</Link>
                  <div style={ddDivider} />
                  <Link href="/students/policies" style={ddItem}>Training Policies</Link>
                  <Link href="/students/checkride-prep" style={ddItem}>Checkride Prep</Link>
                  <Link href="/students/international" style={ddItem}>International Students</Link>
                  <Link href="/students/portal" style={ddItem}>Student Portal</Link>
                </div>
              )}
            </div>

            <Link
              href="/transparency"
              style={{
                ...linkStyle,
                textDecoration: isActive("/transparency") ? "underline" : "none",
                textUnderlineOffset: 8,
              }}
            >
              Transparency
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
            <Link href="/book-orientation" style={ctaBtn}>
              Book Orientation
            </Link>
            <span style={{ ...pillBtn, opacity: 0.65 }} title="Coming soon">
              Student Login
            </span>
          </div>

          {/* FLOATING LOGO */}
          <Link
            href="/"
            aria-label="Home"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) translateY(18px)",
              zIndex: 60,
            }}
          >
            <img
              src="/logo.png"
              alt="Royal International Flight School"
              style={{
                height: 210,
                width: "auto",
                filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.38))",
              }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
