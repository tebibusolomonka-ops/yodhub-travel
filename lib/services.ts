import { BriefcaseBusiness, CalendarDays, GraduationCap, Plane } from "lucide-react";

export const services = [
  {
    slug: "study-abroad",
    title: "Study abroad",
    short: "University admissions, scholarships, and student visas",
    eyebrow: "Education pathways",
    icon: GraduationCap,
    destinations: ["🇮🇹 Italy", "🇨🇳 China", "🇮🇳 India", "🇦🇪 Dubai", "🇦🇹 Austria", "🇷🇺 Russia", "🇹🇷 Turkey"],
    intro: "Study abroad with an affordable agent who handles the whole application on your behalf.",
    description: "Yodhub finds the right program and scholarship, prepares your documents, submits the university application, and guides you through the student visa, all on your behalf.",
    benefits: ["Program and scholarship matching", "Eligibility and document checklist", "University application on your behalf", "Admission and student visa guidance"],
    journey: ["Choose a study opportunity", "Complete the eligibility form", "Prepare the listed documents", "Yodhub reviews and applies on your behalf"],
  },
  {
    slug: "work-abroad",
    title: "Work abroad",
    short: "Work visas and direct employer connections",
    eyebrow: "Career opportunities",
    icon: BriefcaseBusiness,
    destinations: ["🇷🇺 Russia", "🇧🇾 Belarus", "🇷🇸 Serbia", "🇦🇱 Albania", "🇹🇷 Turkey"],
    intro: "Find work abroad with an affordable agent who guides you from profile review to arrival.",
    description: "Yodhub reviews your profile, matches you with an employer, and handles the work permit and visa process on your behalf.",
    benefits: ["Profile and experience review", "Employer matching", "Work permit and visa processing", "Guidance until you arrive"],
    journey: ["Select a work opportunity", "Describe your skills and experience", "Prepare the listed documents", "Yodhub processes your permit and visa"],
  },
  {
    slug: "visit-tourism",
    title: "Visit & tourism",
    short: "Tourist visas for Europe, China, Turkey, and Thailand",
    eyebrow: "Short-term travel",
    icon: Plane,
    destinations: ["🇪🇺 Europe (Schengen)", "🇨🇳 China", "🇹🇷 Turkey", "🇹🇭 Thailand"],
    intro: "Get your tourist visa with an affordable agent who prepares everything on your behalf.",
    description: "Yodhub checks your travel plan, prepares your supporting documents, books your appointment, and guides you through the visitor visa process.",
    benefits: ["Destination requirement guidance", "Travel-purpose review", "Financial document checklist", "Appointment preparation"],
    journey: ["Choose a destination", "Share your travel plan", "Prepare the listed documents", "Yodhub submits and follows up"],
  },
  {
    slug: "conferences",
    title: "Conferences",
    short: "Conferences all across the world",
    eyebrow: "Professional events",
    icon: CalendarDays,
    destinations: ["🌍 Worldwide, whenever a conference is available"],
    intro: "Attend conferences all across the world. We share new events whenever they become available.",
    description: "Yodhub handles conference registration and the related travel documents on your behalf.",
    benefits: ["Event and eligibility summary", "Statement and CV guidance", "Registration support", "Travel-document preparation"],
    journey: ["Follow our Telegram channel for new conferences", "Check eligibility and dates", "Complete your profile", "Yodhub registers and prepares your travel"],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
