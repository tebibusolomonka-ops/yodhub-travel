"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { opportunities } from "@/lib/opportunities";

export function OpportunityBrowser() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All services");

  const filtered = useMemo(() => opportunities.filter((item) => {
    const matchesQuery = `${item.title} ${item.country} ${item.institution}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (type === "All services" || item.type === type);
  }), [query, type]);

  useEffect(() => {
    const modelContext = (document as Document & {
      modelContext?: {
        registerTool: (tool: {
          name: string;
          title: string;
          description: string;
          inputSchema: object;
          annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
          execute: (input: { query?: string; service?: string }) => unknown;
        }, options: { signal: AbortSignal }) => void | Promise<void>;
      };
    }).modelContext;
    if (!modelContext?.registerTool) return;

    const lifecycle = new AbortController();
    void Promise.resolve(modelContext.registerTool({
      name: "filter_opportunities",
      title: "Filter Yodhub opportunities",
      description: "Filter the visible opportunity cards by a search phrase and service type.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string" },
          service: { type: "string", enum: ["All services", "Study abroad", "Work abroad", "Visit & tourism", "Conferences"] },
        },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const nextQuery = typeof input.query === "string" ? input.query : "";
        const allowed = ["All services", "Study abroad", "Work abroad", "Visit & tourism", "Conferences"];
        const nextType = input.service && allowed.includes(input.service) ? input.service : "All services";
        setQuery(nextQuery);
        setType(nextType);
        document.getElementById("opportunities")?.scrollIntoView({ behavior: "smooth" });
        return { query: nextQuery, service: nextType };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);

    return () => lifecycle.abort();
  }, []);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-[#dfe7f1] bg-white p-3 shadow-sm md:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search opportunities</span>
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7890aa]" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by country, program, or institution" className="h-13 border-0 bg-[#f4f7fb] pl-12 text-base shadow-none focus-visible:ring-[#d9a020]/30" />
        </label>
        <label className="relative">
          <span className="sr-only">Filter by service</span>
          <select value={type} onChange={(event) => setType(event.target.value)} className="h-13 w-full appearance-none rounded-md border-0 bg-[#f4f7fb] px-5 pr-10 text-base outline-none focus:ring-3 focus:ring-[#d9a020]/30 md:w-[220px]">
            {["All services", "Study abroad", "Work abroad", "Visit & tourism", "Conferences"].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#71849a]">⌄</span>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <article key={item.slug} className="group relative overflow-hidden rounded-[1.75rem] border border-[#dbe4ef] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(8,35,76,.11)] sm:p-7">
            {item.featured && <span className="absolute right-5 top-5 rounded-full bg-[#fff5d9] px-3 py-1 text-xs font-bold text-[#9b6800]">Featured</span>}
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">{item.flag}</span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b77800]">{item.type}</p>
                <p className="mt-1 text-sm text-[#63758c]">{item.country} · {item.city}</p>
              </div>
            </div>
            <h3 className="mt-6 max-w-[420px] text-2xl font-black tracking-[-0.025em] text-[#071e42]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">{item.institution}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 border-y border-[#edf1f6] py-5 text-sm">
              <span className="flex items-center gap-2 text-[#52667e]"><CalendarDays className="h-4 w-4 text-[#ba7b00]" />{item.deadline}</span>
              <span className="flex items-center gap-2 text-[#52667e]"><MapPin className="h-4 w-4 text-[#ba7b00]" />{item.intake}</span>
            </div>
            <Link href={`/opportunities/${item.slug}`} className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#0a4383]">
              View requirements <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="rounded-2xl border border-dashed border-[#cbd8e6] bg-white p-10 text-center text-[#5d7189]">No opportunities match that search yet.</div>}
    </div>
  );
}
