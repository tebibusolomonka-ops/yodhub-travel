"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, EyeOff, X } from "lucide-react";
import { proofs, type Proof } from "@/lib/proofs";

const filters = ["All", "Study", "Tourist", "Business"] as const;

export function ProofGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Proof | null>(null);
  const visible = proofs.filter((proof) => filter === "All" || proof.category === filter).slice(0, limit ?? proofs.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div>
      {!limit && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter visas">
          {filters.map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition ${filter === item ? "bg-[#071e42] text-white" : "border border-[#d3deea] bg-white text-[#40576f] hover:bg-[#eef4fb]"}`}>
              {item === "All" ? "All visas" : `${item} visas`}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((proof) => (
          <button key={proof.image} type="button" onClick={() => setOpen(proof)} className="group overflow-hidden rounded-[1.5rem] border border-[#dbe4ef] bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(8,35,76,.11)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e8eef6]">
              <img src={proof.image} alt={`${proof.country} ${proof.visa} approved for a Yodhub client, personal details blurred`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#071e42]/85 px-3 py-1 text-xs font-bold text-white backdrop-blur"><EyeOff className="h-3.5 w-3.5" /> Details blurred</span>
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <p className="font-black text-[#071e42]"><span className="mr-2" aria-hidden="true">{proof.flag}</span>{proof.country}</p>
                <p className="mt-1 text-sm text-[#63758c]">{proof.visa} · {proof.issued}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f7ef] text-[#16834d]"><BadgeCheck className="h-5 w-5" /></span>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={`${open.country} ${open.visa}`} className="fixed inset-0 z-50 flex items-center justify-center bg-[#030d1f]/85 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <figure className="relative max-h-full w-full max-w-3xl overflow-auto rounded-2xl bg-white" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setOpen(null)} className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#071e42] shadow" aria-label="Close"><X className="h-5 w-5" /></button>
            <img src={open.image} alt={`${open.country} ${open.visa}, personal details blurred`} className="w-full" />
            <figcaption className="flex flex-wrap items-center justify-between gap-2 p-5">
              <span className="font-black text-[#071e42]">{open.flag} {open.country} · {open.visa}</span>
              <span className="text-sm text-[#63758c]">Issued {open.issued} · Personal details blurred for privacy</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
