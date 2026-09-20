import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPin, WalletCards } from "lucide-react";
import { getOpportunity, opportunities } from "@/lib/opportunities";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return opportunities.map((item) => ({ slug: item.slug }));
}

export default async function OpportunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getOpportunity(slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <section className="bg-[#071e42] pb-28 text-white">
        <SiteHeader overlay />
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <Link href="/opportunities" className="mb-7 mt-10 inline-flex items-center gap-2 text-sm font-bold text-white/65 hover:text-white"><ArrowLeft className="h-4 w-4" /> All opportunities</Link>
          <div className="flex items-center gap-3 text-sm font-bold text-[#e9b13c]"><span className="text-3xl">{item.flag}</span>{item.type}</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-6xl">{item.title}</h1>
          <p className="mt-4 text-lg text-[#b7c8dc]">{item.institution} · {item.country}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 pb-24 sm:px-8 lg:-mt-16 lg:grid-cols-[1fr_350px]">
        <article className="rounded-[2rem] border border-[#dde6f0] bg-white p-6 shadow-[0_18px_50px_rgba(8,35,76,.08)] sm:p-10">
          <div className="grid gap-4 border-b border-[#e6ecf3] pb-8 sm:grid-cols-3">
            <div className="rounded-xl bg-[#f3f7fb] p-4"><CalendarDays className="h-5 w-5 text-[#bd7c00]" /><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#788ba1]">Deadline</p><p className="mt-1 font-extrabold">{item.deadline}</p></div>
            <div className="rounded-xl bg-[#f3f7fb] p-4"><Clock3 className="h-5 w-5 text-[#bd7c00]" /><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#788ba1]">Start</p><p className="mt-1 font-extrabold">{item.intake}</p></div>
            <div className="rounded-xl bg-[#f3f7fb] p-4"><MapPin className="h-5 w-5 text-[#bd7c00]" /><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#788ba1]">Location</p><p className="mt-1 font-extrabold">{item.city}</p></div>
          </div>

          <section className="pt-9">
            <h2 className="text-2xl font-black">About this opportunity</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e728a]">{item.description}</p>
          </section>

          <section className="pt-10">
            <h2 className="text-2xl font-black">What you need</h2>
            <p className="mt-2 text-[#687b91]">Prepare these items before you submit your application.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.requirements.map((requirement) => <li key={requirement} className="flex items-start gap-3 rounded-xl border border-[#e2e9f1] p-4 font-semibold"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff1ca] text-[#9b6800]"><Check className="h-3.5 w-3.5" /></span>{requirement}</li>)}
            </ul>
          </section>

          <section className="pt-10">
            <h2 className="text-2xl font-black">Application journey</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.steps.map((step, index) => <li key={step} className="flex gap-4 rounded-xl bg-[#f3f7fb] p-4"><span className="font-black text-[#c28208]">0{index + 1}</span><span className="font-semibold">{step}</span></li>)}
            </ol>
          </section>
        </article>

        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <div className="rounded-[1.75rem] bg-[#0a4383] p-6 text-white shadow-[0_20px_55px_rgba(6,35,75,.22)]">
            <p className="text-sm font-bold text-[#bcd0e6]">Application overview</p>
            <div className="mt-5 space-y-4 border-y border-white/15 py-5">
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-2 text-white/70"><Clock3 className="h-4 w-4" /> Duration</span><strong>{item.duration}</strong></div>
              <div className="flex items-center justify-between gap-4"><span className="flex items-center gap-2 text-white/70"><WalletCards className="h-4 w-4" /> Fee</span><strong className="text-right">{item.fee}</strong></div>
            </div>
            <Link href={`/apply/${item.slug}`} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#edaa1d] px-6 py-4 font-black text-[#071e42] transition hover:bg-[#f7bd43]">Start application <ArrowRight className="h-4 w-4" /></Link>
            <p className="mt-4 text-center text-xs leading-5 text-white/55">Mock application only. No documents or personal information are stored.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
