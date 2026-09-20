import { InnerHero } from "@/components/inner-hero";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Privacy in this prototype" title="No personal data or documents are collected." copy="This page describes the behavior of the current mock website, before a production privacy policy is prepared." />
      <article className="mx-auto max-w-[850px] px-5 py-20 sm:px-8">
        {[["Mock forms", "Information entered into the demonstration forms stays in the page while you use it. Submitting shows a sample confirmation and does not create a real application."],["Document placeholders", "The application shows the documents that may be required later, but there is no file upload control and no document storage."],["Future production platform", "Before accepting real applications, Yodhub will need approved privacy terms, secure access, retention rules, and protected document storage."],["Contact details", "The email address currently shown on the website is a placeholder and should be replaced with the company’s verified contact information."]].map(([title,copy])=><section key={title} className="border-b border-[#dbe4ee] py-8 first:pt-0"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-lg leading-8 text-[#60748b]">{copy}</p></section>)}
      </article>
    </main>
  );
}
