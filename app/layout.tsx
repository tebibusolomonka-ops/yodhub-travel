import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Yodhub Travel | Explore Global Opportunities",
  description: "Explore study, work, visit, and conference opportunities with clear requirements and guided applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
