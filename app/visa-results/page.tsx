import Link from "next/link";
import { ArrowRight, EyeOff, ShieldCheck } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { ProofGallery } from "@/components/proof-gallery";
import { notFound } from "next/navigation";
import { proofs, proofsReady } from "@/lib/proofs";
import { contact } from "@/lib/contact";

export default function VisaResultsPage() {
  if (!proofsReady) notFound();
  const countries = new Set(proofs.map((proof) => proof.country)).size;
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Visa results" title="Real visas for real clients." copy="A selection of study, tourist, and business visas our clients received with Yodhub's guidance.">
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
          <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">{proofs.length} approved visas</span>
          <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">{countries} countries</span>
        </div>
      </InnerHero>
      <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 flex items-start gap-4 rounded-2xl border border-[#d6e2ef] bg-white p-5 sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fb] text-[#0a4b91]"><ShieldCheck className="h-5 w-5" /></span>
          <div>
            <p className="font-extrabold">We protect our clients&apos; privacy</p>
            <p className="mt-1 text-sm leading-6 text-[#60748b]"><EyeOff className="mr-1 inline h-4 w-4 align-[-3px]" />Faces, names, passport and visa numbers, birth dates, and machine-readable codes are blurred on every visa shown here.</p>
            <p className="mt-2 text-sm leading-6 text-[#60748b]">Is one of these your visa and you&apos;d like it removed? Message <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="font-bold text-[#0a4383] underline">{contact.telegram}</a> and we&apos;ll take it down.</p>
          </div>
        </div>
        <ProofGallery />
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0a4b91] p-8 text-white sm:p-11 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-black">Your visa could be next.</h2><p className="mt-2 text-[#c4d5e8]">Browse the open study and work opportunities.</p></div>
          <Link href="/opportunities" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#08386f]">Browse opportunities <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
