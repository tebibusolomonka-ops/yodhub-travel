export type Opportunity = {
  slug: string;
  type: "Study abroad" | "Work abroad" | "Visit & tourism" | "Conferences";
  title: string;
  country: string;
  flag: string;
  city: string;
  institution: string;
  deadline: string;
  intake: string;
  fee: string;
  featured?: boolean;
  // Kept out of the public site until the listing is verified.
  hidden?: boolean;
  description: string;
  highlights?: { label: string; value: string }[];
  benefits?: string[];
  eligibility?: string[];
  requirements: string[];
  steps: string[];
};

const allOpportunities: Opportunity[] = [
  {
    slug: "italy-scholarship-2026",
    type: "Study abroad",
    title: "Full Tuition Fee Scholarship",
    country: "Italy",
    flag: "🇮🇹",
    city: "Multiple cities",
    institution: "Italian universities & programs",
    deadline: "Contact us for the current intake",
    intake: "Next academic intake",
    fee: "Full tuition fee covered",
    featured: true,
    description: "Study in Italy with financial support. The scholarship covers the full tuition fee for bachelor's and master's programs, with accommodation support, meal support, and a monthly stipend. Yodhub guides you from document preparation to visa application.",
    highlights: [
      { label: "Scholarship", value: "Full tuition fee" },
      { label: "Levels", value: "Bachelor's & Master's" },
      { label: "Stipend", value: "Monthly" },
    ],
    benefits: ["Full tuition fee scholarship", "Accommodation support", "Meal support", "Monthly stipend", "Access to Italian universities & programs"],
    requirements: ["Passport", "Transcript / student copy", "Matric certificate / original degree", "Medium of Instruction (MOI) or English proficiency certificate", "Recommendation letter", "Extracurricular certificates (if available)"],
    steps: ["Eligibility review", "Document preparation", "University & scholarship application", "Study visa guidance"],
  },
  {
    slug: "china-scholarship-2026",
    type: "Study abroad",
    title: "China Scholarship 2026/27",
    country: "China",
    flag: "🇨🇳",
    city: "Universities across China",
    institution: "Multiple universities & programs",
    deadline: "Contact us for the current intake",
    intake: "2026/27 academic year",
    fee: "Fully funded & partial",
    featured: true,
    description: "Study in China with fully funded and partial scholarship opportunities at various universities across the country. Open to high school graduates through master's degree holders, with a short document list and guided application process.",
    highlights: [
      { label: "Scholarship", value: "Fully funded & partial" },
      { label: "Universities", value: "Across China" },
      { label: "Documents", value: "Only 3 required" },
    ],
    benefits: ["Fully funded & partial scholarships", "Multiple universities & programs", "Fast, guided application process", "Quality education and international experience"],
    eligibility: ["Grade 12 / high school graduates", "Diploma holders", "Bachelor's degree holders", "Master's degree holders"],
    requirements: ["Passport", "Academic transcript", "Police clearance certificate"],
    steps: ["Eligibility review", "Program & university matching", "Scholarship application", "Admission letter and student visa guidance"],
  },
  {
    slug: "czech-government-scholarship",
    type: "Study abroad",
    title: "Czech Government Scholarship",
    country: "Czech Republic",
    flag: "🇨🇿",
    city: "Czech public universities",
    institution: "Funded by the Czech Government",
    deadline: "Contact us for the next round",
    intake: "Next academic year",
    fee: "Fully funded",
    description: "A fully funded Czech Government scholarship for students from developing countries to complete a master's or PhD degree at Czech public universities. Programs are offered in English and Czech, and funding is also available for a one-year Czech language course.",
    highlights: [
      { label: "Master's", value: "CZK 16,000 / month" },
      { label: "PhD", value: "CZK 17,000 / month" },
      { label: "Study cost", value: "Covered" },
    ],
    benefits: ["Study costs covered", "Living allowance: CZK 16,000/month (Master's)", "Living allowance: CZK 17,000/month (PhD)", "Allowance covers accommodation, food, and transport", "Optional one-year Czech language course", "Note: travel is not covered by the scholarship"],
    eligibility: ["Master's degree applicants (2 years)", "PhD applicants (3 years)"],
    requirements: ["Valid passport", "Full document list shared after your eligibility review"],
    steps: ["Eligibility review", "Program selection", "Scholarship nomination & application", "Admission and visa guidance"],
  },
  {
    slug: "russia-work-visa",
    type: "Work abroad",
    title: "Russia Work Visa",
    country: "Russia",
    flag: "🇷🇺",
    city: "Russia",
    institution: "Direct company connection",
    deadline: "Rolling applications",
    intake: "2–3 months processing",
    fee: "$541 – $1,783 / month",
    // Hidden until the client confirms the employer's name and contract (matches the Alabuga Start recruitment pattern).
    hidden: true,
    description: "Work in Russia on a 2-year contract with accommodation, medical insurance, and flight ticket provided, plus Russian language lessons. Yodhub connects you directly with the company — no agents in between.",
    highlights: [
      { label: "Salary", value: "$541 – $1,783" },
      { label: "Contract", value: "2 years" },
      { label: "Processing", value: "2–3 months" },
    ],
    benefits: ["Accommodation fully provided", "Medical insurance", "Flight ticket provided", "Russian language lessons", "Roles: catering, service & hospitality, production operator, driver (road transport), installation works, tiling works, logistics"],
    eligibility: ["Female applicants only", "Age 18–24", "Grade 10 completed or above", "Basic English"],
    requirements: ["Valid passport", "Photo (3×4)", "Grade 10+ documents", "Basic English language"],
    steps: ["Profile review", "Employer matching", "Contract and work permit processing", "Visa, flight, and arrival"],
  },
  {
    slug: "belarus-work-visa",
    type: "Work abroad",
    title: "Belarus Work Visa",
    country: "Belarus",
    flag: "🇧🇾",
    city: "Belarus",
    institution: "Approved employers",
    deadline: "Rolling applications",
    intake: "Fast processing",
    fee: "Competitive pay",
    description: "Work and live in Belarus. Our work visa service connects skilled and unskilled workers with approved employers, handles the work permit and visa process, and takes the stress out of relocation.",
    highlights: [
      { label: "Housing", value: "Free" },
      { label: "Workers", value: "Skilled & unskilled" },
      { label: "Processing", value: "Fast" },
    ],
    benefits: ["Free housing provided by the employer", "Competitive pay negotiated directly with employers", "Sectors: construction, logistics, hospitality, manufacturing, IT", "Document preparation by legal experts", "Fast work permit and visa approval"],
    eligibility: ["Skilled workers", "Unskilled workers"],
    requirements: ["Valid passport", "Full document list shared after your profile review"],
    steps: ["Profile review", "Employer matching", "Work permit and visa processing", "Relocation"],
  },
];

export const opportunities = allOpportunities.filter((opportunity) => !opportunity.hidden);

export function getOpportunity(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug);
}
