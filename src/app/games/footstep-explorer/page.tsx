import type { Metadata } from "next";
import FootstepExplorerGame from "@/components/games/FootstepExplorerGame";

export const metadata: Metadata = {
  title: "Footstep Explorer",
  description: "Measure objects using informal units like paperclips, handspans, footsteps, and blocks. Drag and place units end-to-end, estimate lengths, and compare objects — a hands-on Year 1 measurement game.",
  keywords: ["measurement game", "informal units", "Year 1 maths", "homeschool maths game", "measuring with paperclips", "comparing lengths"],
  alternates: { canonical: "/games/footstep-explorer" },
  openGraph: {
    title: "Footstep Explorer | AI Native School",
    description: "An interactive measurement game for Year 1 — drag paperclips, handspans, and footsteps to measure objects and compare lengths.",
    url: "/games/footstep-explorer",
  },
};

export default function FootstepExplorerPage() {
  return <FootstepExplorerGame />;
}
