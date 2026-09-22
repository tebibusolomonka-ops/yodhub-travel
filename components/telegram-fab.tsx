import { Send } from "lucide-react";
import { contact } from "@/lib/contact";

export function TelegramFab() {
  return (
    <a href={contact.telegramHref} target="_blank" rel="noreferrer" aria-label={`Chat with Yodhub on Telegram (${contact.telegram})`} className="telegram-fab group fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-[#229ed9] pl-4 pr-4 font-extrabold text-white shadow-[0_14px_34px_rgba(34,158,217,.45)] transition hover:bg-[#1b8cc2] sm:pr-5">
      <Send className="h-6 w-6 -translate-x-0.5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
