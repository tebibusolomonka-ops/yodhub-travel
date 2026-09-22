import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ClipboardCheck } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { getService, services } from "@/lib/services";
import { opportunities } from "@/lib/opportunities";
import { contact } from "@/lib/contact";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const serviceType = {
  "study-abroad": "Study abroad",
  "work-abroad": "Work abroad",
  "visit-tourism": "Visit & tourism",
  "conferences": "Conferences",
} as const;

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;
  const matches = opportunities.filter((item) => item.type === serviceType[slug as keyof typeof serviceType]);

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow={service.eyebrow} title={service.title} copy={service.intro}>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Destinations">
          {service.destinations.map((place) => <li key={place} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-bold">{place}</li>)}
        </ul>
        <Link href="#open-opportunities" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e9aa27] px-6 py-3 font-extrabold text-[#071e42]">See open opportunities <ArrowRight className="h-4 w-4" /></Link>
      </InnerHero>
      <section className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:py-28">
        <div>
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6eff9] text-[#0a4b91]"><Icon className="h-7 w-7" /></span>
          <h2 className="mt-7 text-3xl font-black tracking-[-.035em]">What this service covers</h2>
          <p className="mt-5 text-lg leading-8 text-[#5e728a]">{service.description}</p>
          <ul className="mt-7 space-y-4">
            {service.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 font-bold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0c8] text-[#9b6800]"><Check className="h-4 w-4" /></span>{benefit}</li>)}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-[#071e42] p-7 text-white sm:p-10">
          <ClipboardCheck className="h-7 w-7 text-[#e9aa27]" />
          <h2 className="mt-5 text-3xl font-black tracking-[-.035em]">How it works</h2>
          <ol className="mt-8 space-y-4">
            {service.journey.map((step, index) => <li key={step} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.055] p-4"><span className="font-black text-[#edb440]">0{index + 1}</span><span className="font-semibold text-[#d0dced]">{step}</span></li>)}
          </ol>
          <p className="mt-6 text-sm leading-6 text-white/55">Affordable agent service. We handle all the guidance on your behalf.</p>
        </div>
      </section>
      <section id="open-opportunities" className="border-t border-[#dce5ef] bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="text-sm font-extrabold uppercase tracking-[.17em] text-[#b77900]">Available now</p><h2 className="mt-3 text-3xl font-black tracking-[-.035em] sm:text-4xl">Open {service.title.toLowerCase()} opportunities</h2></div>
            <Link href="/opportunities" className="font-extrabold text-[#0a4383]">Browse every opportunity →</Link>
          </div>
          {matches.length ? <div className="mt-9 grid gap-5 md:grid-cols-2">{matches.map((item) => <Link key={item.slug} href={`/opportunities/${item.slug}`} className="group rounded-2xl border border-[#dce5ef] bg-[#f7f9fc] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"><p className="text-sm font-bold text-[#a56d00]">{item.flag} {item.country}</p><h3 className="mt-3 text-2xl font-black">{item.title}</h3><p className="mt-2 text-sm text-[#667a91]">{item.institution}</p><span className="mt-5 inline-flex items-center gap-2 font-extrabold text-[#0a4383]">View requirements <ArrowRight className="h-4 w-4" /></span></Link>)}</div> : <div className="mt-9 rounded-2xl border border-dashed border-[#cbd8e6] bg-[#f7f9fc] p-8"><h3 className="font-black">New opportunities are posted on Telegram first.</h3><p className="mt-2 text-[#63768c]">Join the <a href={contact.channels[0].href} target="_blank" rel="noreferrer" className="font-bold text-[#0a4383] underline">Yodhub Travel channel</a> or message <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="font-bold text-[#0a4383] underline">{contact.telegram}</a> to ask about {service.title.toLowerCase()} in any of the destinations above.</p></div>}
        </div>
      </section>
    </main>
  );
}
