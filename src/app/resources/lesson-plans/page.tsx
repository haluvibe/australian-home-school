import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ResourceCard from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson Plans — Australian Home School",
  description:
    "Free and premium lesson plan resources for Australian homeschooling families. Organised by subject area and aligned to the Australian Curriculum.",
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
        name: "Education.com",
        url: "https://www.education.com/lesson-plans/",
        description:
          "A large collection of free lesson plans organised by subject and year level. While US-based, many resources are easily adapted for Australian homeschoolers.",
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
    title: "Science",
    resources: [
      {
        name: "CSIRO Education",
        url: "https://www.csiro.au/en/education",
        description:
          "Free STEM education resources from Australia\u2019s national science agency. Includes lesson plans, experiment guides, videos, and the popular CREST Awards program for student-led investigations.",
      },
      {
        name: "Primary Connections (Australian Academy of Science)",
        url: "https://www.primaryconnections.org.au/",
        description:
          "Inquiry-based science units developed by the Australian Academy of Science. Aligned to the Australian Curriculum: Science and covering biological, chemical, earth and physical sciences.",
      },
      {
        name: "Fizzics Education",
        url: "https://www.fizzicseducation.com.au/",
        description:
          "An Australian science education provider offering free experiment guides, lesson plans, and hands-on activity ideas across all science strands for primary and secondary students.",
      },
      {
        name: "Cool Australia",
        url: "https://www.coolaustralia.org/",
        description:
          "Free, curriculum-aligned lesson plans focused on sustainability, the environment, and STEM. Resources cover science, geography, and cross-curricular sustainability themes.",
      },
      {
        name: "Science by Doing",
        url: "https://www.sciencebydoing.edu.au/",
        description:
          "Free online science units for Years 7\u201310 from the Australian Academy of Science. Interactive lessons with investigations, videos, and student workbooks.",
      },
    ],
  },
  {
    title: "Humanities & Social Sciences (HASS)",
    resources: [
      {
        name: "Behind the News (BTN)",
        url: "https://www.abc.net.au/btn/",
        description:
          "The ABC\u2019s long-running news program for young Australians. Free lesson plans, discussion prompts, and classroom activities accompany each episode, covering civics, history, geography, and current events.",
      },
      {
        name: "National Geographic Education",
        url: "https://education.nationalgeographic.org/",
        description:
          "Free geography, history, and science resources with stunning visuals. Includes lesson plans, mapping activities, and explorer stories adaptable for Australian homeschoolers.",
      },
      {
        name: "Australian War Memorial \u2014 Education",
        url: "https://www.awm.gov.au/learn",
        description:
          "Free primary and secondary education resources covering Australia\u2019s military history. Includes virtual tours, primary sources, and lesson plans aligned to the Australian Curriculum: History.",
      },
      {
        name: "National Museum of Australia \u2014 Learning",
        url: "https://www.nma.gov.au/learn",
        description:
          "Free digital resources exploring Australian history, Indigenous culture, and society. Includes online exhibitions, classroom activities, and inquiry-based learning modules.",
      },
      {
        name: "Civics and Citizenship Education",
        url: "https://www.civicsandcitizenship.edu.au/",
        description:
          "Free teaching resources for Australian civics education covering democracy, government, law, and citizen participation. Aligned to the Australian Curriculum: Civics and Citizenship.",
      },
    ],
  },
  {
    title: "The Arts & Creative",
    resources: [
      {
        name: "Art Gallery of NSW \u2014 Learning",
        url: "https://www.artgallery.nsw.gov.au/learn/",
        description:
          "Free education resources and virtual tours from one of Australia\u2019s leading art galleries. Includes artist profiles, guided looking activities, and project ideas for visual arts education.",
      },
      {
        name: "NGV (National Gallery of Victoria) \u2014 Learn",
        url: "https://www.ngv.vic.gov.au/learn/",
        description:
          "Free resources from the NGV including virtual exhibitions, student activity sheets, and arts lesson plans suitable for primary and secondary home learners.",
      },
      {
        name: "Deep Space Sparkle",
        url: "https://www.deepspacesparkle.com/",
        description:
          "Art lesson plans organised by year level and art element. Step-by-step project guides with material lists, technique tips, and curriculum connections for visual arts education.",
      },
      {
        name: "Music Australia \u2014 Education",
        url: "https://musicaustralia.org.au/discover/education/",
        description:
          "A national music education hub connecting families to music learning resources, lesson ideas, and programs across Australia for all ages and abilities.",
      },
      {
        name: "Artsology",
        url: "https://www.artsology.com/",
        description:
          "Free interactive art games, quizzes, and creative activities for young learners. Covers art history, famous artists, and hands-on art-making projects.",
      },
    ],
  },
  {
    title: "Health & Physical Education",
    resources: [
      {
        name: "Sporting Schools",
        url: "https://www.sportingschools.gov.au/",
        description:
          "An Australian Government initiative offering free sport-based programs and coaching resources. While school-focused, the activity guides and sport resources are useful for home PE planning.",
      },
      {
        name: "Life Education",
        url: "https://www.lifeeducation.org.au/",
        description:
          "Australia\u2019s largest health education provider for children. Offers digital resources, parent guides, and lesson activities covering nutrition, safety, wellbeing, and drug education.",
      },
      {
        name: "GoNoodle",
        url: "https://www.gonoodle.com/",
        description:
          "Free movement and mindfulness videos for children. Short activities perfect for brain breaks, indoor PE sessions, and daily physical activity in your home learning schedule.",
      },
      {
        name: "Resilience, Rights and Respectful Relationships",
        url: "https://fuse.education.vic.gov.au/ResourcePackage/ByPin/2JZX4R",
        description:
          "Free social and emotional learning resources from the Victorian Department of Education. Eight topic areas with lesson plans covering stress management, help-seeking, and positive relationships.",
      },
    ],
  },
  {
    title: "Technologies & Digital Literacy",
    resources: [
      {
        name: "Digital Technologies Hub",
        url: "https://www.digitaltechnologieshub.edu.au/",
        description:
          "The official Australian resource hub for the Digital Technologies curriculum. Free lesson plans, scope and sequences, and classroom activities from Foundation to Year 10.",
      },
      {
        name: "Scratch (MIT)",
        url: "https://scratch.mit.edu/",
        description:
          "A free visual programming platform from MIT for ages 8\u201316. Create interactive stories, games, and animations while learning coding concepts. Huge library of community-shared projects and tutorials.",
      },
      {
        name: "Code.org",
        url: "https://code.org/",
        description:
          "Free coding courses and activities for all ages. Includes the popular Hour of Code activities, full CS Fundamentals course for primary students, and app development for secondary.",
      },
      {
        name: "Grok Academy",
        url: "https://grokacademy.org/",
        description:
          "An Australian platform offering free coding and digital technologies courses for primary and secondary students. Hosts the annual Australian Informatics Competition and NCSS Challenge.",
      },
      {
        name: "Bee-Bot / Blue-Bot Activities",
        url: "https://www.bee-bot.us/activities.html",
        description:
          "Free printable mats and activity ideas for Bee-Bot and Blue-Bot programmable robots. Ideal for Foundation to Year 2 students learning sequencing, algorithms, and directional language.",
      },
    ],
  },
  {
    title: "Languages",
    resources: [
      {
        name: "Duolingo",
        url: "https://www.duolingo.com/",
        description:
          "A free, gamified language learning platform with courses in 40+ languages. Short daily lessons make it easy to integrate language learning into your homeschool routine.",
      },
      {
        name: "Languages Online (Victorian DEECD)",
        url: "https://www.languagesonline.org.au/",
        description:
          "Free interactive language learning activities from the Victorian Department of Education. Covers French, German, Italian, Indonesian, Japanese, Chinese, Spanish, and more.",
      },
      {
        name: "SBS Learn",
        url: "https://www.sbs.com.au/learn/",
        description:
          "Free language and cultural learning resources from SBS. Includes beginner audio courses in 68 languages, cultural documentaries, and multilingual news suitable for language studies.",
      },
      {
        name: "Education Perfect \u2014 Languages",
        url: "https://www.educationperfect.com/languages/",
        description:
          "An Australian platform offering structured language courses in Japanese, French, Chinese, Indonesian, Italian, Spanish, German, and more. Curriculum-aligned with listening, reading, and writing activities.",
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
        name: "Notion \u2014 Homeschool Templates",
        url: "https://www.notion.so/templates/category/education",
        description:
          "Free education templates for the Notion workspace app. Build customised lesson planners, curriculum trackers, reading logs, and student portfolios with flexible databases.",
      },
      {
        name: "Canva for Education",
        url: "https://www.canva.com/education/",
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
            Curated lesson plan resources organised by subject area. From
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Contact Us
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
