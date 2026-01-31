"use client";

import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#0F172A",
        position: "relative", // ✅ REQUIRED
        zIndex: 0,            // ✅ REQUIRED
      }}
    >
      {/* FIXED BACKGROUND IMAGE */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "url('/backgroundImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1, // ✅ safe background layer
        }}
      />

      {/* SOFT OVERLAY */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0.15) 100%)",
          zIndex: 0,
        }}
      />

      {/* PAGE CONTENT */}
      <main
        style={{
          position: "relative",
          zIndex: 1, // ✅ content above background
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 18px 90px",
        }}
      >
        <div
          style={{
            borderRadius: 28,
            padding: "34px 28px",
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 28px 90px rgba(0,0,0,0.20)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {children}
        </div>
      </main>

      <div style={{ height: 40 }} />
    </div>
  );
}
