import Link from "next/link";
import { ArrowRight, Check, FileCheck2, MapPin, MessageCircle, Plane, Send, ShieldCheck, Sparkles } from "lucide-react";
import { OpportunityBrowser } from "@/components/opportunity-browser";
import { ProofGallery } from "@/components/proof-gallery";
import { proofsReady } from "@/lib/proofs";
import { TravelGlobe } from "@/components/travel-globe";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/lib/services";
import { contact } from "@/lib/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#071c3c]">
      <section className="hero-shell relative min-h-[720px] overflow-hidden bg-[#061a3b] text-white">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="route-glow absolute -right-40 top-16 h-[500px] w-[500px] rounded-full" />

        <SiteHeader overlay />

        <div className="relative z-10 mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 pb-36 pt-14 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:pt-20">
          <div className="max-w-[690px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#f4b32b]" aria-hidden="true" />
              From Ethiopia to opportunities worldwide
            </div>
            <h1 className="text-balance text-[clamp(3rem,7vw,6.6rem)] font-black leading-[0.94] tracking-[-0.055em]">
              Your journey<br />starts <span className="gold-text">here.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#c9d6e8] sm:text-xl">
              Study, work, visit, or attend a conference abroad. An affordable agent service that handles all the guidance on your behalf.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/opportunities" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#eda91b] px-7 py-4 font-bold text-[#071c3c] shadow-[0_12px_34px_rgba(237,169,27,.26)] transition hover:-translate-y-0.5 hover:bg-[#f8bd40]">
                Find an opportunity <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                See how it works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#f4b32b]" /> Affordable service</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#f4b32b]" /> Guidance on your behalf</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#f4b32b]" /> Real visa results</span>
            </div>
          </div>

          <TravelGlobe />
        </div>
      </section>

      <section id="services" className="relative z-20 mx-auto -mt-20 w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[1.6rem] border border-[#dce4ef] bg-white shadow-[0_20px_60px_rgba(8,35,76,.12)] md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, short, slug, destinations, icon: Icon }, index) => (
            <Link key={title} href={`/services/${slug}`} className={`group p-6 transition hover:bg-[#f8fbff] ${index > 0 ? "border-t border-[#e4eaf2] md:border-l md:border-t-0" : ""} ${index === 2 ? "md:border-l-0 lg:border-l" : ""}`}>
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2fb] text-[#0a4b91]"><Icon className="h-5 w-5" /></span>
                <ArrowRight className="h-5 w-5 text-[#98a7ba] transition group-hover:translate-x-1 group-hover:text-[#d9960d]" />
              </div>
              <h2 className="mt-5 text-lg font-extrabold">{title}</h2>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#64748b]">{short}</p>
              <p className="mt-3 text-sm leading-6" aria-label="Destinations">{destinations.map((place) => place.split(" ")[0]).join(" ")}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#b77a00]">Explore service</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="opportunities" className="mx-auto w-full max-w-[1240px] px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">Open now</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Choose where your next chapter begins.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#63758c]">Every listing shows the real checklist before you start. Save time, prepare properly, and submit when you are ready.</p>
        </div>
        <OpportunityBrowser limit={4} />
        <div className="mt-8 text-center"><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full border border-[#cdd8e5] bg-white px-6 py-3 font-extrabold text-[#0a4383] hover:bg-[#edf4fb]">See all opportunities <ArrowRight className="h-4 w-4" /></Link></div>
      </section>

      {proofsReady && <section id="visa-results" className="border-t border-[#dce5ef] bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
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

      <section id="process" className="bg-[#071e42] py-24 text-white lg:py-32">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f1b233]">How it works</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">A clear path from interest to application.</h2>
              <p className="mt-6 text-lg leading-8 text-[#b9c9dc]">No long inbox conversations just to discover what you need. Start with the opportunity and follow one guided process.</p>
              <div className="mt-9 rounded-2xl border border-white/12 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#f1b233]" />
                  <p className="font-bold">Join us on Telegram</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">New opportunities are posted on the channel first.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {contact.channels.map((channel) => <a key={channel.href} href={channel.href} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20">{channel.label}</a>)}
                </div>
              </div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Sparkles, step: "01", title: "Find your opportunity", copy: "Browse by service and country, then compare the details that matter." },
                { icon: FileCheck2, step: "02", title: "Check your requirements", copy: "See eligibility, documents, fees, and deadlines before applying." },
                { icon: Send, step: "03", title: "Complete your application", copy: "Add your details and upload the required documents in one place." },
                { icon: Check, step: "04", title: "Track the review", copy: "Receive status updates and respond if the consultant requests a change." },
              ].map(({ icon: Icon, step, title, copy }) => (
                <li key={step} className="rounded-[1.5rem] border border-white/12 bg-white/[.055] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9a617] text-[#071e42]"><Icon className="h-5 w-5" /></span>
                    <span className="text-sm font-black text-white/30">{step}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#aebfd3]">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:px-10 lg:py-32">
        <div className="rounded-[2rem] bg-[#e8f0fa] p-7 sm:p-10">
          <img src="/yodhub-logo.png" alt="Yodhub Travel logo" className="mx-auto aspect-square w-full max-w-[430px] object-contain mix-blend-multiply" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b77900]">Why Yodhub</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#071e42] sm:text-5xl">Clarity before commitment.</h2>
          <p className="mt-6 text-lg leading-8 text-[#60738a]">Yodhub Travel helps applicants understand the journey before they begin. You see the opportunity, requirements, expected steps, and deadline in one place.</p>
          <ul className="mt-8 grid gap-4 text-[#17375d] sm:grid-cols-2">
            {["Opportunity-specific checklists", "Guided document preparation", "A single application record", "Direct review by the consultancy"].map((item) => (
              <li key={item} className="flex items-start gap-3 font-semibold"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f3b32d] text-[#071e42]"><Check className="h-3.5 w-3.5" /></span>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#0a4b91] p-8 text-white shadow-[0_24px_70px_rgba(7,30,66,.18)] sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f5c45c]">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Find an opportunity that fits your next move.</h2>
          </div>
          <Link href="/opportunities" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-extrabold text-[#08386f] transition hover:-translate-y-0.5">
            Explore now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
