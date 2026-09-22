"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, CircleDashed, FileText, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TelegramHandoff } from "@/components/telegram-handoff";
import type { Opportunity } from "@/lib/opportunities";

const labels: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  birthDate: "Date of birth",
  city: "Current city",
  nationality: "Nationality",
  qualification: "Highest qualification",
  graduationYear: "Graduation year",
  english: "English level",
  startPeriod: "Preferred start",
  budget: "Budget readiness",
  motivation: "Why I'm interested",
};

export function ApplicationForm({ opportunity }: { opportunity: Opportunity }) {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = { ...answers };
    new FormData(event.currentTarget).forEach((value, key) => { next[key] = String(value); });
    setAnswers(next);
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (step === 4) {
    const message = [
      `Hello Yodhub Travel, I'd like to apply for: ${opportunity.title} (${opportunity.country})`,
      "",
      ...Object.entries(labels).filter(([key]) => answers[key]).map(([key, label]) => `${label}: ${answers[key]}`),
    ].join("\n");
    return (
      <div className="rounded-[2rem] border border-[#dbe6f0] bg-white p-6 shadow-[0_20px_60px_rgba(8,35,76,.08)] sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f7ef] text-[#16834d]"><CheckCircle2 className="h-7 w-7" /></span>
        <h1 className="mt-5 text-3xl font-black tracking-[-0.035em] text-[#071e42]">Last step: send it to Yodhub</h1>
        <p className="mt-3 max-w-xl leading-7 text-[#64768c]">Your application is ready. Send it to us on Telegram and we&apos;ll review it and reply with the next steps.</p>
        <div className="mt-7"><TelegramHandoff message={message} /></div>
        <button type="button" onClick={() => setStep(1)} className="mt-6 text-sm font-bold text-[#0a4383] underline">Edit my answers</button>
      </div>
    );
  }

  const field = "h-12 rounded-xl border-[#dbe4ee] px-4 font-normal";
  const select = "h-12 rounded-xl border border-[#dbe4ee] bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30";
  const saved = (key: string) => answers[key];

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#dbe6f0] bg-white p-6 shadow-[0_20px_60px_rgba(8,35,76,.08)] sm:p-9">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#a56d00]">Step {step} of 3</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#071e42]">{step === 1 ? "Tell us about yourself" : step === 2 ? "Your background and plans" : "Prepare your documents"}</h1>
        </div>
        <span className="hidden text-sm font-semibold text-[#70839a] sm:block">{step === 1 ? "Basic details" : step === 2 ? "Eligibility profile" : "Document checklist"}</span>
      </div>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e5ecf4]" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(step / 3 * 100)}>
        <div className="h-full rounded-full bg-[#e3a017] transition-all" style={{ width: `${step / 3 * 100}%` }} />
      </div>

      {step === 1 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">First name<Input required name="firstName" defaultValue={saved("firstName")} placeholder="Your first name" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Last name<Input required name="lastName" defaultValue={saved("lastName")} placeholder="Your last name" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Email address<Input type="email" name="email" defaultValue={saved("email")} placeholder="name@example.com (optional)" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Phone number<Input required type="tel" name="phone" defaultValue={saved("phone")} placeholder="+251 9…" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Date of birth<Input required type="date" name="birthDate" defaultValue={saved("birthDate")} className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Current city<Input required name="city" defaultValue={saved("city")} placeholder="Example: Addis Ababa" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Nationality<Input required name="nationality" defaultValue={saved("nationality")} placeholder="Your nationality" className={field} /></label>
        </div>
      ) : step === 2 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Highest qualification<Input required name="qualification" defaultValue={saved("qualification")} placeholder="Example: Grade 12, Diploma, BSc in Computer Science" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Graduation year<Input required name="graduationYear" defaultValue={saved("graduationYear")} placeholder="Example: 2025" className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">English level
            <select required name="english" defaultValue={saved("english") ?? ""} className={select}><option value="">Choose level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Test result available</option></select>
          </label>
          <label className="grid gap-2 text-sm font-bold">Preferred start period<Input required name="startPeriod" defaultValue={saved("startPeriod")} placeholder={opportunity.intake} className={field} /></label>
          <label className="grid gap-2 text-sm font-bold">Budget readiness
            <select required name="budget" defaultValue={saved("budget") ?? ""} className={select}><option value="">Choose readiness</option><option>Ready to discuss</option><option>Still planning</option><option>Need scholarship information</option></select>
          </label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">Why are you interested?<textarea required name="motivation" defaultValue={saved("motivation")} rows={4} placeholder="Briefly describe your goal" className="rounded-xl border border-[#dbe4ee] px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30" /></label>
        </div>
      ) : (
        <div className="mt-8">
          <div className="rounded-2xl border border-[#cfdae7] bg-[#f7f9fc] p-5 sm:p-7">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fb] text-[#0a4b91]"><ShieldCheck className="h-5 w-5" /></span><div><p className="font-extrabold">Get these ready, but don&apos;t send them yet</p><p className="mt-1 text-sm leading-6 text-[#6a7d93]">After we review your application, we&apos;ll tell you exactly how to send your documents safely.</p></div></div>
            <div className="mt-6 grid gap-3">
              {opportunity.requirements.map((requirement) => <div key={requirement} className="flex items-center justify-between gap-4 rounded-xl border border-[#dfe7f0] bg-white p-4"><span className="flex items-center gap-3 font-semibold"><FileText className="h-4 w-4 shrink-0 text-[#0a4b91]" />{requirement}</span><span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#eef3f8] px-3 py-1 text-xs font-bold text-[#667a91]"><CircleDashed className="h-3 w-3" /> To prepare</span></div>)}
            </div>
          </div>
          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-[#e1e8f0] p-4 text-sm leading-6">
            <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} className="mt-1 h-4 w-4 accent-[#0a4383]" />
            <span>I confirm that the information I provided is accurate.</span>
          </label>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-6">
        {step > 1 ? <button type="button" onClick={() => setStep(step - 1)} className="h-12 rounded-full px-6 font-bold transition hover:bg-[#edf2f7]">Back</button> : <span />}
        <button type="submit" disabled={step === 3 && !agreed} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#e3a017] px-7 font-black text-[#071e42] transition hover:bg-[#f0b12d] disabled:cursor-not-allowed disabled:opacity-50">
          {step < 3 ? "Continue" : "Finish application"}
        </button>
      </div>
    </form>
  );
}
