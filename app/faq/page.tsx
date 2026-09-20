import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

const faqs = [
  ["Can I submit real documents now?", "No. This is a mock website. The document area only shows placeholders and the site does not accept or store files."],
  ["Does submitting a mock form create a real application?", "No. It demonstrates the future user experience and shows a sample reference number only."],
  ["How will Telegram work later?", "A post will contain a direct Mini App link that opens the exact opportunity. The applicant can review the requirements and continue the same application flow inside Telegram."],
  ["Can requirements be different for every opportunity?", "Yes. Each university, work pathway, visitor service, or conference can have its own checklist, deadline, and application questions."],
  ["What will happen in the production version?", "The production version can add secure accounts, protected document storage, admin review, notifications, status tracking, and Telegram integration."],
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Frequently asked questions" title="Answers before you begin." copy="These answers explain the current prototype and the application experience planned for the production platform." />
      <section className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="space-y-4">{faqs.map(([question, answer], index) => <details key={question} className="group rounded-2xl border border-[#dce5ef] bg-white p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><span>{question}</span><span className="text-[#b77900] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-7 text-[#60748b]">{answer}</p></details>)}</div>
        <div className="mt-10 rounded-2xl bg-[#e9f1fa] p-7"><h2 className="text-xl font-black">Still exploring?</h2><p className="mt-2 text-[#60748b]">Browse the mock opportunities or try the enquiry form.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full bg-[#0a4383] px-5 py-3 font-bold text-white">Opportunities <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#b9c9dc] bg-white px-5 py-3 font-bold text-[#0a4383]">Contact page</Link></div></div>
      </section>
    </main>
  );
}
