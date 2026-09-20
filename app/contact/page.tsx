import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { MockContactForm } from "@/components/mock-contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071e42]">
      <InnerHero eyebrow="Contact" title="Start with the right service." copy="Use the mock enquiry to see how visitors can contact Yodhub without sending files or sensitive documents." />
      <section className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[320px_1fr] lg:py-24">
        <aside>
          <h2 className="text-2xl font-black">Contact details</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3 rounded-xl bg-white p-4"><MapPin className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Office</p><p className="mt-1 text-sm text-[#667a91]">Addis Ababa, Ethiopia</p></div></div>
            <div className="flex gap-3 rounded-xl bg-white p-4"><Mail className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Email placeholder</p><p className="mt-1 text-sm text-[#667a91]">info@yodhub.example</p></div></div>
            <div className="flex gap-3 rounded-xl bg-white p-4"><MessageCircle className="mt-1 h-5 w-5 text-[#b77900]" /><div><p className="font-bold">Telegram</p><p className="mt-1 text-sm text-[#667a91]">Mini App connection comes next</p></div></div>
          </div>
        </aside>
        <MockContactForm />
      </section>
    </main>
  );
}
