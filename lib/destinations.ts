export type Destination = {
  country: string;
  flag: string;
  services: ("Study" | "Work" | "Visit")[];
  href: string;
  tint: string;
};

// Countries from the services Yodhub offers. `tint` is the card's accent gradient.
export const destinations: Destination[] = [
  { country: "Italy", flag: "🇮🇹", services: ["Study"], href: "/study/italy", tint: "from-[#0f7a45] to-[#c8102e]" },
  { country: "China", flag: "🇨🇳", services: ["Study", "Visit"], href: "/study/china", tint: "from-[#c8102e] to-[#f4b32b]" },
  { country: "Turkey", flag: "🇹🇷", services: ["Study", "Work", "Visit"], href: "/services/visit", tint: "from-[#c8102e] to-[#7a0c1c]" },
  { country: "Russia", flag: "🇷🇺", services: ["Study", "Work"], href: "/work/russia", tint: "from-[#1c3f94] to-[#c8102e]" },
  { country: "Europe (Schengen)", flag: "🇪🇺", services: ["Visit"], href: "/visit/europe", tint: "from-[#003399] to-[#f4c430]" },
  { country: "Dubai", flag: "🇦🇪", services: ["Study", "Work"], href: "/work/dubai", tint: "from-[#00732f] to-[#1a1a1a]" },
  { country: "India", flag: "🇮🇳", services: ["Study"], href: "/services/study", tint: "from-[#ff9933] to-[#138808]" },
  { country: "Austria", flag: "🇦🇹", services: ["Study"], href: "/services/study", tint: "from-[#c8102e] to-[#8a0b20]" },
  { country: "Belarus", flag: "🇧🇾", services: ["Work"], href: "/work/belarus", tint: "from-[#c8313e] to-[#4aa657]" },
  { country: "Serbia", flag: "🇷🇸", services: ["Work"], href: "/work/serbia", tint: "from-[#0c4076] to-[#c6363c]" },
  { country: "Albania", flag: "🇦🇱", services: ["Work"], href: "/work/albania", tint: "from-[#e41e20] to-[#1a1a1a]" },
  { country: "Thailand", flag: "🇹🇭", services: ["Visit"], href: "/visit/thailand", tint: "from-[#2d2a4a] to-[#a51931]" },
];
