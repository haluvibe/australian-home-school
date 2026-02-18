import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ResourceCard from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worksheets",
  description:
    "Free and premium printable worksheets for Australian homeschooling families. English, literacy, mathematics, and numeracy worksheets suitable for Foundation to Year 10.",
};

interface Resource {
  name: string;
  url: string;
  description: string;
}

interface ResourceSection {
  title: string;
  resources: Resource[];
}

const sections: ResourceSection[] = [
  {
    title: "Multi-Subject & General",
    resources: [
      {
        name: "Twinkl Australia",
        url: "https://www.twinkl.com.au/",
        description:
          "Thousands of printable worksheets aligned to the Australian Curriculum across all subject areas. Free and premium options with resources for Foundation to Year 6 and beyond.",
      },
      {
        name: "Teach Starter",
        url: "https://www.teachstarter.com/au/",
        description:
          "Australian-made printable worksheets covering English, maths, and more. Designed for Australian classrooms and aligned to the national curriculum.",
      },
      {
        name: "K5 Learning",
        url: "https://www.k5learning.com/free-worksheets",
        description:
          "Free printable worksheets for kindergarten to Year 5 covering reading, maths, spelling, grammar, and vocabulary. No login required \u2014 just download and print.",
      },
      {
        name: "Teachers Pay Teachers \u2014 Free Worksheets",
        url: "https://www.teacherspayteachers.com/browse?price=Free",
        description:
          "Thousands of free downloadable worksheets created by educators worldwide. Filter by Australian Curriculum to find locally relevant resources.",
      },
      {
        name: "Super Teacher Worksheets",
        url: "https://www.superteacherworksheets.com/",
        description:
          "A subscription-based library with thousands of printable worksheets for maths, reading, writing, and phonics. Clean layouts suitable for home printing.",
      },
    ],
  },
  {
    title: "English & Literacy",
    resources: [
      {
        name: "Reading Eggs",
        url: "https://readingeggs.com.au/",
        description:
          "An Australian-developed online reading program for ages 2\u201313 with printable literacy worksheets covering phonics, sight words, reading comprehension, and writing activities.",
      },
      {
        name: "K12 Reader",
        url: "https://www.k12reader.com/",
        description:
          "Free reading and writing worksheets covering comprehension, grammar, spelling, vocabulary, and writing prompts. Organised by topic and skill level.",
      },
      {
        name: "Have Fun Teaching \u2014 Phonics",
        url: "https://www.havefunteaching.com/worksheets/phonics-worksheets/",
        description:
          "Free printable phonics worksheets covering letter sounds, blends, digraphs, and word families. Clean, black-and-white designs perfect for home printing.",
      },
      {
        name: "Donna Young \u2014 Handwriting",
        url: "https://donnayoung.org/penmanship/",
        description:
          "Free printable handwriting paper, lined paper generators, and penmanship worksheets. Customise line size, letter formation guides, and practice sheets.",
      },
      {
        name: "KidZone \u2014 Handwriting",
        url: "https://www.kidzone.ws/tracers/",
        description:
          "Free printable letter tracing worksheets for early writers. Includes uppercase, lowercase, numbers, and custom name tracing generators.",
      },
    ],
  },
  {
    title: "Mathematics & Numeracy",
    resources: [
      {
        name: "Math-Drills",
        url: "https://www.math-drills.com/",
        description:
          "Over 60,000 free printable maths worksheets covering operations, fractions, geometry, measurement, algebra, and statistics. Includes answer keys for self-marking.",
      },
      {
        name: "Mathspace",
        url: "https://mathspace.co/",
        description:
          "An Australian adaptive maths platform for Years 3\u201312. While primarily digital, it offers downloadable practice sheets aligned to the Australian Curriculum.",
      },
      {
        name: "Math Worksheets Land",
        url: "https://www.mathworksheetsland.com/",
        description:
          "Free and premium maths worksheets organised by topic and year level. Covers number sense, operations, fractions, measurement, geometry, and data analysis.",
      },
      {
        name: "Maths Online",
        url: "https://mathsonline.com.au/",
        description:
          "An Australian maths platform offering printable worksheets alongside video lessons. Curriculum-aligned for primary and secondary students.",
      },
      {
        name: "DadsWorksheets",
        url: "https://www.dadsworksheets.com/",
        description:
          "Hundreds of free printable maths worksheets with a focus on arithmetic. Includes multiplication charts, fraction strips, telling time activities, and customisable problem generators.",
      },
      {
        name: "IXL \u2014 Maths Practice",
        url: "https://au.ixl.com/maths/",
        description:
          "An adaptive practice platform aligned to the Australian Curriculum for maths. Interactive questions with printable progress reports. Free daily practice questions available.",
      },
    ],
  },
  {
    title: "Early Learning (Foundation)",
    resources: [
      {
        name: "Starfall",
        url: "https://www.starfall.com/",
        description:
          "Free early literacy and maths activities for pre-readers and beginning readers. Printable worksheets complement the interactive online phonics and number activities.",
      },
      {
        name: "Totschooling",
        url: "https://www.totschooling.net/",
        description:
          "Free printable activities for toddlers, preschoolers, and kindergarteners. Covers name recognition, letter activities, number sense, fine motor skills, and seasonal themes.",
      },
    ],
  },
  {
    title: "Worksheet Generators & Custom Tools",
    resources: [
      {
        name: "WorksheetWorks",
        url: "https://www.worksheetworks.com/",
        description:
          "Free customisable worksheet generators for maths and English. Create tailored practice sheets with adjustable difficulty, font size, and content.",
      },
      {
        name: "Quickworksheets",
        url: "https://quickworksheets.net/",
        description:
          "Free online tool for creating custom worksheets. Generate word searches, crosswords, matching activities, cloze passages, and maths drills with your own content.",
      },
      {
        name: "Wordwall",
        url: "https://wordwall.net/",
        description:
          "Create interactive and printable activities including quizzes, matching games, word searches, and labelled diagrams. Free tier available with community-shared templates.",
      },
      {
        name: "Puzzle Maker (Discovery Education)",
        url: "https://puzzlemaker.discoveryeducation.com/",
        description:
          "Free online tool to create custom word searches, crossword puzzles, and number puzzles. Enter your own vocabulary or topic words to generate printable puzzles instantly.",
      },
    ],
  },
];

function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {resources.map((r) => (
        <ResourceCard
          key={r.url}
          name={r.name}
          url={r.url}
          description={r.description}
        />
      ))}
    </div>
  );
}

export default function WorksheetsPage() {
  const accordionItems = sections.map((section) => ({
    question: section.title,
    answer: <ResourceGrid resources={section.resources} />,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pb-4 pt-16 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-sage/[0.04]" />
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-terracotta/[0.03]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Resources
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            Worksheets
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-light/85">
            Printable English and Maths worksheets and activity sheets.
            Download, print, and start learning.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="pb-24 pt-12 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FAQAccordion items={accordionItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Looking for lesson plans too?
          </h2>
          <p className="mt-3 text-charcoal-light/85">
            Browse our curated collection of lesson plan resources to complement
            your worksheets.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/external-resources/lesson-plans"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Lesson Plans
            </Link>
            <Link
              href="/external-resources/community"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-charcoal/20 hover:bg-warm-white"
            >
              Community Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
