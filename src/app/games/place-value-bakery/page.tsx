import type { Metadata } from "next";
import PlaceValueBakeryGame from "@/components/games/PlaceValueBakeryGame";

export const metadata: Metadata = {
  title: "Place Value Bakery",
  description: "Build numbers using tens trays and individual cupcakes in this fun bakery game. Learn place value, tens and ones for Year 1 Maths.",
  keywords: ["place value game", "tens and ones game", "Year 1 maths game", "homeschool maths game", "place value bakery"],
  alternates: { canonical: "/games/place-value-bakery" },
  openGraph: {
    title: "Place Value Bakery | AI Native School",
    description: "A fun bakery-themed game for learning tens and ones. Drag cupcake trays and singles to fill customer orders!",
    url: "/games/place-value-bakery",
  },
};

export default function PlaceValueBakeryPage() {
  return <PlaceValueBakeryGame />;
}
