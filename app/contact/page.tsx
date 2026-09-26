import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { contact } from "@/lib/contact";
import { InnerHero } from "@/components/inner-hero";
import { ContactForm } from "@/components/contact-form";
import { TikTokIcon } from "@/components/tiktok-icon";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Contact" title="Start with the right service." copy="Call, message us on Telegram, join our channels, or follow us on TikTok. Please don't send passports or other documents until we ask for them." />
      <section className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[320px_1fr] lg:py-24">
        <aside>
          <h2 className="text-2xl font-black">Contact details</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3 rounded-xl bg-white p-4"><MapPin className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Office</p><p className="mt-1 text-sm text-[#667a91]">Addis Ababa, Ethiopia</p></div></div>
            <a href={contact.phoneHref} className="flex gap-3 rounded-xl bg-white p-4 transition hover:bg-[#eef4fb]"><Phone className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Phone</p><p className="mt-1 text-sm text-[#667a91]">{contact.phone}</p></div></a>
            <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="flex gap-3 rounded-xl bg-white p-4 transition hover:bg-[#eef4fb]"><MessageCircle className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Telegram</p><p className="mt-1 text-sm text-[#667a91]">{contact.telegram}</p></div></a>
            {contact.channels.map((channel) => <a key={channel.href} href={channel.href} target="_blank" rel="noreferrer" className="flex gap-3 rounded-xl bg-white p-4 transition hover:bg-[#eef4fb]"><Send className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">{channel.label}</p><p className="mt-1 text-sm text-[#667a91]">{channel.handle}</p></div></a>)}
            <a href={contact.tiktok.href} target="_blank" rel="noreferrer" className="flex gap-3 rounded-xl bg-white p-4 transition hover:bg-[#eef4fb]"><TikTokIcon className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">TikTok</p><p className="mt-1 text-sm text-[#667a91]">{contact.tiktok.handle}</p></div></a>
          </div>
        </aside>
        <ContactForm />
      </section>
    </main>
  );
}
