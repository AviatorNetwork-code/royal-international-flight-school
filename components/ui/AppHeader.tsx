"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  navy: "#23436e",
  gold: "#D4AF37",
};

type MenuItem = { label: string; href: string };

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
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
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
  background: "rgba(255,255,255,0.06)",
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

export default function AppHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  // US Residents programs
  const usProgramsItems: MenuItem[] = useMemo(
    () => [
      { label: "Programs Overview", href: "/programs" },
      { label: "Private Pilot", href: "/programs/us/private" },
      { label: "Instrument Rating", href: "/programs/us/instrument" },
      { label: "Commercial Pilot", href: "/programs/us/commercial" },
      { label: "CFI / CFII", href: "/programs/us/cfi" },
    ],
    []
  );

  // International Students programs (SEVP)
  const intlProgramsItems: MenuItem[] = useMemo(
    () => [
      { label: "International Overview", href: "/programs/international" },
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

  // Desktop Programs flyout state
  const [programsGroup, setProgramsGroup] = useState<"us" | "intl">("us");

  const [mobileOpen, setMobileOpen] = useState(false);

  // Mobile nested accordions
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

  function openProgramsFlyout() {
    setProgramsOpen(true);
    setStudentsOpen(false);
  }
  function closeProgramsFlyout() {
    setProgramsOpen(false);
  }

  return (
    <header className="appHeader" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="topBar">
        <div className="barInner">
          {/* LEFT */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Burger (mobile only) */}
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
              className="burgerOnly burgerBtn"
            >
              <BurgerIcon open={mobileOpen} />
            </button>

            {/* Desktop nav (LEFT) */}
            <nav className="desktopOnly" style={{ gap: 10, alignItems: "center" }}>
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
                href="/about-us"
                style={{
                  ...linkStyle,
                  textDecoration: isActive("/about-us") ? "underline" : "none",
                  textUnderlineOffset: 8,
                }}
              >
                About Us
              </Link>

              {/* Programs flyout dropdown */}
              <div ref={programsRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => {
                    setProgramsOpen((v) => !v);
                    setStudentsOpen(false);
                    setProgramsGroup("us");
                  }}
                  onMouseEnter={openProgramsFlyout}
                  style={navBtnStyle}
                  aria-haspopup="menu"
                  aria-expanded={programsOpen}
                  aria-controls="programs-flyout"
                >
                  Programs ▾
                </button>

                {programsOpen && (
                  <div
                    id="programs-flyout"
                    role="menu"
                    style={flyoutShellStyle()}
                    onMouseEnter={openProgramsFlyout}
                    onMouseLeave={closeProgramsFlyout}
                  >
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
                      <div style={{ marginTop: 10, ...ddDivider }} />
                      <div
                        style={{
                          padding: "10px 12px",
                          fontSize: 12,
                          fontWeight: 850,
                          color: "rgba(15,23,42,0.65)",
                        }}
                      >
                        Choose a group to see programs →
                      </div>
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

              {/* Students dropdown */}
              <div ref={studentsRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  onClick={() => {
                    setStudentsOpen((v) => !v);
                    setProgramsOpen(false);
                  }}
                  style={navBtnStyle}
                >
                  Students ▾
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
                }}
              >
                Transparency
              </Link>
            </nav>
          </div>

          {/* CENTER LOGO */}
          <Link href="/" aria-label="Home" className="brandAnchor" onClick={closeAllMenus}>
            <span className="brandLogoWrap">
              <img className="brandLogo" src="/logo.png" alt="Royal International Flight School" />
            </span>
          </Link>

          {/* RIGHT ACTIONS (desktop) — Our Instructors moved here */}
          <div className="desktopOnly rightActions" style={{ justifyContent: "flex-end", gap: 12, alignItems: "center" }}>
            <Link
              href="/instructors"
              style={{
                ...linkStyle,
                textDecoration: isActive("/instructors") ? "underline" : "none",
                textUnderlineOffset: 8,
              }}
            >
              Our Instructors
            </Link>

            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
            <Link href="/book-orientation" style={ctaBtn}>
              Book Orientation
            </Link>
            <Link href="/students/portal" style={pillBtn}>
              Student Portal
            </Link>
          </div>

          {/* RIGHT ACTIONS (mobile quick button) — IMPORTANT: no display inline style here */}
          <div className="mobileOnly" style={{ justifyContent: "flex-end" }}>
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
          }}
        >
          <div
            ref={mobilePanelRef}
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "12px 16px 18px",
            }}
          >
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 22px 80px rgba(0,0,0,0.28)",
                overflow: "hidden",
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
                    Student Portal
                  </Link>
                </div>
              </div>

              <div style={{ padding: 10 }}>
                <MobileLink href="/" label="Home" onGo={closeAllMenus} />
                <MobileLink href="/about-us" label="About Us" onGo={closeAllMenus} />
                <MobileLink href="/transparency" label="Transparency" onGo={closeAllMenus} />
                <MobileLink href="/instructors" label="Our Instructors" onGo={closeAllMenus} />

                {/* Programs accordion */}
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

                {/* Students accordion */}
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
        .appHeader {
          --headerH: 110px;
          --padX: 16px;

          /* Desktop: 1.5x bigger logo */
          --logoH: 180px;
          --logoDrop: 12px;
        }

        .topBar {
          background: ${BRAND.navy};
          border-bottom: 1px solid rgba(212,175,55,0.35);
        }

        .barInner {
          max-width: 1200px;
          margin: 0 auto;
          height: var(--headerH);
          padding: 0 var(--padX);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        /* Make sure these behave as flex on desktop */
        .desktopOnly { display: flex !important; }
        .rightActions { display: flex; }
        .burgerOnly { display: none !important; }
        .mobileOnly { display: none !important; }

        .burgerBtn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .brandAnchor {
          justify-self: center;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .brandLogoWrap {
          height: var(--logoH);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: translateY(var(--logoDrop));
          will-change: transform;
          filter: drop-shadow(0 18px 40px rgba(0,0,0,0.38));
        }

        .brandLogo {
          height: 100%;
          width: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 980px) {
          .desktopOnly { display: none !important; }
          .burgerOnly { display: inline-flex !important; }
          .mobileOnly { display: flex !important; }

          .appHeader {
            --headerH: 76px;
            --padX: 14px;

            /* Mobile: logo uses header space only */
            --logoH: 100px;
--logoDrop: 6px;   /* optional */

            --logoDrop: 0px;
          }
        }
      `}</style>
    </header>
  );
}

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
