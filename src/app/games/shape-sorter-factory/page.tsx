import type { Metadata } from "next";
import ShapeSorterFactoryGame from "@/components/games/ShapeSorterFactoryGame";

export const metadata: Metadata = {
  title: "Shape Sorter Factory",
  description: "Run a shape factory! Drag shapes off the conveyor belt into sorting bins based on their properties — sides, corners, curves, 2D vs 3D. A fun Year 1 geometry game.",
  keywords: ["shape sorting game", "geometry game", "2D 3D shapes game", "homeschool maths game", "Year 1 maths", "shape properties"],
  alternates: { canonical: "/games/shape-sorter-factory" },
  openGraph: {
    title: "Shape Sorter Factory | AI Native School",
    description: "An interactive geometry game for Foundation to Year 2 — sort shapes by sides, corners, curves, and dimensions on a factory conveyor belt.",
    url: "/games/shape-sorter-factory",
  },
};

export default function ShapeSorterFactoryPage() {
  return <ShapeSorterFactoryGame />;
}
