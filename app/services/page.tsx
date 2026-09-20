import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Our services" title="Choose the journey you want to begin." copy="Each service has its own opportunities, requirements, and application path. Start with the category that matches your goal." />
      <section className="mx-auto grid w-full max-w-[1240px] gap-6 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-10 lg:py-28">
        {services.map(({ slug, title, short, intro, benefits, icon: Icon }, index) => (
          <article key={slug} className="group rounded-[2rem] border border-[#dbe5ef] bg-white p-7 shadow-[0_16px_50px_rgba(8,35,76,.06)] sm:p-9">
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf2fb] text-[#0a4b91]"><Icon className="h-6 w-6" /></span>
              <span className="text-sm font-black text-[#b77900]">0{index + 1}</span>
            </div>
            <h2 className="mt-7 text-3xl font-black tracking-[-.035em]">{title}</h2>
            <p className="mt-2 font-semibold text-[#6a7d93]">{short}</p>
            <p className="mt-5 leading-7 text-[#5c7189]">{intro}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => <li key={item} className="flex items-start gap-2 text-sm font-semibold text-[#294967]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#bd7d00]" />{item}</li>)}
            </ul>
            <Link href={`/services/${slug}`} className="mt-8 inline-flex items-center gap-2 font-extrabold text-[#0a4383]">View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
          </article>
        ))}
      </section>
    </main>
  );
}
