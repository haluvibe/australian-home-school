import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { foundationMathsWorksheets, getFoundationWorksheet } from "@/lib/worksheet-data";
import WorksheetPage from "@/components/worksheets/WorksheetPage";
import ActivityRenderer from "@/components/worksheets/ActivityRenderer";
import PrintButton from "@/components/worksheets/PrintButton";

interface PageProps {
  params: Promise<{ itemSlug: string }>;
}

export async function generateStaticParams() {
  return foundationMathsWorksheets.map((ws) => ({ itemSlug: ws.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { itemSlug } = await params;
  const worksheet = getFoundationWorksheet(itemSlug);
  if (!worksheet) return {};
  return {
    title: `${worksheet.title} — Foundation Maths Worksheet`,
    description: worksheet.description,
  };
}

export default async function WorksheetItemPage({ params }: PageProps) {
  const { itemSlug } = await params;
  const worksheet = getFoundationWorksheet(itemSlug);
  if (!worksheet) notFound();

  return (
    <>
      {/* Navigation bar - hidden in print */}
      <div className="no-print border-b border-charcoal/5 bg-warm-white">
        <div className="mx-auto flex max-w-[210mm] items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/worksheets/mathematics/foundation"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-light transition-colors hover:text-charcoal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Worksheets
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* Worksheet content */}
      <div className="bg-cream py-6 print:bg-white print:py-0">
        <WorksheetPage title={worksheet.title} strand={worksheet.strand}>
          {worksheet.activities.map((activity, i) => (
            <ActivityRenderer key={i} activity={activity} number={i + 1} />
          ))}
        </WorksheetPage>
      </div>
    </>
  );
}
