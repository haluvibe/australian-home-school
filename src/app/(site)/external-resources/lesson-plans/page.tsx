import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ResourceCard from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson Plans",
  description:
    "Free and premium lesson plan resources for Australian homeschooling families. English, literacy, mathematics, and numeracy resources aligned to the Australian Curriculum.",
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
          "A huge library of Australian Curriculum-aligned lesson plans, activities, and teaching resources across all subject areas and year levels. Free and premium tiers available.",
      },
      {
        name: "ABC Education",
        url: "https://education.abc.net.au/",
        description:
          "Free educational resources from the ABC covering English, maths, science, history, and more. Includes video lessons, interactive activities, and teacher guides suitable for home educators.",
      },
      {
        name: "Teach Starter",
        url: "https://www.teachstarter.com/au/",
        description:
          "Australian-made teaching resources with lesson plans, unit plans, and activities aligned to the Australian Curriculum. Covers Foundation to Year 6 across all learning areas.",
      },
      {
        name: "Australian Curriculum Lessons",
        url: "https://www.australiancurriculumlessons.com.au/",
        description:
          "Free lesson plans written specifically for the Australian Curriculum. Contributed by educators and organised by subject area, year level, and curriculum code.",
      },
      {
        name: "Scootle",
        url: "https://www.scootle.edu.au/",
        description:
          "A national digital learning repository provided by Education Services Australia. Offers thousands of free digital resources, learning paths, and lesson ideas mapped to the Australian Curriculum.",
      },
      {
        name: "Busy Books Australia",
        url: "https://busybooksaustralia.com.au/",
        description:
          "Australian Curriculum-aligned homeschool plan templates, report templates, and structured lesson planning resources designed specifically for home educating families.",
      },
      {
        name: "Teachers Pay Teachers",
        url: "https://www.teacherspayteachers.com/",
        description:
          "A global marketplace where educators share and sell original teaching resources. Filter by Australian Curriculum to find lesson plans, units of work, and activities created by Australian teachers.",
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
          "An Australian-developed online reading program for ages 2\u201313. Provides structured phonics-based lessons, comprehension activities, and a library of over 3,500 e-books.",
      },
      {
        name: "Storybox Library",
        url: "https://storyboxlibrary.com.au/",
        description:
          "An Australian digital library where well-known authors and illustrators read their stories aloud. Includes teaching notes aligned to the Australian Curriculum for each title.",
      },
      {
        name: "ReadWriteThink",
        url: "https://www.readwritethink.org/",
        description:
          "Free, peer-reviewed lesson plans for reading and language arts from the US National Council of Teachers of English. Rich activities for creative writing, comprehension, and grammar.",
      },
      {
        name: "Storyline Online",
        url: "https://storylineonline.net/",
        description:
          "Free video read-alouds of popular children\u2019s books performed by actors. Each story includes an activity guide with lesson ideas for literacy and creative response.",
      },
      {
        name: "PETAA (Primary English Teaching Association Australia)",
        url: "https://www.petaa.edu.au/",
        description:
          "Australia\u2019s leading English and literacy education body. Publishes teaching resources, professional papers, and unit plans aligned to the Australian English Curriculum.",
      },
    ],
  },
  {
    title: "Mathematics & Numeracy",
    resources: [
      {
        name: "Mathspace",
        url: "https://mathspace.co/",
        description:
          "An Australian adaptive maths platform for Years 3\u201312 aligned to the Australian Curriculum. Provides step-by-step hints, video lessons, and personalised problem sets.",
      },
      {
        name: "Khan Academy \u2014 Maths",
        url: "https://www.khanacademy.org/math",
        description:
          "Free world-class maths lessons from early counting to calculus. Video-based instruction with unlimited practice exercises and progress tracking.",
      },
      {
        name: "Mathletics",
        url: "https://www.mathletics.com/au/",
        description:
          "A popular Australian maths learning platform for students in Foundation to Year 12. Curriculum-aligned activities, adaptive learning paths, and the Live Mathletics challenge feature.",
      },
      {
        name: "NRICH (University of Cambridge)",
        url: "https://nrich.maths.org/",
        description:
          "Free maths enrichment resources from the University of Cambridge. Hundreds of investigative problems, games, and lesson starters that develop mathematical thinking and reasoning.",
      },
      {
        name: "Maths Online",
        url: "https://mathsonline.com.au/",
        description:
          "An Australian online maths tutoring service aligned to the national curriculum. Offers video lessons, worksheets, and progress reports for primary and secondary students.",
      },
      {
        name: "Top Marks \u2014 Maths",
        url: "https://www.topmarks.co.uk/maths-games",
        description:
          "Free interactive maths games and activities covering number, shape, measurement, and data. Especially strong for Foundation to Year 6 learners.",
      },
    ],
  },
  {
    title: "Planning Tools & Templates",
    resources: [
      {
        name: "Homeschool Planet",
        url: "https://homeschoolplanet.com/",
        description:
          "An online homeschool planner for scheduling lessons, tracking assignments, and managing multiple students. Includes a widget library, grading tools, and calendar integration.",
      },
      {
        name: "Trello",
        url: "https://trello.com/",
        description:
          "A free visual project management tool that many homeschoolers use for lesson planning. Create boards for each subject, track weekly plans, and share with co-op groups.",
      },
      {
        name: "Notion",
        url: "https://www.notion.so/",
        description:
          "A flexible workspace app for building customised lesson planners, curriculum trackers, reading logs, and student portfolios with powerful databases and templates.",
      },
      {
        name: "Canva for Education",
        url: "https://www.canva.com/for-teams/education/",
        description:
          "Free access to Canva\u2019s premium features for educators. Create visually engaging lesson plans, worksheets, presentations, and educational posters with drag-and-drop templates.",
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

export default function LessonPlansPage() {
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
            Lesson Plans
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-light/85">
            Curated lesson plan resources for English and Mathematics. From
            Australian Curriculum-aligned units to creative project ideas.
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
            Need help choosing resources?
          </h2>
          <p className="mt-3 text-charcoal-light/85">
            We can help you find the right lesson plans for your child&apos;s
            year level and learning style.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://ainativeschool.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Contact Us
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
