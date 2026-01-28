import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "George Siciaridis — Business & Finance",
  description:
    "Business & Finance Manager in construction/field services. Forecasting, job costing, reporting, and operational systems.",
  openGraph: {
    title: "George Siciaridis",
    description:
      "Business & Finance Manager in construction/field services. Forecasting, job costing, reporting, and operational systems.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="pointer-events-none fixed inset-0 grid-overlay" />
        {children}
      </body>
    </html>
  );
}
