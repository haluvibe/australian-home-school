import type { Metadata } from "next";
import { Suspense } from "react";
import CurriculumContent from "./CurriculumContent";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "A clear breakdown of the Australian Curriculum V9 for each year of schooling, from Foundation to Year 10.",
};

export default function CurriculumPage() {
  return (
    <Suspense>
      <CurriculumContent />
    </Suspense>
  );
}
