import { InnerHero } from "@/components/inner-hero";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Privacy" title="Your information stays in your hands." copy="How Yodhub Travel handles the information you share through this website." />
      <article className="mx-auto max-w-[850px] px-5 py-20 sm:px-8">
        {[["Forms", "This website has no database. What you type into a form stays on your device and is turned into a message. It only reaches Yodhub when you send that message to us yourself on Telegram."],["Documents", "The website never asks you to upload documents. After we review your application, we tell you which documents to send and how to send them."],["Visa results", "The client visas on this website have faces, names, passport and visa numbers, birth dates, and machine-readable codes blurred. If one is yours and you want it removed, message us and we'll take it down."],["Contact", "For any privacy question, call +251 973 743 277 or message @dadacavawoss on Telegram."]].map(([title,copy])=><section key={title} className="border-b border-[#dbe4ee] py-8 first:pt-0"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-lg leading-8 text-[#60748b]">{copy}</p></section>)}
      </article>
    </main>
  );
}
