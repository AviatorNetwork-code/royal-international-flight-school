// app/students/portal/page.tsx
import Link from "next/link";
import AppShell from "../../../components/ui/AppShell";

export const metadata = {
  title: "Student Portal | Royal International Flight School",
  description:
    "The Royal International Flight School student portal is coming soon.",
};

export default function StudentPortalPage() {
  return (
    <AppShell>
      <main style={{ padding: "8px 0" }}>
        <div
          style={{
            display: "grid",
            gap: 14,
            alignItems: "start",
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.35)",
              fontWeight: 900,
              fontSize: 13,
              width: "fit-content",
            }}
          >
            Students • Portal
          </div>

          <h1
            style={{
              margin: "4px 0 0",
              fontSize: 44,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
          >
            Student Portal — Coming Soon
          </h1>

          <p
            style={{
              margin: 0,
              color: "rgba(15,23,42,0.75)",
              lineHeight: 1.75,
              fontSize: 16,
              maxWidth: 820,
              fontWeight: 650,
            }}
          >
            We’re building a dedicated Student Portal to make training smoother and
            more transparent — including resources, policies, progress tools, and
            streamlined communication.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 6,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(15,23,42,0.10)",
                borderRadius: 22,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 950, marginBottom: 8 }}>What you’ll see here</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(15,23,42,0.78)", lineHeight: 1.7, fontWeight: 650 }}>
                <li>Student resources & quick links</li>
                <li>Policies, standards, and forms</li>
                <li>Training milestones & checklists</li>
                <li>Announcements and updates</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(15,23,42,0.10)",
                borderRadius: 22,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 950, marginBottom: 8 }}>In the meantime</div>
              <p style={{ margin: 0, color: "rgba(15,23,42,0.74)", lineHeight: 1.7, fontWeight: 650 }}>
                Use the Students section for helpful links and information. If you
                need anything specific, contact admissions and we’ll help quickly.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Link
                  href="/students/resources"
                  style={{
                    textDecoration: "none",
                    border: "1px solid rgba(15,23,42,0.14)",
                    color: "#0F172A",
                    fontWeight: 950,
                    padding: "12px 16px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.6)",
                  }}
                >
                  Student Resources
                </Link>

                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    background: "#D4AF37",
                    color: "#061326",
                    fontWeight: 950,
                    padding: "12px 16px",
                    borderRadius: 999,
                    boxShadow: "0 16px 40px rgba(212,175,55,0.20)",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 6,
              borderRadius: 22,
              padding: 18,
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(2,6,23,0.02))",
              border: "1px solid rgba(15,23,42,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 950, fontSize: 18 }}>Want to be notified?</div>
              <div style={{ color: "rgba(15,23,42,0.72)", fontWeight: 650, marginTop: 4, lineHeight: 1.6 }}>
                Ask us to add you to the portal update list.
              </div>
            </div>

            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                border: "1px solid rgba(15,23,42,0.14)",
                color: "#0F172A",
                fontWeight: 950,
                padding: "12px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.7)",
              }}
            >
              Request access updates →
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px) {
            main div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
    </AppShell>
  );
}
