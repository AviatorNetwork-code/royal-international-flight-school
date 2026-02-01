import "./globals.css";
import React from "react";
import AppHeader from "../components/ui/AppHeader";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflowX: "hidden" }}>
        <AppHeader />
        <div style={{ minHeight: "100vh" }}>{children}</div>
      </body>
    </html>
  );
}
