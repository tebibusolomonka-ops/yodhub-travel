import { BriefcaseBusiness, CalendarDays, GraduationCap, Plane } from "lucide-react";

export const services = [
  {
    slug: "study-abroad",
    title: "Study abroad",
    short: "University admissions and student visa guidance",
    eyebrow: "Education pathways",
    icon: GraduationCap,
    intro: "Explore universities and programs with a clear view of the documents, dates, and steps involved.",
    description: "Yodhub helps applicants understand available programs, prepare an application checklist, and follow the admission journey from initial review to visa guidance.",
    benefits: ["Program and destination guidance", "Eligibility and document checklist", "Application preparation", "Offer and visa-stage guidance"],
    journey: ["Choose an open study opportunity", "Complete the mock eligibility form", "Review the document placeholders", "Submit for a mock consultant review"],
  },
  {
    slug: "work-abroad",
    title: "Work abroad",
    short: "Profile assessment and work pathway guidance",
    eyebrow: "Career opportunities",
    icon: BriefcaseBusiness,
    intro: "Check whether your qualifications and experience align with an available overseas work pathway.",
    description: "The mock work flow shows how a consultant can screen a professional profile before requesting documents or beginning a formal process.",
    benefits: ["Qualification and experience review", "Country-specific requirement summary", "CV preparation guidance", "Application-stage tracking"],
    journey: ["Select a work pathway", "Describe your skills and experience", "Check the future document list", "Submit the mock profile for review"],
  },
  {
    slug: "visit-tourism",
    title: "Visit & tourism",
    short: "Visitor visa preparation and travel guidance",
    eyebrow: "Short-term travel",
    icon: Plane,
    intro: "Prepare for a visitor journey with clear entry requirements, timelines, and supporting-document guidance.",
    description: "Visitors can review destination information and complete a simple mock assessment before the consultancy begins any real document process.",
    benefits: ["Destination requirement guidance", "Travel-purpose review", "Financial document checklist", "Appointment preparation"],
    journey: ["Choose a destination", "Enter your travel plan", "Review the placeholder checklist", "Submit the mock enquiry"],
  },
  {
    slug: "conferences",
    title: "Conferences",
    short: "Conference applications and travel preparation",
    eyebrow: "Professional events",
    icon: CalendarDays,
    intro: "Find open conferences and prepare a focused application for the event and its related travel process.",
    description: "The conference pathway brings the event details, eligibility, registration steps, and travel requirements into one guided flow.",
    benefits: ["Event and eligibility summary", "Statement and CV guidance", "Registration support", "Travel-document preparation"],
    journey: ["Open a conference listing", "Check eligibility and dates", "Complete the mock profile", "Submit for a mock review"],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
