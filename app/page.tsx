import Link from "next/link";
import { ArrowRight, BadgeCheck, BadgeDollarSign, Building2, FileCheck2, GraduationCap, Handshake, MapPin, MessageCircle, Search, Send, ShieldCheck, Sparkles } from "lucide-react";
import { OpportunityBrowser } from "@/components/opportunity-browser";
import { ProofGallery } from "@/components/proof-gallery";
import { TravelGlobe } from "@/components/travel-globe";
import { SiteHeader } from "@/components/site-header";
import { TikTokIcon } from "@/components/tiktok-icon";
import { proofs, proofsReady } from "@/lib/proofs";
import { services } from "@/lib/services";
import { contact } from "@/lib/contact";
import { destinations } from "@/lib/destinations";
import { opportunities } from "@/lib/opportunities";

const reasons = [
  { icon: BadgeDollarSign, title: "Affordable fees", copy: "A fair price for a full agent service, with no surprise costs along the way." },
  { icon: Handshake, title: "Guidance on your behalf", copy: "We prepare, submit, and follow up on your application so you don't have to chase anyone." },
  { icon: Building2, title: "Direct connections", copy: "We work directly with universities and companies, with no middle agents in between." },
  { icon: GraduationCap, title: "Scholarship know-how", copy: "Full tuition, fully funded, and partial scholarships in Italy, China, the Czech Republic, and more." },
  { icon: BadgeCheck, title: "Real visa results", copy: "Study, tourist, and business visas approved for our clients across Europe and Asia." },
  { icon: MessageCircle, title: "Always reachable", copy: "Ask anything on Telegram or by phone. New opportunities are posted on our channel first." },
];

const steps = [
  { icon: Search, title: "Find your opportunity", copy: "Browse by service and country, then compare what's included." },
  { icon: FileCheck2, title: "Check the requirements", copy: "See who can apply and which documents you need before you start." },
  { icon: Send, title: "Apply in minutes", copy: "Fill in the short form and send it to us on Telegram with one tap." },
  { icon: Sparkles, title: "We handle the rest", copy: "Yodhub reviews your profile and guides you all the way to your visa." },
];

