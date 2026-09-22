"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TelegramHandoff } from "@/components/telegram-handoff";

export function ContactForm() {
  const [message, setMessage] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage([
      "Hello Yodhub Travel, I have an enquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n"));
  }

  if (message) {
    return (
      <div className="rounded-[1.75rem] border border-[#dce5ef] bg-white p-6 sm:p-9">
        <h2 className="text-2xl font-black">Almost done. Send it on Telegram</h2>
        <div className="mt-5"><TelegramHandoff message={message} /></div>
        <button type="button" onClick={() => setMessage(null)} className="mt-6 text-sm font-bold text-[#0a4383] underline">Edit my enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[1.75rem] border border-[#dce5ef] bg-white p-6 shadow-[0_18px_50px_rgba(8,35,76,.07)] sm:p-9">
      <h2 className="text-2xl font-black">Send us an enquiry</h2>
      <p className="mt-2 text-sm leading-6 text-[#677a90]">Fill this in and we&apos;ll turn it into a Telegram message for you to send.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">Full name<Input required name="name" placeholder="Your full name" className="h-12 rounded-xl px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-bold">Phone number<Input required name="phone" type="tel" placeholder="+251 9…" className="h-12 rounded-xl px-4 font-normal" /></label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">What do you need help with?
          <select required name="service" className="h-12 rounded-xl border border-[#e1e6eb] bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30">
            <option value="">Choose a service</option><option>Study abroad</option><option>Work abroad</option><option>Visit & tourism</option><option>Conferences</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold sm:col-span-2">Message<textarea required name="message" placeholder="Tell us briefly about your plan" rows={5} className="rounded-xl border border-[#e1e6eb] px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#d9a020]/30" /></label>
      </div>
      <button type="submit" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#e4a21a] px-7 font-black text-[#071e42] hover:bg-[#efb435]">Continue <Send className="h-4 w-4" /></button>
    </form>
  );
}
