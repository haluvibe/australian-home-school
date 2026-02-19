import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Lesson Planner",
  description:
    "Plan your homeschool week with our free interactive lesson planner. Organise subjects, activities and goals across Foundation to Year 10.",
  keywords: [
    "homeschool planner",
    "weekly lesson planner",
    "homeschool schedule",
    "lesson planning Australia",
    "home education planner",
  ],
  alternates: { canonical: "/planner" },
  openGraph: {
    title: "Weekly Lesson Planner | AI Native School",
    description:
      "Plan your homeschool week with our free interactive lesson planner. Organise subjects, activities and goals for Foundation to Year 10.",
    url: "/planner",
  },
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
