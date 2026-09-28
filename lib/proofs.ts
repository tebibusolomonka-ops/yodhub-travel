// Images live in /public/proofs. Faces, names, passport/visa numbers, birth dates,
// barcodes and machine-readable lines are blurred before an image is added here.
// Set to true once the blurred images are in /public/proofs. While false, the
// Visa results page, nav link, and homepage section stay hidden.
export const proofsReady = true;

export type Proof = {
  image: string;
  country: string;
  flag: string;
  visa: string;
  category: "Study" | "Tourist" | "Business";
  issued: string;
};

// Order is the display order; the homepage shows the first three.
export const proofs: Proof[] = [
  { image: "/proofs/china-study-x1-1.webp", country: "China", flag: "🇨🇳", visa: "X1 study visa", category: "Study", issued: "Feb 2026" },
  { image: "/proofs/china-tourist-3.webp", country: "China", flag: "🇨🇳", visa: "L tourist visa", category: "Tourist", issued: "Dec 2025" },
  { image: "/proofs/italy-study-2.webp", country: "Italy", flag: "🇮🇹", visa: "Type D study visa", category: "Study", issued: "Sep 2025" },
  { image: "/proofs/china-study-x1-2.webp", country: "China", flag: "🇨🇳", visa: "X1 study visa", category: "Study", issued: "Feb 2026" },
  { image: "/proofs/greece-schengen-1.webp", country: "Greece", flag: "🇬🇷", visa: "Schengen tourist visa", category: "Tourist", issued: "Aug 2025" },
  { image: "/proofs/china-study-x2.webp", country: "China", flag: "🇨🇳", visa: "X2 study visa", category: "Study", issued: "May 2025" },
  { image: "/proofs/turkey-tourist-2.webp", country: "Türkiye", flag: "🇹🇷", visa: "Tourist visa", category: "Tourist", issued: "Apr 2025" },
  { image: "/proofs/turkey-tourist-1.webp", country: "Türkiye", flag: "🇹🇷", visa: "Tourist visa", category: "Tourist", issued: "Apr 2025" },
  { image: "/proofs/russia-business-1.webp", country: "Russia", flag: "🇷🇺", visa: "Business visa", category: "Business", issued: "Mar 2025" },
  { image: "/proofs/china-business-1.webp", country: "China", flag: "🇨🇳", visa: "M business visa", category: "Business", issued: "Nov 2024" },
  { image: "/proofs/china-business-2.webp", country: "China", flag: "🇨🇳", visa: "M business visa", category: "Business", issued: "Nov 2024" },
  { image: "/proofs/china-business-3.webp", country: "China", flag: "🇨🇳", visa: "M business visa", category: "Business", issued: "Nov 2024" },
  { image: "/proofs/china-tourist-1.webp", country: "China", flag: "🇨🇳", visa: "L tourist visa", category: "Tourist", issued: "Jun 2024" },
  { image: "/proofs/china-tourist-2.webp", country: "China", flag: "🇨🇳", visa: "L tourist visa", category: "Tourist", issued: "Jun 2024" },
  { image: "/proofs/italy-study-1.webp", country: "Italy", flag: "🇮🇹", visa: "Type D study visa", category: "Study", issued: "Nov 2021" },
  // Kept last on request so it doesn't appear on the homepage.
  { image: "/proofs/italy-study-3.webp", country: "Italy", flag: "🇮🇹", visa: "Type D study visa", category: "Study", issued: "Oct 2025" },
];
