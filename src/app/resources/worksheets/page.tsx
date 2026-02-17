import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ResourceCard from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worksheets — Australian Home School",
  description:
    "Free and premium printable worksheets for Australian homeschooling families. Organised by subject area and suitable for Foundation to Year 10.",
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
        name: "Twinkl Australia \u2014 Worksheets",
        url: "https://www.twinkl.com.au/resources/australian-resources",
        description:
          "Thousands of printable worksheets aligned to the Australian Curriculum across all subject areas. Free and premium options with resources for Foundation to Year 6 and beyond.",
      },
      {
        name: "Teach Starter \u2014 Worksheets",
        url: "https://www.teachstarter.com/au/teaching-resources/type/worksheets/",
        description:
          "Australian-made printable worksheets covering English, maths, science, HASS, and more. Designed for Australian classrooms and aligned to the national curriculum.",
      },
      {
        name: "K5 Learning",
        url: "https://www.k5learning.com/free-worksheets",
        description:
          "Free printable worksheets for kindergarten to Year 5 covering reading, maths, spelling, grammar, and vocabulary. No login required \u2014 just download and print.",
      },
      {
        name: "Education.com \u2014 Worksheets",
        url: "https://www.education.com/worksheets/",
        description:
          "A large library of free printable worksheets organised by subject and year level. Covers maths, reading, writing, science, and social studies from preschool to Year 5.",
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
          "A subscription-based library with thousands of printable worksheets for maths, reading, writing, science, and phonics. Clean layouts suitable for home printing.",
      },
    ],
  },
  {
    title: "English & Literacy",
    resources: [
      {
        name: "Reading Eggs \u2014 Printables",
        url: "https://readingeggs.com.au/articles/category/printable-worksheets",
        description:
          "Free printable literacy worksheets from Reading Eggs covering phonics, sight words, reading comprehension, and writing activities for early learners.",
      },
      {
        name: "Sight Words \u2014 Free Worksheets",
        url: "https://sightwords.com/sight-words/worksheets/",
        description:
          "Free printable worksheets for teaching and practising high-frequency sight words. Includes tracing, writing, and word recognition activities for early readers.",
      },
      {
        name: "K12 Reader",
        url: "https://www.k12reader.com/",
        description:
          "Free reading and writing worksheets covering comprehension, grammar, spelling, vocabulary, and writing prompts. Organised by topic and skill level.",
      },
      {
        name: "Spelling City (VocabularySpellingCity)",
        url: "https://www.spellingcity.com/",
        description:
          "Free and premium spelling and vocabulary activities. Create custom word lists and generate printable worksheets, tests, and games for spelling practice.",
      },
      {
        name: "Have Fun Teaching \u2014 Phonics",
        url: "https://www.havefunteaching.com/worksheets/phonics-worksheets/",
        description:
          "Free printable phonics worksheets covering letter sounds, blends, digraphs, and word families. Clean, black-and-white designs perfect for home printing.",
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
        name: "Mathspace \u2014 Printables",
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
        name: "Maths Online \u2014 Worksheets",
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
    title: "Science",
    resources: [
      {
        name: "CSIRO \u2014 Student Worksheets",
        url: "https://www.csiro.au/en/education",
        description:
          "Free downloadable science worksheets and experiment recording sheets from Australia\u2019s national science agency. Covers biology, chemistry, physics, and earth science.",
      },
      {
        name: "Primary Connections \u2014 Activity Sheets",
        url: "https://www.primaryconnections.org.au/",
        description:
          "Printable student activity sheets from the Australian Academy of Science\u2019s inquiry-based science program. Aligned to the Australian Curriculum: Science.",
      },
      {
        name: "Science Kids",
        url: "https://www.sciencekids.co.nz/worksheets.html",
        description:
          "Free printable science worksheets from a New Zealand-based site covering animals, plants, weather, the human body, space, and general science. Suitable for primary-age students.",
      },
      {
        name: "Cool Australia \u2014 Worksheets",
        url: "https://www.coolaustralia.org/",
        description:
          "Free, curriculum-aligned worksheets focused on sustainability, the environment, and STEM. Student activity sheets accompany each lesson plan.",
      },
      {
        name: "Fizzics Education \u2014 Activity Sheets",
        url: "https://www.fizzicseducation.com.au/",
        description:
          "Free downloadable experiment recording sheets and science investigation templates from an Australian science education provider.",
      },
    ],
  },
  {
    title: "Handwriting & Fine Motor",
    resources: [
      {
        name: "Handwriting Practice (Australian Fonts)",
        url: "https://www.twinkl.com.au/resources/writing-english-resources-australia/handwriting-writing-english-resources-australia",
        description:
          "Printable handwriting worksheets in Australian state-specific fonts (NSW Foundation, Victorian Modern Cursive, QLD Beginners). From Twinkl Australia.",
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
      {
        name: "Your Therapy Source \u2014 Fine Motor",
        url: "https://www.yourtherapysource.com/freehandwriting.html",
        description:
          "Free fine motor and handwriting worksheets designed by a paediatric therapist. Includes cutting practice, pencil control activities, and pre-writing skills sheets.",
      },
    ],
  },
  {
    title: "Humanities & Social Sciences",
    resources: [
      {
        name: "Behind the News (BTN) \u2014 Worksheets",
        url: "https://www.abc.net.au/btn/",
        description:
          "Free downloadable student worksheets accompanying each BTN episode. Covers current events, civics, history, geography, and economics for primary and secondary students.",
      },
      {
        name: "National Geographic Kids \u2014 Activities",
        url: "https://kids.nationalgeographic.com/",
        description:
          "Free downloadable activity sheets, quizzes, and colouring pages covering geography, animals, science, and world cultures. Engaging visuals for primary-age learners.",
      },
      {
        name: "Australian War Memorial \u2014 Activity Sheets",
        url: "https://www.awm.gov.au/learn",
        description:
          "Free downloadable student activity sheets exploring Australia\u2019s military history. Includes primary source analysis, timeline activities, and commemoration projects.",
      },
      {
        name: "National Museum of Australia \u2014 Activities",
        url: "https://www.nma.gov.au/learn",
        description:
          "Free printable activity sheets and investigation guides from the National Museum. Covers Australian history, Indigenous cultures, and social studies themes.",
      },
    ],
  },
  {
    title: "The Arts & Creative",
    resources: [
      {
        name: "Crayola \u2014 Colouring Pages",
        url: "https://www.crayola.com/free-coloring-pages",
        description:
          "Hundreds of free printable colouring pages organised by theme. Covers animals, seasons, holidays, educational topics, and popular characters.",
      },
      {
        name: "Art for Kids Hub",
        url: "https://www.artforkidshub.com/",
        description:
          "Free step-by-step drawing tutorials and printable art worksheets for children of all ages. Follow-along video lessons with downloadable drawing guides.",
      },
      {
        name: "The Imagination Tree",
        url: "https://theimaginationtree.com/",
        description:
          "Creative printables and activity ideas for early years through primary. Includes playdough mats, sensory play guides, and art project templates.",
      },
      {
        name: "Tate Kids",
        url: "https://www.tate.org.uk/kids",
        description:
          "Free art activities, quizzes, and games from the Tate galleries. Includes printable art project guides and virtual gallery exploration activities.",
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
        name: "Busy Bees \u2014 Preschool Worksheets",
        url: "https://www.busybeesfun.com/",
        description:
          "Free printable worksheets for preschool and Foundation learners covering letter recognition, number tracing, shapes, colours, and cutting practice.",
      },
      {
        name: "Teachersmag \u2014 Preschool Printables",
        url: "https://teachersmag.com/worksheets/",
        description:
          "Free printable worksheets for early learners including dot-to-dot, matching, counting, letter formation, and simple science observation sheets.",
      },
      {
        name: "Totschooling",
        url: "https://www.totschooling.net/",
        description:
          "Free printable activities for toddlers, preschoolers, and kindergarteners. Covers name recognition, letter activities, number sense, fine motor skills, and seasonal themes.",
      },
      {
        name: "Twinkl \u2014 EYFS Resources",
        url: "https://www.twinkl.com.au/resources/australian-resources/foundation-year-australian-resources",
        description:
          "Australian Foundation Year worksheets and activity sheets from Twinkl. Covers early literacy, numeracy, and exploratory learning aligned to the Early Years Learning Framework.",
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
          "Free customisable worksheet generators for maths, English, geography, and puzzles. Create tailored practice sheets with adjustable difficulty, font size, and content.",
      },
      {
        name: "Quickworksheets",
        url: "https://quickworksheets.net/",
        description:
          "Free online tool for creating custom worksheets. Generate word searches, crosswords, matching activities, cloze passages, and maths drills with your own content.",
      },
      {
        name: "Canva \u2014 Worksheet Templates",
        url: "https://www.canva.com/worksheets/templates/",
        description:
          "Free, professionally designed worksheet templates you can customise with your own content. Drag-and-drop editor makes it easy to create visually appealing learning materials.",
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
            Printable worksheets and activity sheets organised by subject.
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
              href="/resources/lesson-plans"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Lesson Plans
            </Link>
            <Link
              href="/resources/community"
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
