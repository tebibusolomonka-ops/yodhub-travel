import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Search, Send, UserRoundCheck } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

const steps = [
  { icon: Search, title: "Explore an opportunity", copy: "Start with a service or browse every open mock listing. Each listing shows its country, deadline, intake, and organization." },
  { icon: CheckCircle2, title: "Check the requirements", copy: "Read the eligibility information and future document checklist before you spend time completing the form." },
  { icon: FileText, title: "Complete the mock form", copy: "Add your basic details, background, interests, and readiness. This version keeps everything inside the demonstration." },
  { icon: Send, title: "Submit the demonstration", copy: "The site shows a mock reference number and review message. It does not send or store your information." },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="How it works" title="One clear application journey." copy="The website is designed to replace repeated inbox questions with a guided path that explains the opportunity before a consultant reviews an applicant." />
      <section className="mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-8 lg:py-28">
        <ol className="grid gap-6 md:grid-cols-2">
          {steps.map(({ icon: Icon, title, copy }, index) => <li key={title} className="rounded-[1.75rem] border border-[#dce5ef] bg-white p-7 sm:p-9"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f1fa] text-[#0a4b91]"><Icon className="h-5 w-5" /></span><span className="font-black text-[#c18107]">0{index + 1}</span></div><h2 className="mt-7 text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-[#60748b]">{copy}</p></li>)}
        </ol>
        <div className="mt-12 grid gap-8 rounded-[2rem] bg-[#071e42] p-8 text-white md:grid-cols-[1fr_auto] md:items-center sm:p-11">
          <div><UserRoundCheck className="h-7 w-7 text-[#e9ab2f]" /><h2 className="mt-5 text-3xl font-black">See the full flow yourself.</h2><p className="mt-3 max-w-2xl leading-7 text-[#b9c8db]">Choose a mock opportunity, read its requirements, and complete the placeholder application.</p></div>
          <Link href="/opportunities" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e9aa27] px-7 py-4 font-black text-[#071e42]">Start exploring <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
