import "./globals.css";
import React from "react";
import AppHeader from "../components/ui/AppHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
