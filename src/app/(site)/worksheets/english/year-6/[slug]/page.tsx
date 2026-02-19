import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { year6EnglishWorksheets, getYear6EnglishWorksheet } from "@/lib/worksheet-data-english-year6";
import WorksheetPage from "@/components/worksheets/WorksheetPage";
import ActivityRenderer from "@/components/worksheets/ActivityRenderer";
import PrintButton from "@/components/worksheets/PrintButton";
import NextStepsSection from "@/components/worksheets/NextStepsSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return year6EnglishWorksheets.map((ws) => ({ slug: ws.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const worksheet = getYear6EnglishWorksheet(slug);
  if (!worksheet) return {};
  return {
    title: `${worksheet.title} — Year 6 English Worksheet`,
    description: worksheet.description,
    keywords: [`${worksheet.title}`, "free printable worksheet", "Australian Curriculum", "homeschool worksheet"],
    alternates: { canonical: `/worksheets/english/year-6/${slug}` },
    openGraph: {
      title: `${worksheet.title} — Year 6 English Worksheet | AI Native School`,
      description: worksheet.description,
      url: `/worksheets/english/year-6/${slug}`,
    },
  };
}

export default async function WorksheetItemPage({ params }: PageProps) {
  const { slug } = await params;
  const worksheet = getYear6EnglishWorksheet(slug);
  if (!worksheet) notFound();

  const nextStepWorksheets = (worksheet.nextSteps ?? [])
    .map((step) => year6EnglishWorksheets.find((w) => w.slug === step))
    .filter((w): w is typeof worksheet => w !== undefined);

  return (
    <>
      {/* Navigation bar - hidden in print */}
      <div className="no-print border-b border-charcoal/5 bg-warm-white">
        <div className="mx-auto flex max-w-[210mm] items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/worksheets/english/year-6"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-light transition-colors hover:text-charcoal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Worksheets
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="https://ainativeschool.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-3 text-sm font-medium text-charcoal-light transition-all duration-200 hover:border-terracotta/30 hover:text-terracotta"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Report a Mistake
            </Link>
            <PrintButton filename={`year6-english-${worksheet.slug}`} />
          </div>
        </div>
      </div>

      {/* Worksheet content */}
      <div className="bg-cream py-6 print:bg-white print:py-0">
        <WorksheetPage title={worksheet.title} strand={worksheet.strand} learningGuide={worksheet.learningGuide} lesson={worksheet.lesson}>
          {worksheet.activities.map((activity, i) => (
            <ActivityRenderer key={i} activity={activity} number={i + 1} />
          ))}
        </WorksheetPage>
      </div>
      <NextStepsSection nextSteps={nextStepWorksheets} basePath="/worksheets/english/year-6" />
    </>
  );
}
