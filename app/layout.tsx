import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { TelegramFab } from "@/components/telegram-fab";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yodhubtravel.com"),
  alternates: { canonical: "/" },
  title: "Yodhub Travel | Study, Work & Visit Abroad",
  description: "Affordable agent service from Addis Ababa for study, work, visit, and conference travel, with all the guidance handled on your behalf.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Yodhub Travel",
    url: "https://www.yodhubtravel.com",
    siteName: "Yodhub Travel",
    type: "website",
    description: "Study, work, visit, and conference travel with all the guidance handled on your behalf.",
    images: ["/yodhub-logo-full.png"],
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
        <TelegramFab />
      </body>
    </html>
  );
}
