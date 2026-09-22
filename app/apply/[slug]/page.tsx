import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ApplicationForm } from "@/components/application-form";
import { getOpportunity, opportunities } from "@/lib/opportunities";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return opportunities.map((item) => ({ slug: item.slug }));
}

export default async function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getOpportunity(slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[#f4f7fb] pb-20">
      <SiteHeader />
      <div className="mx-auto grid max-w-[1120px] gap-8 px-5 pt-10 sm:px-8 lg:grid-cols-[300px_1fr] lg:pt-14">
        <aside className="lg:pt-5">
          <Link href={`/opportunities/${item.slug}`} className="mb-6 flex items-center gap-2 text-sm font-bold text-[#5f738a] hover:text-[#071e42]"><ArrowLeft className="h-4 w-4" /> Opportunity details</Link>
          <span className="text-3xl">{item.flag}</span>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-[#ac7200]">{item.type}</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.025em] text-[#071e42]">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[#65788e]">{item.institution}<br />{item.country}</p>
          <div className="mt-6 rounded-xl bg-[#e8f0fa] p-4 text-sm leading-6 text-[#52677e]">Your answers stay on your device until you send them to Yodhub on Telegram. Don&apos;t send documents until we ask for them.</div>
        </aside>
        <ApplicationForm opportunity={item} />
      </div>
    </main>
  );
}
