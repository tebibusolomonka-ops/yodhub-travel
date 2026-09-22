import Link from "next/link";
import { Menu, Send } from "lucide-react";
import { contact } from "@/lib/contact";
import { proofsReady } from "@/lib/proofs";

const links = [
  { href: "/opportunities", label: "Opportunities" },
  ...(proofsReady ? [{ href: "/visa-results", label: "Visa results" }] : []),
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About us" },
];

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-12 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-[0_6px_20px_rgba(4,20,48,.18)] ring-1 ring-black/5">
        <img src="/yodhub-mark.png" alt="" className="h-full w-full object-contain" />
      </span>
      <span>
        <span className={`block text-lg font-black leading-5 tracking-[0.08em] ${light ? "text-white" : "text-[#0b2a5c]"}`}>YODHUB</span>
        <span className="block text-[10px] font-bold tracking-[0.42em] text-[#d89710]">TRAVEL</span>
      </span>
    </span>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const colors = overlay ? "border-white/10 bg-[#061a3b]/85 text-white" : "border-[#dce5ef] bg-white/95 text-[#071e42]";
  return (
    <header className={`relative z-40 border-b backdrop-blur-xl ${colors}`}>
      <div className="mx-auto flex h-[80px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Yodhub Travel home"><BrandLogo light={overlay} /></Link>
        <nav className={`hidden items-center gap-7 text-sm font-semibold lg:flex ${overlay ? "text-white/75" : "text-[#50657d]"}`} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} className="transition hover:text-[#d89710]" href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={contact.telegramHref} target="_blank" rel="noreferrer" aria-label={`Message ${contact.telegram} on Telegram`} className={`hidden h-11 w-11 items-center justify-center rounded-full transition sm:flex ${overlay ? "bg-white/10 hover:bg-white/20" : "bg-[#eaf4fb] text-[#229ed9] hover:bg-[#dbeefa]"}`}><Send className="h-[18px] w-[18px]" /></a>
          <Link href="/opportunities" className={`hidden rounded-full px-5 py-3 text-sm font-extrabold transition sm:inline-flex ${overlay ? "bg-white text-[#082b58] hover:bg-[#f2b334]" : "bg-[#e7a51b] text-[#071e42] hover:bg-[#f1b63a]"}`}>
            Start exploring
          </Link>
          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-current/15" aria-label="Open navigation"><Menu className="h-5 w-5" /></summary>
            <nav className="absolute right-0 top-14 w-64 rounded-2xl border border-[#dbe4ee] bg-white p-3 text-[#071e42] shadow-2xl" aria-label="Mobile navigation">
              {[...links, { href: "/faq", label: "FAQs" }, { href: "/contact", label: "Contact" }].map((link) => <Link key={link.href} className="block rounded-xl px-4 py-3 font-bold hover:bg-[#eef4fb]" href={link.href}>{link.label}</Link>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
