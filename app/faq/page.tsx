import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

const faqs = [
  ["How do I apply?", "Open an opportunity, check the requirements, and complete the short form. At the end, your answers are copied into a message that you send to Yodhub on Telegram."],
  ["When do I send my documents?", "Only after we review your application. Get the documents on the checklist ready, and we'll tell you how to send them."],
  ["Which countries do you cover?", "Study: Italy, China, India, Dubai, Austria, Russia, and Turkey. Work: Russia, Belarus, Serbia, Albania, and Turkey. Visit: Europe, China, Turkey, and Thailand. Conferences: anywhere in the world, whenever one is available."],
  ["Is your service expensive?", "No. We are an affordable agent service, and we handle all the guidance on your behalf."],
  ["Can you guarantee my visa?", "No agent can. The embassy makes the final decision. We make sure your application and documents are as strong as possible."],
  ["Where can I see new opportunities?", "New opportunities are posted first on our Telegram channel, @yodhubtravel. Italy applicants also have their own group, @ethitalya."],
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Frequently asked questions" title="Answers before you begin." copy="Quick answers about applying with Yodhub Travel." />
      <section className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="space-y-4">{faqs.map(([question, answer], index) => <details key={question} className="group rounded-2xl border border-[#dce5ef] bg-white p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><span>{question}</span><span className="text-[#b77900] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-7 text-[#60748b]">{answer}</p></details>)}</div>
        <div className="mt-10 rounded-2xl bg-[#e9f1fa] p-7"><h2 className="text-xl font-black">Still exploring?</h2><p className="mt-2 text-[#60748b]">Browse the open opportunities or send us an enquiry.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full bg-[#0a4383] px-5 py-3 font-bold text-white">Opportunities <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#b9c9dc] bg-white px-5 py-3 font-bold text-[#0a4383]">Contact page</Link></div></div>
      </section>
    </main>
  );
}
