export type Opportunity = {
  slug: string;
  type: "Study abroad" | "Work abroad" | "Visit & tourism" | "Conferences";
  title: string;
  country: string;
  flag: string;
  city: string;
  institution: string;
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

const visitRequirements = ["Bank statement", "Business license"];
const workRequirements = ["Valid passport", "Full document list shared after your profile review"];
const workSteps = ["Profile review", "Employer matching", "Work permit and visa processing", "Travel and arrival"];
const conferenceRequirements = ["Passport", "Extracurricular activity certificates"];
const conferenceSteps = ["Check the next edition with us", "Eligibility review", "Registration", "Visa and travel guidance"];

function workVisa(slug: string, country: string, flag: string): Opportunity {
  return {
    slug,
    type: "Work abroad",
    title: `${country} Work Visa`,
    country,
    flag,
    city: country,
    institution: "Direct employer connections",
    intake: "Apply any time",
    fee: "Contact us for jobs & salary",
    description: `Work in ${country} through Yodhub's direct employer connections. Contact us for the current jobs, salaries, and contract details. We handle the work permit and visa process on your behalf.`,
    requirements: workRequirements,
    steps: workSteps,
  };
}

function conference(slug: string, title: string, country: string, flag: string, city: string, description: string): Opportunity {
  return {
    slug,
    type: "Conferences",
    title,
    country,
    flag,
    city,
    institution: "Popular with Ethiopian applicants",
    intake: "Yearly — ask us for the next date",
    fee: "Contact us for the price",
    description,
    requirements: conferenceRequirements,
    steps: conferenceSteps,
  };
}
const visitSteps = ["Travel plan review", "Document preparation", "Appointment and application", "Visa follow-up"];

const allOpportunities: Opportunity[] = [
  {
    slug: "italy",
    type: "Study abroad",
    title: "Full Tuition Fee Scholarship",
    country: "Italy",
    flag: "🇮🇹",
    city: "Multiple cities",
    institution: "Italian universities & programs",
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
    slug: "china",
    type: "Study abroad",
    title: "China Scholarship 2026/27",
    country: "China",
    flag: "🇨🇳",
    city: "Universities across China",
    institution: "Multiple universities & programs",
    intake: "Different intakes available",
    fee: "Fully funded & partial",
    featured: true,
    description: "Study in China with fully funded and partial scholarship opportunities at various universities across the country. Universities have different intakes through the year, so ask us which one fits you. Open to high school graduates through master's degree holders.",
    highlights: [
      { label: "Scholarship", value: "Fully funded & partial" },
      { label: "Intakes", value: "Different intakes" },
      { label: "Documents", value: "Only 2 required" },
    ],
    benefits: ["Fully funded & partial scholarships", "Multiple universities & programs", "Different intakes through the year", "Fast, guided application process"],
    eligibility: ["Grade 12 / high school graduates", "Diploma holders", "Bachelor's degree holders", "Master's degree holders"],
    requirements: ["Passport", "Academic transcript"],
    steps: ["Eligibility review", "Program, university & intake matching", "Scholarship application", "Admission letter and student visa guidance"],
  },
  {
    slug: "czech",
    type: "Study abroad",
    title: "Czech Government Scholarship",
    country: "Czech Republic",
    flag: "🇨🇿",
    city: "Czech public universities",
    institution: "Funded by the Czech Government",
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
    slug: "other",
    type: "Study abroad",
    title: "Study in Other Countries",
    country: "Worldwide",
    flag: "🌍",
    city: "USA, Canada, UK, Europe & more",
    institution: "Universities in any country you choose",
    intake: "Depends on the country",
    fee: "Scholarships where available",
    description: "Want to study somewhere not listed, like the USA, Canada, the UK, or elsewhere in Europe and Asia? Tell us your country and program, and we'll find the right university and scholarship options and handle the application and student visa on your behalf.",
    highlights: [
      { label: "Countries", value: "USA, Canada, UK & more" },
      { label: "Levels", value: "Bachelor's, Master's & PhD" },
      { label: "Support", value: "Admission to visa" },
    ],
    benefits: ["USA", "Canada", "United Kingdom", "Germany, France & the rest of Europe", "Asia and the Middle East", "Any other country you have in mind"],
    requirements: ["Passport", "Academic transcript", "Degree or high school certificate", "Full list depends on the country and program"],
    steps: ["Tell us your country and program", "University & scholarship matching", "Application on your behalf", "Admission and student visa guidance"],
  },
  workVisa("russia", "Russia", "🇷🇺"),
  workVisa("turkey", "Turkey", "🇹🇷"),
  workVisa("dubai", "Dubai", "🇦🇪"),
  workVisa("albania", "Albania", "🇦🇱"),
  workVisa("serbia", "Serbia", "🇷🇸"),
  {
    slug: "russiaoffer",
    type: "Work abroad",
    title: "Russia Work Visa",
    country: "Russia",
    flag: "🇷🇺",
    city: "Russia",
    institution: "Direct company connection",
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
    slug: "belarus",
    type: "Work abroad",
    title: "Belarus Work Visa",
    country: "Belarus",
    flag: "🇧🇾",
    city: "Belarus",
    institution: "Approved employers",
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
  {
    slug: "europe",
    type: "Visit & tourism",
    title: "Schengen Visit Visa",
    country: "Europe (Schengen)",
    flag: "🇪🇺",
    city: "Schengen countries",
    institution: "Tourist & business visit",
    intake: "Apply year-round",
    fee: "Contact us for the price",
    description: "Visit Europe for tourism or business. We check your travel plan, prepare your supporting documents, and guide you through the appointment and visa application.",
    requirements: visitRequirements,
    steps: visitSteps,
  },
  {
    slug: "china",
    type: "Visit & tourism",
    title: "China Visit Visa",
    country: "China",
    flag: "🇨🇳",
    city: "China",
    institution: "Tourist & business visit",
    intake: "Apply year-round",
    fee: "Contact us for the price",
    description: "Visit China for tourism or business. We prepare your documents and handle the visa application on your behalf.",
    requirements: visitRequirements,
    steps: visitSteps,
  },
  {
    slug: "turkey",
    type: "Visit & tourism",
    title: "Turkey Visit Visa",
    country: "Turkey",
    flag: "🇹🇷",
    city: "Turkey",
    institution: "Tourist & business visit",
    intake: "Apply year-round",
    fee: "Contact us for the price",
    description: "Visit Turkey for tourism or business. We prepare your documents and handle the visa application on your behalf.",
    requirements: visitRequirements,
    steps: visitSteps,
  },
  {
    slug: "thailand",
    type: "Visit & tourism",
    title: "Thailand Visit Visa",
    country: "Thailand",
    flag: "🇹🇭",
    city: "Thailand",
    institution: "Tourist & business visit",
    intake: "Apply year-round",
    fee: "Contact us for the price",
    description: "Visit Thailand for tourism or business. We prepare your documents and handle the visa application on your behalf.",
    requirements: visitRequirements,
    steps: visitSteps,
  },
  {
    slug: "worldwide",
    type: "Conferences",
    title: "International Conferences",
    country: "Worldwide",
    flag: "🌍",
    city: "All across the world",
    institution: "Whenever a conference is available",
    intake: "Whenever available",
    fee: "Contact us for the price",
    description: "Attend conferences all across the world, such as youth summits, Model United Nations, and leadership forums. See the popular examples below. We post new conferences on our Telegram channel whenever they are available, then handle registration and travel documents on your behalf.",
    highlights: [
      { label: "Where", value: "Worldwide" },
      { label: "When", value: "Whenever available" },
      { label: "Documents", value: "Only 2 required" },
    ],
    benefits: ["Istanbul Youth Summit (Turkey)", "Asia Youth International MUN (Malaysia)", "Harvard WorldMUN (host city changes yearly)", "One Young World Summit (host city changes yearly)", "Registration and travel documents handled for you"],
    requirements: conferenceRequirements,
    steps: ["Choose a conference", "Eligibility review", "Registration", "Visa and travel guidance"],
  },
  conference("istanbul", "Istanbul Youth Summit", "Turkey", "🇹🇷", "Istanbul", "A popular international youth summit in Istanbul that brings young people together for workshops, leadership sessions, and networking. We help you register and prepare your Turkey visa."),
  conference("ayimun", "Asia Youth International MUN", "Malaysia", "🇲🇾", "Kuala Lumpur", "A Model United Nations conference in Asia where young people debate global issues as UN delegates. It is a common first international conference for Ethiopian students. We handle registration and visa guidance."),
  conference("harvard", "Harvard WorldMUN", "Worldwide", "🌍", "Host city changes every year", "Harvard's international Model United Nations conference, held in a different city around the world each year. We help you apply, register, and prepare the visa for that year's host country."),
  conference("oneyoungworld", "One Young World Summit", "Worldwide", "🌍", "Host city changes every year", "A global summit for young leaders, held in a different country each year. We help with your application, registration, and visa for the host country."),
];

export const opportunities = allOpportunities.filter((opportunity) => !opportunity.hidden);

// Pages live at /<category>/<slug>, e.g. /study/china or /visit/china, so slugs only need to be unique within a category.
export const categories = { "Study abroad": "study", "Work abroad": "work", "Visit & tourism": "visit", "Conferences": "conferences" } as const;
export type Category = (typeof categories)[keyof typeof categories];

export function opportunityHref(opportunity: Opportunity) {
  return `/${categories[opportunity.type]}/${opportunity.slug}`;
}

export function applyHref(opportunity: Opportunity) {
  return `/apply${opportunityHref(opportunity)}`;
}

export function opportunitiesIn(category: Category) {
  return opportunities.filter((opportunity) => categories[opportunity.type] === category);
}

export function getOpportunity(category: Category, slug: string) {
  return opportunitiesIn(category).find((opportunity) => opportunity.slug === slug);
}
