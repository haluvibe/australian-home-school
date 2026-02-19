import type { Metadata } from "next";
import { Suspense } from "react";
import CurriculumContent from "./CurriculumContent";

export const metadata: Metadata = {
  title: "Australian Curriculum V9 Guide — Foundation to Year 10",
  description:
    "A clear breakdown of the Australian Curriculum V9 for every year level. Browse learning objectives for English and Mathematics from Foundation to Year 10.",
  keywords: [
    "Australian Curriculum V9",
    "curriculum guide",
    "Foundation to Year 10",
    "homeschool curriculum Australia",
    "learning objectives",
    "mathematics curriculum",
    "English curriculum",
  ],
  alternates: { canonical: "/curriculum" },
  openGraph: {
    title: "Australian Curriculum V9 Guide — Foundation to Year 10",
    description:
      "Browse learning objectives for English and Mathematics from Foundation to Year 10, aligned to the Australian Curriculum V9.",
    url: "/curriculum",
  },
};

export default function CurriculumPage() {
  return (
    <Suspense>
      <CurriculumContent />
    </Suspense>
  );
}
