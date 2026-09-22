import Link from "next/link";
import { ArrowRight, Check, Compass, Eye, MapPin, ShieldCheck } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { destinations } from "@/lib/destinations";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="About Yodhub" title="Affordable travel guidance, handled for you." copy="Yodhub Travel is an Addis Ababa agent for study, work, visit, and conference travel. We handle all the guidance on your behalf, at a fair price." />
      <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0a4b91] to-[#061a3b] p-7 text-white sm:p-10">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <p className="flex items-center gap-2 text-sm font-bold text-[#f5c45c]"><MapPin className="h-4 w-4" /> Based in Addis Ababa</p>
            <p className="mt-3 text-3xl font-black tracking-[-0.03em]">Helping people reach {destinations.length} countries and counting.</p>
            <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {destinations.map((place) => <li key={place.country} className="flex flex-col items-center gap-1 rounded-2xl bg-white/[.07] p-3 text-center transition hover:bg-white/15"><span className="text-3xl" aria-hidden="true">{place.flag}</span><span className="text-xs font-bold text-white/80">{place.country.replace(" (Schengen)", "")}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[.17em] text-[#b77900]">Our approach</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em]">Know what is required before you commit.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5e728a]">Every opportunity shows who can apply, what&apos;s included, and which documents you need. You prepare properly, and we take care of the applications, appointments, and visa process on your behalf.</p>
          <ul className="mt-8 space-y-4">
            {["Study in Italy, China, India, Dubai, Austria, Russia, and Turkey", "Work in Russia, Belarus, Serbia, Albania, and Turkey", "Visit Europe, China, Turkey, and Thailand", "Conferences all across the world"].map((item) => <li key={item} className="flex items-center gap-3 font-bold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0c8] text-[#9b6800]"><Check className="h-4 w-4" /></span>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-5 px-5 py-20 sm:px-8 md:grid-cols-3">
          {[{icon:Compass,title:"Direction",copy:"Help people identify the opportunity that matches their goal."},{icon:Eye,title:"Transparency",copy:"Show requirements, dates, and stages before an application begins."},{icon:ShieldCheck,title:"Privacy",copy:"Client visas we show are blurred, and we only ask for documents when your application needs them."}].map(({icon:Icon,title,copy})=><article key={title} className="rounded-2xl border border-[#dce5ef] p-7"><Icon className="h-6 w-6 text-[#b77900]" /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-[#60748b]">{copy}</p></article>)}
        </div>
      </section>
      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8"><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0a4b91] p-8 text-white md:flex-row md:items-center sm:p-11"><div><h2 className="text-3xl font-black">Explore the current opportunities.</h2><p className="mt-2 text-[#c4d5e8]">Pick one, check the requirements, and apply in a few minutes.</p></div><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#08386f]">Browse opportunities <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
