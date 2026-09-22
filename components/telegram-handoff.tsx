"use client";

import { useState } from "react";
import { Check, Copy, Send } from "lucide-react";
import { contact } from "@/lib/contact";

// The site has no backend, so a form's answers are copied to the clipboard and the
// applicant pastes them into a Telegram chat with Yodhub. Nothing is stored or put in a URL.
export function TelegramHandoff({ message }: { message: string }) {
  const [copied, setCopied] = useState(false);

  async function copyAndOpen() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(contact.telegramHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="text-left">
      <ol className="space-y-2 text-sm leading-6 text-[#52677e]">
        <li><strong className="text-[#071e42]">1.</strong> Press the button below. Your answers are copied and Telegram opens a chat with {contact.telegram}.</li>
        <li><strong className="text-[#071e42]">2.</strong> Paste the message into the chat and send it.</li>
      </ol>
      <button type="button" onClick={copyAndOpen} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#229ed9] px-7 font-black text-white transition hover:bg-[#1b8cc2] sm:w-auto">
        {copied ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />} {copied ? "Copied. Paste it in Telegram" : "Copy & open Telegram"}
      </button>
      <label className="mt-5 grid gap-2 text-xs font-bold uppercase tracking-wider text-[#7a8ca1]">
        Your message
        <textarea readOnly value={message} rows={Math.min(12, message.split("\n").length + 1)} onFocus={(event) => event.currentTarget.select()} className="rounded-xl border border-[#dbe4ee] bg-[#f7f9fc] p-4 font-mono text-sm normal-case tracking-normal text-[#243b57]" />
      </label>
      <p className="mt-3 text-xs leading-5 text-[#7a8ca1]">If the copy doesn&apos;t work, select the text above and copy it yourself. Or call {contact.phone}.</p>
    </div>
  );
}
