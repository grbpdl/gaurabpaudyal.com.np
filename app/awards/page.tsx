import { Metadata } from "next";
import { AwardsContent } from "./awards-content";

export const metadata: Metadata = {
  title: "Awards & Achievements | Gaurab Paudyal",
  description:
    "Recognition and achievements including AWS Certification, CodeCode Regional Competition selection, Technopreneurship Training, and Hult Prize finalist.",
  keywords: [
    "Awards",
    "Certifications",
    "Achievements",
    "AWS Certification",
    "Hult Prize",
    "Technopreneurship",
  ],
  openGraph: {
    title: "Awards & Achievements | Gaurab Paudyal",
    description:
      "AWS certified, CodeCode competition finalist, Technopreneurship trained, Hult Prize finalist. Recognition of technical excellence and innovation.",
    type: "website",
    url: "https://gaurabpaudyal.com.np/awards",
  },
  twitter: {
    card: "summary",
    title: "Awards & Achievements | Gaurab Paudyal",
    description:
      "AWS Certified and multiple international recognition recipient.",
  },
  alternates: {
    canonical: "https://gaurabpaudyal.com.np/awards",
  },
};

export default function AwardsPage() {
  return <AwardsContent />;
}
