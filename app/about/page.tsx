import Link from "next/link";
import { ArrowRight, Check, Compass, Eye, ShieldCheck } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="About Yodhub" title="Travel guidance built around clarity." copy="Yodhub Travel helps people understand international study, work, visit, and conference processes before they begin." />
      <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
        <div className="rounded-[2rem] bg-[#e6eef8] p-7 sm:p-10"><img src="/yodhub-logo.png" alt="Yodhub Travel — Explore, Discover, Experience" className="aspect-square w-full object-contain mix-blend-multiply" /></div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[.17em] text-[#b77900]">Our approach</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em]">Know what is required before you commit.</h2>
          <p className="mt-6 text-lg leading-8 text-[#5e728a]">The planned platform gives every opportunity its own eligibility information, requirements, deadline, and application form. Applicants can prepare properly, while the consultancy receives clearer and more complete enquiries.</p>
          <ul className="mt-8 space-y-4">
            {["Specific information for each opportunity", "A guided application instead of scattered messages", "Clear status updates throughout the future process"].map((item) => <li key={item} className="flex items-center gap-3 font-bold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0c8] text-[#9b6800]"><Check className="h-4 w-4" /></span>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-5 px-5 py-20 sm:px-8 md:grid-cols-3">
          {[{icon:Compass,title:"Direction",copy:"Help people identify the opportunity that matches their goal."},{icon:Eye,title:"Transparency",copy:"Show requirements, dates, and stages before an application begins."},{icon:ShieldCheck,title:"Responsible review",copy:"Keep document collection for the secure production platform, not this mock version."}].map(({icon:Icon,title,copy})=><article key={title} className="rounded-2xl border border-[#dce5ef] p-7"><Icon className="h-6 w-6 text-[#b77900]" /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-[#60748b]">{copy}</p></article>)}
        </div>
      </section>
      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8"><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0a4b91] p-8 text-white md:flex-row md:items-center sm:p-11"><div><h2 className="text-3xl font-black">Explore the current opportunities.</h2><p className="mt-2 text-[#c4d5e8]">Try the complete mock journey from listing to confirmation.</p></div><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#08386f]">Browse opportunities <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
