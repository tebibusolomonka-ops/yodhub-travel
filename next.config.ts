import type { NextConfig } from "next";

// Old (hyphenated) addresses that may already be shared → current addresses.
const moved: Record<string, string> = {
  "italy-scholarship-2026": "/study/italy",
  "china-scholarship-2026": "/study/china",
  "czech-government-scholarship": "/study/czech",
  "study-other-countries": "/study/other",
  "russia-work-visa": "/work/russia",
  "turkey-work-visa": "/work/turkey",
  "dubai-work-visa": "/work/dubai",
  "albania-work-visa": "/work/albania",
  "serbia-work-visa": "/work/serbia",
  "belarus-work-visa": "/work/belarus",
  "europe-schengen-visit-visa": "/visit/europe",
  "china-visit-visa": "/visit/china",
  "turkey-visit-visa": "/visit/turkey",
  "thailand-visit-visa": "/visit/thailand",
  "international-conferences": "/conferences/worldwide",
  "istanbul-youth-summit": "/conferences/istanbul",
  "ayimun": "/conferences/ayimun",
  "harvard-worldmun": "/conferences/harvard",
  "one-young-world-summit": "/conferences/oneyoungworld",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/visa-results", destination: "/visas", permanent: true },
      { source: "/how-it-works", destination: "/process", permanent: true },
      { source: "/services/study-abroad", destination: "/services/study", permanent: true },
      { source: "/services/work-abroad", destination: "/services/work", permanent: true },
      { source: "/services/visit-tourism", destination: "/services/visit", permanent: true },
      ...Object.entries(moved).flatMap(([oldSlug, path]) => [
        { source: `/opportunities/${oldSlug}`, destination: path, permanent: true },
        { source: `/apply/${oldSlug}`, destination: `/apply${path}`, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
