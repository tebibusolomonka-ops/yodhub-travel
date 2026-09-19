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
  duration: string;
  fee: string;
  featured?: boolean;
  description: string;
  requirements: string[];
  steps: string[];
};

export const opportunities: Opportunity[] = [
  {
    slug: "italy-marche-2027",
    type: "Study abroad",
    title: "Bachelor & Master’s Programs",
    country: "Italy",
    flag: "🇮🇹",
    city: "Ancona",
    institution: "Università Politecnica delle Marche",
    deadline: "15 Nov 2026",
    intake: "February 2027",
    duration: "2–3 years",
    fee: "From €156/year",
    featured: true,
    description: "Apply for selected English-taught bachelor’s and master’s programs with guided document preparation and application support.",
    requirements: ["Valid passport", "Degree certificate or high school diploma", "Academic transcript", "Updated CV", "English proficiency evidence", "Motivation letter"],
    steps: ["Eligibility review", "Document preparation", "University submission", "Offer and visa guidance"],
  },
  {
    slug: "russia-state-universities-2027",
    type: "Study abroad",
    title: "State University Admissions",
    country: "Russia",
    flag: "🇷🇺",
    city: "Moscow & Kazan",
    institution: "Partner state universities",
    deadline: "30 Jan 2027",
    intake: "September 2027",
    duration: "4–6 years",
    fee: "From $2,800/year",
    description: "Explore medicine, engineering, business, and language programs at selected state universities.",
    requirements: ["Valid passport", "High school certificate", "Academic transcript", "Passport photo", "Medical certificate"],
    steps: ["Profile review", "Program matching", "Admission application", "Invitation and visa support"],
  },
  {
    slug: "germany-skilled-worker-pathway",
    type: "Work abroad",
    title: "Skilled Worker Pathway",
    country: "Germany",
    flag: "🇩🇪",
    city: "Multiple cities",
    institution: "Employer pathway",
    deadline: "Rolling applications",
    intake: "Monthly review",
    duration: "Long-term",
    fee: "Assessment required",
    description: "Initial profile assessment and document guidance for qualified technical and care professionals.",
    requirements: ["Valid passport", "Professional qualification", "Employment history", "Updated CV", "Language certificate if available"],
    steps: ["Qualification review", "Document check", "Opportunity matching", "Application support"],
  },
  {
    slug: "dubai-education-conference",
    type: "Conferences",
    title: "Global Education Summit",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai",
    institution: "Global Education Forum",
    deadline: "08 Dec 2026",
    intake: "March 2027",
    duration: "3 days",
    fee: "Application support",
    description: "Application and travel-document guidance for professionals attending the Global Education Summit.",
    requirements: ["Valid passport", "Professional CV", "Short statement of purpose", "Employer or institution letter"],
    steps: ["Applicant review", "Conference registration", "Supporting documents", "Travel guidance"],
  },
];

export function getOpportunity(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug);
}

