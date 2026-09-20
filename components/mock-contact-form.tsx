"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MockContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) return <div className="rounded-[1.75rem] border border-[#d8e6df] bg-white p-9 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-[#16834d]" /><h2 className="mt-5 text-2xl font-black">Mock message completed</h2><p className="mt-3 leading-7 text-[#62758b]">This demonstration did not send or store your message. The production website will connect this step to Yodhub’s support workflow.</p><button onClick={() => setSent(false)} className="mt-6 rounded-full bg-[#0a4383] px-6 py-3 font-bold text-white">Try again</button></div>;
  return (
    <form onSubmit={submit} className="rounded-[1.75rem] border border-[#dce5ef] bg-white p-6 shadow-[0_18px_50px_rgba(8,35,76,.07)] sm:p-9">
      <h2 className="text-2xl font-black">Send a mock enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-[#677a90]">Fields are for demonstration only. Nothing is transmitted or saved.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">Full name<Input required placeholder="Your full name" className="h-12 rounded-xl px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-bold">Phone number<Input required placeholder="+251 9…" className="h-12 rounded-xl px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">Email address<Input required type="email" placeholder="name@example.com" className="h-12 rounded-xl px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">What do you need help with?
          <select required className="h-12 rounded-xl border border-[#e1e6eb] bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30">
            <option value="">Choose a service</option><option>Study abroad</option><option>Work abroad</option><option>Visit & tourism</option><option>Conferences</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">Message<textarea required placeholder="Tell us briefly about your plan" rows={5} className="rounded-xl border border-[#e1e6eb] px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30" /></label>
      </div>
      <button type="submit" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#e4a21a] px-7 font-black text-[#071e42] hover:bg-[#efb435]">Complete mock enquiry <Send className="h-4 w-4" /></button>
    </form>
  );
}
