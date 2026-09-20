"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, CircleDashed, FileText, LoaderCircle, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Opportunity } from "@/lib/opportunities";

export function ApplicationForm({ opportunity }: { opportunity: Opportunity }) {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setStep(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  }

  if (step === 4) {
    return (
      <div className="rounded-[2rem] border border-[#dbe6f0] bg-white p-8 text-center shadow-[0_20px_60px_rgba(8,35,76,.08)] sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7ef] text-[#16834d]"><CheckCircle2 className="h-8 w-8" /></span>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-[#a56d00]">Application received</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#071e42]">Your mock application is complete.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#64768c]">Reference <strong className="text-[#071e42]">YH-2027-0142</strong>. In the real platform, Yodhub will review your answers and contact you if anything needs attention.</p>
        <a href="/" className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#0a4383] px-7 font-bold text-white transition hover:bg-[#0c529b]">Return home</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#dbe6f0] bg-white p-6 shadow-[0_20px_60px_rgba(8,35,76,.08)] sm:p-9">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#a56d00]">Step {step} of 3</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#071e42]">{step === 1 ? "Tell us about yourself" : step === 2 ? "Your background and plans" : "Review the future checklist"}</h1>
        </div>
        <span className="hidden text-sm font-semibold text-[#70839a] sm:block">{step === 1 ? "Basic details" : step === 2 ? "Eligibility profile" : "Placeholder documents"}</span>
      </div>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e5ecf4]" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(step / 3 * 100)}>
        <div className="h-full rounded-full bg-[#e3a017] transition-all" style={{ width: `${step / 3 * 100}%` }} />
      </div>

      {step === 1 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">First name<Input required name="firstName" placeholder="Your first name" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Last name<Input required name="lastName" placeholder="Your last name" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Email address<Input required type="email" name="email" placeholder="name@example.com" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Phone number<Input required type="tel" name="phone" placeholder="+251 9…" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Date of birth<Input required type="date" name="birthDate" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Current city<Input required name="city" placeholder="Example: Addis Ababa" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Nationality<Input required name="nationality" placeholder="Your nationality" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
        </div>
      ) : step === 2 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Highest qualification<Input required name="qualification" placeholder="Example: BSc in Computer Science" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Graduation year<Input required name="graduationYear" placeholder="Example: 2025" className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">English level
            <select required className="h-12 rounded-xl border border-[#dbe4ee] bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30"><option value="">Choose level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Test result available</option></select>
          </label>
          <label className="grid gap-2 text-sm font-bold">Preferred start period<Input required name="startPeriod" placeholder={opportunity.intake} className="h-12 rounded-xl border-[#dbe4ee] px-4 font-normal" /></label>
          <label className="grid gap-2 text-sm font-bold">Budget readiness
            <select required className="h-12 rounded-xl border border-[#dbe4ee] bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30"><option value="">Choose readiness</option><option>Ready to discuss</option><option>Still planning</option><option>Need scholarship information</option></select>
          </label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Why are you interested?<textarea required rows={4} placeholder="Briefly describe your goal" className="rounded-xl border border-[#dbe4ee] px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30" /></label>
        </div>
      ) : (
        <div className="mt-8">
          <div className="rounded-2xl border border-[#cfdae7] bg-[#f7f9fc] p-5 sm:p-7">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fb] text-[#0a4b91]"><ShieldCheck className="h-5 w-5" /></span><div><p className="font-extrabold">Document upload is intentionally disabled</p><p className="mt-1 text-sm leading-6 text-[#6a7d93]">These rows show what the production application may request. No file picker is available and nothing can be uploaded.</p></div></div>
            <div className="mt-6 grid gap-3">
              {opportunity.requirements.map((requirement) => <div key={requirement} className="flex items-center justify-between gap-4 rounded-xl border border-[#dfe7f0] bg-white p-4"><span className="flex items-center gap-3 font-semibold"><FileText className="h-4 w-4 text-[#0a4b91]" />{requirement}</span><span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#eef3f8] px-3 py-1 text-xs font-bold text-[#667a91]"><CircleDashed className="h-3 w-3" /> Placeholder</span></div>)}
            </div>
          </div>
          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-[#e1e8f0] p-4 text-sm leading-6">
            <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} className="mt-1 h-4 w-4 accent-[#0a4383]" />
            <span>I confirm that the information provided is accurate and I understand this is a mock application.</span>
          </label>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-6">
        {step > 1 ? <button type="button" onClick={() => setStep(step - 1)} className="h-12 rounded-full px-6 font-bold transition hover:bg-[#edf2f7]">Back</button> : <span />}
        <button type="submit" disabled={(step === 3 && !agreed) || submitting} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#e3a017] px-7 font-black text-[#071e42] transition hover:bg-[#f0b12d] disabled:cursor-not-allowed disabled:opacity-50">
          {submitting ? <><LoaderCircle className="animate-spin" /> Completing</> : step < 3 ? "Continue" : "Complete mock application"}
        </button>
      </div>
    </form>
  );
}
