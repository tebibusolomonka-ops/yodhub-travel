import { InnerHero } from "@/components/inner-hero";
import { OpportunityBrowser } from "@/components/opportunity-browser";

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Open opportunities" title="Find the option that fits your plans." copy="Search the current mock listings by country, institution, or service. Open any listing to see its requirements and application journey." />
      <section id="opportunities" className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:py-24">
        <OpportunityBrowser />
      </section>
    </main>
  );
}
