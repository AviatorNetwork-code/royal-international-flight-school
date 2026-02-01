"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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

const navBtnStyle: React.CSSProperties = {
  ...linkStyle,
  padding: "10px 16px",
  borderRadius: 999,
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.22)",
  background: "rgba(255,255,255,0.10)",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

const ctaBtn: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 999,
  background: BRAND.gold,
  color: "#061326",
  fontWeight: 900,
  fontSize: 13,
  textDecoration: "none",
  border: "1px solid rgba(0,0,0,0.10)",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const pillBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.25)",
  color: "white",
  fontWeight: 900,
  fontSize: 13,
  textDecoration: "none",
  background: "rgba(255,255,255,0.10)",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
};

const ddItem: React.CSSProperties = {
  display: "block",
  padding: "10px 12px",
  textDecoration: "none",
  color: "#0F172A",
  fontWeight: 900,
  fontSize: 13,
};

const ddDivider: React.CSSProperties = { height: 1, background: "rgba(15,39,66,0.12)" };

type MenuItem = { label: string; href: string };

export default function AppHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  const usProgramsItems: MenuItem[] = useMemo(
    () => [
      { label: "U.S. Programs Overview", href: "/programs/us" },
      { label: "Private Pilot", href: "/programs/us/private" },
      { label: "Instrument Rating", href: "/programs/us/instrument" },
      { label: "Commercial Pilot", href: "/programs/us/commercial" },
      { label: "CFI / CFII", href: "/programs/us/cfi" },
      { label: "Discovery Flight", href: "/programs/us/discovery-flight" },
    ],
    []
  );

  const intlProgramsItems: MenuItem[] = useMemo(
    () => [
      { label: "International Overview", href: "/programs/international" },
      { label: "Detailed Requirements", href: "/programs/international/details" },
      { label: "Private Pilot", href: "/programs/international/private" },
      { label: "Instrument Rating", href: "/programs/international/instrument" },
      { label: "Commercial Pilot", href: "/programs/international/commercial" },
      { label: "CFI / CFII", href: "/programs/international/cfi" },
    ],
    []
  );

  const studentsItems: MenuItem[] = useMemo(
    () => [
      { label: "International Students", href: "/students/international" },
      { label: "Checkride Prep", href: "/students/checkride-prep" },
      { label: "Student Policies", href: "/students/policies" },
      { label: "Student Portal (Coming Soon)", href: "/students/portal" },
    ],
    []
  );

  const [programsOpen, setProgramsOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [programsGroup, setProgramsGroup] = useState<"us" | "intl">("us");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileProgramsUSOpen, setMobileProgramsUSOpen] = useState(false);
  const [mobileProgramsIntlOpen, setMobileProgramsIntlOpen] = useState(false);
  const [mobileStudentsOpen, setMobileStudentsOpen] = useState(false);

  const programsRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const t = e.target as Node;

      if (!programsRef.current?.contains(t)) setProgramsOpen(false);
      if (!studentsRef.current?.contains(t)) setStudentsOpen(false);

      if (mobileOpen && mobilePanelRef.current && !mobilePanelRef.current.contains(t)) {
        const targetEl = e.target as HTMLElement | null;
        const isBurger = targetEl?.closest?.("[data-burger='true']");
        if (!isBurger) setMobileOpen(false);
      }
    }

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProgramsOpen(false);
        setStudentsOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  function closeAllMenus() {
    setProgramsOpen(false);
    setStudentsOpen(false);

    setMobileOpen(false);
    setMobileProgramsOpen(false);
    setMobileProgramsUSOpen(false);
    setMobileProgramsIntlOpen(false);
    setMobileStudentsOpen(false);
  }

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div
        style={{
          background: BRAND.navy,
          borderBottom: "1px solid rgba(212,175,55,0.35)",
        }}
      >
        <div
          className="headerGrid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 120,
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          {/* LEFT: Desktop nav + Mobile burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              data-burger="true"
              type="button"
              onClick={() => {
                setMobileOpen((v) => !v);
                setProgramsOpen(false);
                setStudentsOpen(false);
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className="burgerOnly"
            >
              <BurgerIcon open={mobileOpen} />
            </button>

            {/* Desktop nav only */}
            <nav className="desktopOnly" style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Link
                href="/"
                style={{
                  ...linkStyle,
                  textDecoration: isActive("/") ? "underline" : "none",
                  textUnderlineOffset: 8,
                  textDecorationThickness: 2,
                }}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                style={{
                  ...linkStyle,
                  textDecoration: isActive("/about-us") ? "underline" : "none",
                  textUnderlineOffset: 8,
                  textDecorationThickness: 2,
                }}
              >
                About Us
              </Link>

              {/* Programs */}
              <div ref={programsRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => {
                    setProgramsOpen((v) => !v);
                    setStudentsOpen(false);
                    setProgramsGroup("us");
                  }}
                  style={navBtnStyle}
                  aria-haspopup="menu"
                  aria-expanded={programsOpen}
                  aria-controls="programs-flyout"
                >
                  Programs <span style={{ opacity: 0.9 }}>▼</span>
                </button>

                {programsOpen && (
                  <div id="programs-flyout" role="menu" style={flyoutShellStyle()}>
                    <div style={flyoutLeftStyle()}>
                      <FlyoutGroupRow
                        label="U.S. Residents"
                        active={programsGroup === "us"}
                        onActivate={() => setProgramsGroup("us")}
                      />
                      <FlyoutGroupRow
                        label="International Students"
                        active={programsGroup === "intl"}
                        onActivate={() => setProgramsGroup("intl")}
                      />
                    </div>

                    <div style={flyoutRightStyle()} role="menu" aria-label="Programs submenu">
                      {(programsGroup === "us" ? usProgramsItems : intlProgramsItems).map((i) => (
                        <Link
                          key={i.href}
                          href={i.href}
                          onClick={() => setProgramsOpen(false)}
                          style={ddItem}
                          role="menuitem"
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Students */}
              <div ref={studentsRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => {
                    setStudentsOpen((v) => !v);
                    setProgramsOpen(false);
                  }}
                  style={navBtnStyle}
                  aria-haspopup="menu"
                  aria-expanded={studentsOpen}
                >
                  Students <span style={{ opacity: 0.9 }}>▼</span>
                </button>

                {studentsOpen && (
                  <div style={dropdownStyle()}>
                    {studentsItems.slice(0, 3).map((i) => (
                      <Link key={i.href} href={i.href} onClick={() => setStudentsOpen(false)} style={ddItem}>
                        {i.label}
                      </Link>
                    ))}
                    <div style={ddDivider} />
                    <Link
                      href="/students/portal"
                      onClick={() => setStudentsOpen(false)}
                      style={{ ...ddItem, opacity: 0.7 }}
                    >
                      Student Portal (Coming Soon)
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/transparency"
                style={{
                  ...linkStyle,
                  textDecoration: isActive("/transparency") ? "underline" : "none",
                  textUnderlineOffset: 8,
                  textDecorationThickness: 2,
                }}
              >
                Transparency
              </Link>
            </nav>
          </div>

          {/* CENTER LOGO */}
          <Link href="/" aria-label="Home" style={{ justifySelf: "center" }} onClick={closeAllMenus}>
            <img
              src="/logo.png"
              alt="Royal International Flight School"
              className="brandLogo"
              style={{
                height: 180, // desktop size
                width: "auto",
                display: "block",
                transform: "translateY(18px)",
                filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.38))",
              }}
            />
          </Link>

          {/* RIGHT ACTIONS (desktop only) */}
          <div className="desktopOnly" style={{ display: "flex", justifyContent: "flex-end", gap: 14 }}>
            <Link
              href="/instructors"
              style={{
                ...linkStyle,
                textDecoration: isActive("/instructors") ? "underline" : "none",
                textUnderlineOffset: 8,
                textDecorationThickness: 2,
              }}
            >
              Our Instructors
            </Link>

            <Link
              href="/contact"
              style={{
                ...linkStyle,
                textDecoration: isActive("/contact") ? "underline" : "none",
                textUnderlineOffset: 8,
                textDecorationThickness: 2,
              }}
            >
              Contact
            </Link>

            <Link href="/book-orientation" style={ctaBtn}>
              Book Orientation
            </Link>

            <Link href="/students/portal" style={pillBtn}>
              Student Login
            </Link>
          </div>

          {/* ✅ MOBILE RIGHT CTA ONLY (burger menu holds everything else) */}
          <div className="mobileOnly" style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/book-orientation" style={ctaBtn} onClick={closeAllMenus}>
              Book
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div
          aria-hidden={false}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2,6,23,0.55)",
            backdropFilter: "blur(2px)",
            zIndex: 60,
            padding: 10,
          }}
        >
          <div
            ref={mobilePanelRef}
            style={{
              maxWidth: 560,
              margin: "0 auto",
              padding: "10px 10px 14px",
            }}
          >
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 22px 80px rgba(0,0,0,0.28)",
                overflow: "hidden",
                maxHeight: "85vh",
              }}
            >
              <div style={{ padding: 14, borderBottom: "1px solid rgba(15,23,42,0.10)" }}>
                <div style={{ fontWeight: 950, fontSize: 14, color: "#0F172A" }}>Menu</div>
                <div style={{ marginTop: 6, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href="/contact" onClick={closeAllMenus} style={mobilePill()}>
                    Contact
                  </Link>
                  <Link href="/book-orientation" onClick={closeAllMenus} style={mobileCta()}>
                    Book Orientation
                  </Link>
                  <Link href="/students/portal" onClick={closeAllMenus} style={mobilePill()}>
                    Student Login
                  </Link>
                </div>
              </div>

              <div style={{ padding: 10, overflow: "auto" }}>
                <MobileLink href="/" label="Home" onGo={closeAllMenus} />
                <MobileLink href="/about-us" label="About Us" onGo={closeAllMenus} />
                <MobileLink href="/transparency" label="Transparency" onGo={closeAllMenus} />
                <MobileLink href="/instructors" label="Our Instructors" onGo={closeAllMenus} />

                <button type="button" onClick={() => setMobileProgramsOpen((v) => !v)} style={mobileAccordionBtn()}>
                  <span>Programs</span>
                  <span style={{ opacity: 0.7 }}>{mobileProgramsOpen ? "–" : "+"}</span>
                </button>

                {mobileProgramsOpen && (
                  <div style={{ padding: "6px 8px 8px" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileProgramsUSOpen((v) => !v);
                        if (!mobileProgramsUSOpen) setMobileProgramsIntlOpen(false);
                      }}
                      style={mobileAccordionBtnSub()}
                      aria-expanded={mobileProgramsUSOpen}
                    >
                      <span>U.S. Residents</span>
                      <span style={{ opacity: 0.7 }}>{mobileProgramsUSOpen ? "–" : "+"}</span>
                    </button>

                    {mobileProgramsUSOpen && (
                      <div style={{ padding: "6px 8px 8px" }}>
                        {usProgramsItems.map((i) => (
                          <MobileSubLink key={i.href} href={i.href} label={i.label} onGo={closeAllMenus} />
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setMobileProgramsIntlOpen((v) => !v);
                        if (!mobileProgramsIntlOpen) setMobileProgramsUSOpen(false);
                      }}
                      style={mobileAccordionBtnSub()}
                      aria-expanded={mobileProgramsIntlOpen}
                    >
                      <span>International Students</span>
                      <span style={{ opacity: 0.7 }}>{mobileProgramsIntlOpen ? "–" : "+"}</span>
                    </button>

                    {mobileProgramsIntlOpen && (
                      <div style={{ padding: "6px 8px 8px" }}>
                        {intlProgramsItems.map((i) => (
                          <MobileSubLink key={i.href} href={i.href} label={i.label} onGo={closeAllMenus} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <button type="button" onClick={() => setMobileStudentsOpen((v) => !v)} style={mobileAccordionBtn()}>
                  <span>Students</span>
                  <span style={{ opacity: 0.7 }}>{mobileStudentsOpen ? "–" : "+"}</span>
                </button>

                {mobileStudentsOpen && (
                  <div style={{ padding: "6px 8px 8px" }}>
                    {studentsItems.map((i) => (
                      <MobileSubLink key={i.href} href={i.href} label={i.label} onGo={closeAllMenus} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .desktopOnly { display: none !important; }
          .burgerOnly { display: inline-flex !important; }
          .mobileOnly { display: flex !important; }

          /* ✅ Mobile header is compact + burger-only */
          .headerGrid { height: 78px !important; padding: 0 14px !important; }
          .brandLogo { height: 64px !important; transform: translateY(0px) !important; }
        }
        @media (min-width: 981px) {
          .desktopOnly { display: flex !important; }
          .burgerOnly { display: none !important; }
          .mobileOnly { display: none !important; }
        }
      `}</style>
    </header>
  );
}

/* ----- Styles helpers ----- */

function dropdownStyle(): React.CSSProperties {
  return {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: 0,
    minWidth: 240,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.98)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
    overflow: "hidden",
    zIndex: 100,
  };
}

function flyoutShellStyle(): React.CSSProperties {
  return {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: 0,
    width: 520,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.98)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.22)",
    overflow: "hidden",
    zIndex: 120,
    display: "grid",
    gridTemplateColumns: "220px 1fr",
  };
}

function flyoutLeftStyle(): React.CSSProperties {
  return {
    padding: 10,
    background: "rgba(15,23,42,0.03)",
    borderRight: "1px solid rgba(15,39,66,0.10)",
    display: "grid",
    gap: 10,
  };
}

function flyoutRightStyle(): React.CSSProperties {
  return {
    padding: 10,
    background: "white",
  };
}

function FlyoutGroupRow({
  label,
  active,
  onActivate,
}: {
  label: string;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={active}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "12px 12px",
        borderRadius: 12,
        cursor: "pointer",
        border: "1px solid rgba(15,23,42,0.10)",
        background: active ? "rgba(212,175,55,0.18)" : "rgba(255,255,255,0.80)",
        color: "#0F172A",
        fontWeight: 950,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>{label}</span>
      <span style={{ opacity: 0.55 }}>→</span>
    </button>
  );
}

/* Mobile styles */
function mobileRow(): React.CSSProperties {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 10px",
    borderRadius: 12,
    textDecoration: "none",
    color: "#0F172A",
    fontWeight: 950,
    background: "rgba(15,23,42,0.03)",
    border: "1px solid rgba(15,23,42,0.08)",
    marginBottom: 8,
  };
}

function mobileAccordionBtn(): React.CSSProperties {
  return {
    width: "100%",
    padding: "12px 10px",
    borderRadius: 12,
    background: "rgba(15,23,42,0.03)",
    border: "1px solid rgba(15,23,42,0.08)",
    cursor: "pointer",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 950,
    color: "#0F172A",
  };
}

function mobileAccordionBtnSub(): React.CSSProperties {
  return {
    width: "100%",
    padding: "12px 10px",
    borderRadius: 12,
    background: "rgba(15,23,42,0.02)",
    border: "1px solid rgba(15,23,42,0.08)",
    cursor: "pointer",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 950,
    color: "#0F172A",
  };
}

function mobileSubRow(): React.CSSProperties {
  return {
    display: "block",
    padding: "10px 10px",
    borderRadius: 12,
    textDecoration: "none",
    color: "rgba(15,23,42,0.88)",
    fontWeight: 850,
    background: "white",
    border: "1px solid rgba(15,23,42,0.08)",
    marginBottom: 8,
  };
}

function mobilePill(): React.CSSProperties {
  return {
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 999,
    border: "1px solid rgba(15,23,42,0.12)",
    color: "#0F172A",
    fontWeight: 950,
    background: "rgba(255,255,255,0.9)",
  };
}

function mobileCta(): React.CSSProperties {
  return {
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 999,
    border: "1px solid rgba(0,0,0,0.10)",
    background: BRAND.gold,
    color: "#061326",
    fontWeight: 950,
  };
}

function MobileLink({ href, label, onGo }: { href: string; label: string; onGo: () => void }) {
  return (
    <Link href={href} onClick={onGo} style={mobileRow()}>
      <span>{label}</span>
      <span style={{ opacity: 0.55 }}>→</span>
    </Link>
  );
}

function MobileSubLink({ href, label, onGo }: { href: string; label: string; onGo: () => void }) {
  return (
    <Link href={href} onClick={onGo} style={mobileSubRow()}>
      {label}
    </Link>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  const common: React.CSSProperties = {
    width: 18,
    height: 2,
    background: "rgba(255,255,255,0.92)",
    borderRadius: 999,
    transition: "transform 200ms ease, opacity 200ms ease",
  };

  return (
    <span style={{ display: "grid", gap: 4 }}>
      <span style={{ ...common, transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
      <span style={{ ...common, opacity: open ? 0 : 1 }} />
      <span style={{ ...common, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
    </span>
  );
}
  