export default function Home() {
  const latestVisa = proofs[0];
  const stats = [
    { value: "20+", label: "Destinations" },
    { value: String(services.length), label: "Services" },
    { value: `${opportunities.length}`, label: "Open opportunities" },
    ...(proofsReady ? [{ value: `${proofs.length}`, label: "Visas shown" }] : []),
  ];

  return (
    <main className="min-h-screen overflow-clip bg-[#f4f7fb] text-[#071c3c]">
      <section className="hero-shell relative min-h-[720px] overflow-hidden bg-[#061a3b] text-white">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="route-glow absolute -right-40 top-16 h-[500px] w-[500px] rounded-full" />
        <div className="route-glow absolute -left-60 bottom-0 h-[420px] w-[420px] rounded-full opacity-60" />

        <SiteHeader overlay />

        <div className="relative z-10 mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 pb-36 pt-14 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:pt-20">
          <div className="max-w-[690px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#f4b32b]" aria-hidden="true" />
              From Addis Ababa to 20+ destinations
            </div>
            <h1 className="text-balance text-[clamp(3rem,7vw,6.6rem)] font-black leading-[0.94] tracking-[-0.055em]">
              Your journey<br />starts <span className="gold-text">here.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#c9d6e8] sm:text-xl">
              Study, work, visit, or attend a conference abroad. An affordable agent service that handles all the guidance on your behalf.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/opportunities" className="shine inline-flex items-center justify-center gap-3 rounded-full bg-[#eda91b] px-7 py-4 font-bold text-[#071c3c] shadow-[0_12px_34px_rgba(237,169,27,.26)] transition hover:-translate-y-0.5 hover:bg-[#f8bd40]">
                Find an opportunity <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                <Send className="h-4 w-4 text-[#5cc4f5]" /> Talk to us on Telegram
              </a>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-3xl font-black tracking-[-0.03em] text-white">{value}</dd>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <TravelGlobe />
            {proofsReady && latestVisa && (
              <Link href="/visa-results" className="float-card absolute -left-2 top-[12%] hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#0b2752]/80 p-3 pr-5 shadow-2xl backdrop-blur-md sm:flex lg:-left-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16834d] text-white"><BadgeCheck className="h-5 w-5" /></span>
                <span><span className="block text-sm font-extrabold">Visa approved</span><span className="block text-xs text-white/65">{latestVisa.flag} {latestVisa.country} · {latestVisa.visa}</span></span>
              </Link>
            )}
            <Link href="/opportunities/italy-scholarship-2026" className="float-card float-card-delay absolute -right-2 bottom-[18%] hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#0b2752]/80 p-3 pr-5 shadow-2xl backdrop-blur-md sm:flex lg:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eda91b] text-[#071c3c]"><GraduationCap className="h-5 w-5" /></span>
              <span><span className="block text-sm font-extrabold">Full tuition scholarship</span><span className="block text-xs text-white/65">🇮🇹 Italy · Bachelor&apos;s &amp; Master&apos;s</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-20 mx-auto -mt-20 w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[1.6rem] border border-[#dce4ef] bg-white shadow-[0_20px_60px_rgba(8,35,76,.12)] md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, short, slug, destinations: places, icon: Icon }, index) => (
            <Link key={title} href={`/services/${slug}`} className={`group relative p-6 transition hover:bg-[#f8fbff] ${index > 0 ? "border-t border-[#e4eaf2] md:border-l md:border-t-0" : ""} ${index === 2 ? "md:border-l-0 lg:border-l" : ""}`}>
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#eda91b] to-[#0a4b91] transition duration-300 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a4b91] to-[#1f78c8] text-white shadow-[0_8px_20px_rgba(10,75,145,.3)] transition group-hover:-rotate-6"><Icon className="h-5 w-5" /></span>
                <ArrowRight className="h-5 w-5 text-[#98a7ba] transition group-hover:translate-x-1 group-hover:text-[#d9960d]" />
              </div>
              <h2 className="mt-5 text-lg font-extrabold">{title}</h2>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#64748b]">{short}</p>
              <p className="mt-3 text-lg leading-6 tracking-[0.15em]" aria-label="Destinations">{places.map((place) => place.split(" ")[0]).join("")}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#b77a00]">Explore service</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Destinations we cover" className="marquee mt-16 overflow-hidden py-2">
        <ul className="marquee-track gap-3">
          {[...destinations, ...destinations].map((place, index) => (
            <li key={`${place.country}-${index}`} aria-hidden={index >= destinations.length} className="flex shrink-0 items-center gap-3 rounded-full border border-[#dce4ef] bg-white px-5 py-3 font-bold text-[#17375d] shadow-sm">
              <span className="text-2xl">{place.flag}</span>{place.country}
            </li>
          ))}
        </ul>
      </section>

      <section id="opportunities" className="reveal mx-auto w-full max-w-[1240px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">Open now</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Choose where your next chapter begins.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#63758c]">Every listing shows what&apos;s included, who can apply, and the documents you need.</p>
        </div>
        <OpportunityBrowser limit={4} />
        <div className="mt-8 text-center"><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full border border-[#cdd8e5] bg-white px-6 py-3 font-extrabold text-[#0a4383] hover:bg-[#edf4fb]">See all opportunities <ArrowRight className="h-4 w-4" /></Link></div>
      </section>

      <section id="destinations" className="bg-white">
        <div className="reveal mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">Popular destinations</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Where will you go next?</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#63758c]">Study, work, and visit options across Europe, Asia, and the Middle East.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((place) => (
              <Link key={place.country} href={place.href} className={`shine group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${place.tint} p-5 text-white shadow-[0_14px_34px_rgba(8,35,76,.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(8,35,76,.22)]`}>
                <span className="absolute -right-4 -top-6 text-[7rem] leading-none opacity-25 transition duration-500 group-hover:scale-110 group-hover:opacity-35" aria-hidden="true">{place.flag}</span>
                <span className="text-4xl" aria-hidden="true">{place.flag}</span>
                <span>
                  <span className="block text-xl font-black tracking-[-0.02em] drop-shadow">{place.country}</span>
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {place.services.map((service) => <span key={service} className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold backdrop-blur">{service}</span>)}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {proofsReady && <section id="visa-results" className="border-t border-[#dce5ef] bg-[#f4f7fb]">
        <div className="reveal mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">Visa results</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Approved visas from our clients.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#63758c]">Study, tourist, and business visas for Italy, Greece, Türkiye, Russia, and China. Personal details are blurred to protect every client.</p>
          </div>
          <ProofGallery limit={3} />
          <div className="mt-8 text-center"><Link href="/visa-results" className="inline-flex items-center gap-2 rounded-full border border-[#cdd8e5] bg-white px-6 py-3 font-extrabold text-[#0a4383] hover:bg-[#edf4fb]">See all visa results <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>}

      <section id="why-yodhub" className="relative overflow-clip bg-[#071e42] py-24 text-white lg:py-32">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="route-glow absolute -right-40 -top-20 h-[460px] w-[460px] rounded-full" />
        <div className="reveal relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f1b233]">Why Yodhub</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">An agent that does the work for you.</h2>
            <p className="mt-6 text-lg leading-8 text-[#b9c9dc]">Affordable agent service, with all the guidance handled on your behalf.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="group rounded-[1.5rem] border border-white/10 bg-white/[.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#eda91b]/40 hover:bg-white/[.08]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5c45c] to-[#e39a0d] text-[#071e42] shadow-[0_10px_24px_rgba(237,169,27,.3)] transition group-hover:scale-110"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-[#aebfd3]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="reveal mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">How it works</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Four steps to your next journey.</h2>
        </div>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span className="absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-[repeating-linear-gradient(90deg,#e0a526_0_10px,transparent_10px_18px)] lg:block" aria-hidden="true" />
          {steps.map(({ icon: Icon, title, copy }, index) => (
            <li key={title} className="relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f4f7fb] bg-[#0a4b91] text-white shadow-[0_12px_28px_rgba(10,75,145,.3)]">
                <Icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#eda91b] text-xs font-black text-[#071e42]">{index + 1}</span>
              </span>
              <h3 className="mt-6 text-xl font-extrabold text-[#071e42]">{title}</h3>
              <p className="mx-auto mt-2 max-w-60 leading-7 text-[#60738a]">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="reveal relative mx-auto w-full max-w-[1160px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1b8cc2] via-[#229ed9] to-[#0a4b91] p-8 text-white shadow-[0_24px_70px_rgba(7,30,66,.2)] sm:p-12">
          <Send className="absolute -bottom-10 -right-6 h-64 w-64 -rotate-12 text-white/10" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#fff1c2]">Join the community</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">New opportunities land on Telegram first.</h2>
              <p className="mt-4 max-w-lg text-white/80">Follow the channel, ask questions in the group, message us directly, or follow us on TikTok.</p>
              <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-extrabold text-[#0a5f8c] transition hover:-translate-y-0.5">
                <Send className="h-5 w-5" /> Message {contact.telegram}
              </a>
              <a href={contact.tiktok.href} target="_blank" rel="noreferrer" className="ml-3 mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 font-extrabold text-white transition hover:bg-white/15">
                <TikTokIcon className="h-5 w-5" /> TikTok
              </a>
            </div>
            <ul className="grid gap-3">
              {contact.channels.map((channel) => (
                <li key={channel.href}>
                  <a href={channel.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20">
                    <span><span className="block font-extrabold">{channel.label}</span><span className="text-sm text-white/70">{channel.handle}</span></span>
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start justify-between gap-6 rounded-[2rem] border border-[#dce4ef] bg-white p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff3d6] text-[#b77900]"><ShieldCheck className="h-6 w-6" /></span>
            <div>
              <h2 className="text-2xl font-black tracking-[-0.02em]">Ready to take the next step?</h2>
              <p className="mt-1 text-[#63758c]">Pick an opportunity and apply in about three minutes.</p>
            </div>
          </div>
          <Link href="/opportunities" className="shine inline-flex shrink-0 items-center gap-3 rounded-full bg-[#071e42] px-7 py-4 font-extrabold text-white transition hover:-translate-y-0.5">
            Explore opportunities <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
