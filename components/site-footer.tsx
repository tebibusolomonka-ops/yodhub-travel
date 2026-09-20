import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Plane, Send } from "lucide-react";

const columns = [
  { title: "Explore", links: [["Opportunities", "/opportunities"], ["Services", "/services"], ["How it works", "/how-it-works"], ["FAQs", "/faq"]] },
  { title: "Services", links: [["Study abroad", "/services/study-abroad"], ["Work abroad", "/services/work-abroad"], ["Visit & tourism", "/services/visit-tourism"], ["Conferences", "/services/conferences"]] },
  { title: "Company", links: [["About Yodhub", "/about"], ["Contact", "/contact"], ["Privacy", "/privacy"]] },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#05152f] text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a3975]"><Plane className="h-5 w-5 -rotate-12" /></span>
            <span><span className="block text-lg font-black tracking-[.09em]">YODHUB</span><span className="block text-[10px] font-bold tracking-[.42em] text-[#e4a31b]">TRAVEL</span></span>
          </Link>
          <p className="mt-6 max-w-sm text-base leading-7 text-[#a9bad0]">Clear opportunities, clear requirements, and one guided path from interest to application.</p>
          <div className="mt-7 space-y-3 text-sm text-[#b9c7d8]">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#e4a31b]" /> Addis Ababa, Ethiopia</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#e4a31b]" /> info@yodhub.example</p>
            <p className="flex items-center gap-3"><Send className="h-4 w-4 text-[#e4a31b]" /> Telegram Mini App coming next</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-extrabold uppercase tracking-[.14em] text-[#e6ad39]">{column.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-[#b9c7d8]">
                {column.links.map(([label, href]) => <li key={href}><Link className="inline-flex items-center gap-1.5 transition hover:text-white" href={href}>{label}<ArrowUpRight className="h-3.5 w-3.5 opacity-45" /></Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Yodhub Travel. Mock website for product development.</p>
          <p>No documents are collected or stored in this version.</p>
        </div>
      </div>
    </footer>
  );
}
