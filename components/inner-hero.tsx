import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

export function InnerHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#061a3b] text-white">
      <div className="hero-grid absolute inset-0 opacity-25" />
      <SiteHeader overlay />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <p className="text-sm font-extrabold uppercase tracking-[.18em] text-[#e9ae36]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.045em] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#bdcce0]">{copy}</p>
        {children}
      </div>
    </section>
  );
}
