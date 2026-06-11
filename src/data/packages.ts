import type { PrepPackage } from "@/types";

export const prepPackages: PrepPackage[] = [
  {
    name: "Free",
    slug: "free",
    bestFor: "Students who want to try the platform first.",
    description:
      "Start with free preparation tools before choosing a larger study package.",
    features: [
      "Sample questions",
      "Free diagnostic test",
      "Basic study guide",
      "Limited NGN preview",
    ],
    cta: "Start Free",
  },
  {
    name: "Starter",
    slug: "starter",
    bestFor: "Students who need organized study materials.",
    description:
      "Build a practical study routine with focused summaries and downloadable resources.",
    features: [
      "PDF resources",
      "Topic summaries",
      "Study plan",
      "Limited practice questions",
    ],
    cta: "Book Starter Materials",
  },
  {
    name: "Premium",
    slug: "premium",
    bestFor:
      "Students who want deeper practice and full preparation resources.",
    description:
      "Use a broader set of practice and review tools for structured self-paced preparation.",
    features: [
      "Full question bank",
      "NGN case studies",
      "Detailed rationales",
      "Mock exams",
      "Progress tracking",
    ],
    cta: "Request Premium Access",
    featured: true,
  },
  {
    name: "Guided Support",
    slug: "guided-support",
    bestFor: "Students who want accountability and guided help.",
    description:
      "Combine preparation resources with more direction and accountability.",
    features: [
      "Premium materials",
      "WhatsApp support",
      "Study accountability",
      "Live or recorded lessons",
    ],
    cta: "Request Guided Support",
  },
];
