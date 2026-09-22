import Link from "next/link";
import { Menu, Plane } from "lucide-react";
import { proofsReady } from "@/lib/proofs";

const links = [
  { href: "/opportunities", label: "Opportunities" },
  ...(proofsReady ? [{ href: "/visa-results", label: "Visa results" }] : []),
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About us" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const colors = overlay ? "border-white/10 bg-[#061a3b]/85 text-white" : "border-[#dce5ef] bg-white/95 text-[#071e42]";
  return (
    <header className={`relative z-40 border-b backdrop-blur-xl ${colors}`}>
      <div className="mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Yodhub Travel home">
          <span className={`flex h-11 w-11 items-center justify-center rounded-full ${overlay ? "bg-white text-[#0b3973]" : "bg-[#071e42] text-white"}`}>
            <Plane className="h-5 w-5 -rotate-12" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-extrabold tracking-[0.08em]">YODHUB</span>
            <span className="block text-[10px] font-semibold tracking-[0.42em] text-[#d89710]">TRAVEL</span>
          </span>
        </Link>
        <nav className={`hidden items-center gap-8 text-sm font-semibold lg:flex ${overlay ? "text-white/72" : "text-[#50657d]"}`} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} className="transition hover:text-[#d89710]" href={link.href}>{link.label}</Link>)}
        </nav>
        <Link href="/opportunities" className={`hidden rounded-full px-5 py-3 text-sm font-extrabold transition sm:inline-flex ${overlay ? "bg-white text-[#082b58] hover:bg-[#f2b334]" : "bg-[#e7a51b] text-[#071e42] hover:bg-[#f1b63a]"}`}>
          Start exploring
        </Link>
        <details className="group relative sm:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-current/15" aria-label="Open navigation"><Menu className="h-5 w-5" /></summary>
          <nav className="absolute right-0 top-14 w-64 rounded-2xl border border-[#dbe4ee] bg-white p-3 text-[#071e42] shadow-2xl" aria-label="Mobile navigation">
            {[...links, { href: "/faq", label: "FAQs" }, { href: "/contact", label: "Contact" }].map((link) => <Link key={link.href} className="block rounded-xl px-4 py-3 font-bold hover:bg-[#eef4fb]" href={link.href}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
