import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ResourceCard from "@/components/ResourceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Resources — Australian Home Schooling",
  description:
    "A curated directory of homeschooling support groups, curriculum providers, and community resources across every Australian state and territory.",
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
    title: "National (Australia-wide)",
    resources: [
      {
        name: "Home Education Association (HEA)",
        url: "https://www.hea.edu.au/",
        description:
          "Australia\u2019s national peak home education body. A volunteer-run, not-for-profit charity offering advocacy, a free phone helpline (1300 72 99 91), registration support in every state, and educational discounts for members.",
      },
      {
        name: "Home Education Network (HEN)",
        url: "https://home-ed.vic.edu.au/",
        description:
          "Australia\u2019s longest-running home education support group (est. 1980). Publishes Otherways magazine and provides events, camps, email support, and Facebook communities.",
      },
      {
        name: "Home Education in Australia",
        url: "https://homeedinaustralia.org/",
        description:
          "A volunteer-run social media suite of forums supporting current and prospective home educators across Australia. Hosts state-specific and topic-specific Facebook groups.",
      },
      {
        name: "Fearless Homeschool",
        url: "https://fearlesshomeschool.com/",
        description:
          "An Australian homeschool blog and membership community (est. 2016) helping parents gain confidence. Offers workshops, the Australian Homeschooling Summit recordings, and a newsletter reaching 9,000+ parents.",
      },
      {
        name: "The Educating Parent",
        url: "https://theeducatingparent.com/",
        description:
          "A long-standing Australian home education resource by author Beverley Paine. Offers practical guidance for writing your own curriculum and understanding home education approaches.",
      },
      {
        name: "How Do I Homeschool",
        url: "https://howdoihomeschool.com/",
        description:
          "A comprehensive resource site covering homeschool methods, curriculum reviews, state-by-state group directories, and getting-started guides for Australian families.",
      },
      {
        name: "Design Your Homeschool",
        url: "https://www.design-your-homeschool.com/",
        description:
          "Run by a family homeschooling since 1990. Provides tools, ideas, and a comprehensive directory of homeschool groups organised by Australian state and territory.",
      },
      {
        name: "Homeschool Hall",
        url: "https://app.homeschoolhall.com/",
        description:
          "An Australian community platform functioning as a directory and networking hub for homeschooling curricula, support organisations, and regional community groups.",
      },
      {
        name: "Australian Curriculum (ACARA)",
        url: "https://www.australiancurriculum.edu.au/",
        description:
          "The official Australian national curriculum developed by ACARA. Free access to curriculum frameworks, learning area resources, and achievement standards used by many home educators for planning.",
      },
      {
        name: "Free2Homeschool",
        url: "https://free2homeschool.org/",
        description:
          "A grassroots advocacy initiative of home-educating parents and professionals that campaigns to maintain educational rights and choice around home education in Australia.",
      },
    ],
  },
  {
    title: "New South Wales",
    resources: [
      {
        name: "NSW Government \u2014 Home Schooling",
        url: "https://www.nsw.gov.au/education-and-training/home-schooling",
        description:
          "The official NSW Government page for home schooling information, registration contacts, and support organisation listings.",
      },
      {
        name: "NESA \u2014 Home Schooling Registration",
        url: "https://educationstandards.nsw.edu.au/wps/portal/nesa/regulation/home-schooling",
        description:
          "NSW Education Standards Authority page for home schooling registration details, requirements, and the Home Schooling Unit contact.",
      },
      {
        name: "HEA NSW",
        url: "https://www.hea.edu.au/nsw",
        description:
          "The Home Education Association\u2019s NSW-specific page offering registration support, local contacts, and state-specific guidance.",
      },
      {
        name: "Sydney Home Education Network (SHEN)",
        url: "https://shen.org.au/",
        description:
          "A non-profit organisation for Sydney-based home educators. Provides insurance cover for volunteer-run events, sports carnivals, excursions, group discounts, and an exclusive newsletter.",
      },
      {
        name: "Central Coast Home Educators",
        url: "https://app.homeschoolhall.com/l/central-coast-home-educators-cchomeed-community",
        description:
          "A community group for home educators on the Central Coast of NSW to connect, find support, and organise activities and events.",
      },
    ],
  },
  {
    title: "Victoria",
    resources: [
      {
        name: "VRQA \u2014 Home Education",
        url: "https://www2.vrqa.vic.gov.au/home-education",
        description:
          "The Victorian Registration and Qualifications Authority\u2019s official home education page covering registration, learning plans, and compliance requirements.",
      },
      {
        name: "Home Education Network (HEN)",
        url: "https://home-ed.vic.edu.au/",
        description:
          "Victoria\u2019s largest home education support group. Runs events, camps, publishes Otherways magazine, and maintains a directory of local groups across Victoria.",
      },
      {
        name: "HEN Groups Directory",
        url: "https://home-ed.vic.edu.au/groups/",
        description:
          "HEN\u2019s directory of local homeschool groups across Victoria, including activity groups, Christian homeschoolers, nature-based groups, and regional meetups.",
      },
      {
        name: "HEA Victoria",
        url: "https://www.hea.edu.au/state-information",
        description:
          "The Home Education Association\u2019s state information page with Victoria-specific registration support and guidance.",
      },
      {
        name: "Homeedventure",
        url: "https://homeedventure.com.au/",
        description:
          "A Victorian resource offering guidance on how to start homeschooling in Victoria, with practical step-by-step registration information.",
      },
    ],
  },
  {
    title: "Queensland",
    resources: [
      {
        name: "Education Queensland \u2014 Home Education",
        url: "https://education.qld.gov.au/schools-educators/other-education/home-education",
        description:
          "The official Queensland Government home education page covering registration, reporting requirements, and the Home Education Unit.",
      },
      {
        name: "HEA Queensland",
        url: "https://www.hea.edu.au/qld",
        description:
          "The Home Education Association\u2019s Queensland-specific page offering registration support and state guidance.",
      },
      {
        name: "Home Education QLD Inc",
        url: "https://homeeducationqld.org/",
        description:
          "A Queensland-based incorporated association providing member discounts on resources, event listings, private forums, camps, homeschool activities, and education workshops.",
      },
      {
        name: "Free2Homeschool QLD",
        url: "https://free2homeschool.org/",
        description:
          "A grassroots advocacy group particularly active in Queensland, responding to proposed legislative changes affecting home education.",
      },
      {
        name: "QLD Home Education Unit Review",
        url: "https://alt-qed.qed.qld.gov.au/programs-initiatives/department/queensland-home-education-unit-review",
        description:
          "Queensland Government page for the ongoing review of the Home Education Unit, relevant for families tracking regulatory changes.",
      },
    ],
  },
  {
    title: "Western Australia",
    resources: [
      {
        name: "Home Education WA (HEWA)",
        url: "https://hewa.wa.edu.au/",
        description:
          "A not-for-profit, volunteer-run organisation dedicated to supporting home-educating families in WA. Provides curated resources, an active Facebook group, and information on additional needs support.",
      },
      {
        name: "HEA Western Australia",
        url: "https://www.hea.edu.au/wa",
        description:
          "The Home Education Association\u2019s WA-specific page offering registration support, local contacts, and state-specific guidance.",
      },
      {
        name: "HEWA Online Groups Directory",
        url: "https://hewa.wa.edu.au/external-resources/online-groups/",
        description:
          "HEWA\u2019s directory of online support groups across WA, including regional groups for Perth, Great Southern, Wheatbelt, and specialised groups for kids with extra needs.",
      },
    ],
  },
  {
    title: "South Australia",
    resources: [
      {
        name: "HEA South Australia",
        url: "https://www.hea.edu.au/sa",
        description:
          "The Home Education Association\u2019s SA-specific page with registration support and state information. In SA, families apply for an exemption from school enrolment to home educate.",
      },
      {
        name: "SA Home Education Groups",
        url: "https://www.design-your-homeschool.com/homeschool-groups-sa-australia.html",
        description:
          "A directory of South Australian homeschool groups, including Adelaide-based meetups and regional support networks.",
      },
    ],
  },
  {
    title: "Tasmania",
    resources: [
      {
        name: "Office of the Education Registrar",
        url: "https://oer.tas.gov.au/home-education/",
        description:
          "The official Tasmanian Government page for home education registration. Contact: registrar@oer.tas.gov.au or phone 6165 6135.",
      },
      {
        name: "Tasmanian Home Education Advisory Council (THEAC)",
        url: "https://theac.tas.gov.au/",
        description:
          "Established in 1993 to advise the Minister for Education on home education matters and to register and monitor individual home education programs.",
      },
      {
        name: "HEA Tasmania",
        url: "https://www.hea.edu.au/tas",
        description:
          "The Home Education Association\u2019s Tasmania-specific page with registration support and state-specific guidance.",
      },
      {
        name: "Home School Hobart",
        url: "https://homeschoolhobart.weebly.com/",
        description:
          "A resource for families interested in home education in the Hobart and Southern Tasmania area, connecting local homeschooling families.",
      },
      {
        name: "Huon Valley Homeschool Group",
        url: "https://www.huonvalleytas.com/service/huon-valley-homeschool-group/",
        description:
          "A local group meeting fortnightly on Thursdays at the Ranelagh Show Grounds for play, craft activities, and parent support.",
      },
    ],
  },
  {
    title: "Northern Territory",
    resources: [
      {
        name: "NT Government \u2014 Home Education",
        url: "https://nt.gov.au/learning/primary-and-secondary-students/home-education",
        description:
          "Official NT Government home education page. Families must apply for approval annually from the NT Department of Education and Training.",
      },
      {
        name: "HEA Northern Territory",
        url: "https://www.hea.edu.au/nt",
        description:
          "The Home Education Association\u2019s NT-specific page with registration support and territory-specific guidance.",
      },
      {
        name: "NT Homeschool Groups Directory",
        url: "https://www.design-your-homeschool.com/homeschool-groups-nt-australia.html",
        description:
          "A directory of Northern Territory homeschool groups, including the Darwin Montessori Homeschool Co-op which uses Montessori methods.",
      },
    ],
  },
  {
    title: "Australian Capital Territory",
    resources: [
      {
        name: "ACT Government \u2014 Home Education",
        url: "https://www.act.gov.au/education-and-training/find-a-school-and-enrol/home-education-home-schooling",
        description:
          "Official ACT Government home education page. Registration is legally required for children aged 5\u201317 who are not enrolled in school or distance education.",
      },
      {
        name: "HEA ACT",
        url: "https://www.hea.edu.au/act",
        description:
          "The Home Education Association\u2019s ACT-specific page with registration support and territory-specific guidance.",
      },
      {
        name: "ACT Home Learning Resources",
        url: "https://sites.google.com/ed.act.edu.au/act-home-learning/resources-to-support-home-learning",
        description:
          "ACT Education resources hub providing support materials for home learning.",
      },
    ],
  },
  {
    title: "Curriculum Providers (Australia-wide)",
    resources: [
      {
        name: "Euka Future Learning",
        url: "https://euka.edu.au/",
        description:
          "Australia\u2019s leading K\u201312 online homeschool provider. Offers a secular, self-paced program aligned to each state\u2019s curriculum, with teacher support, assessment marking, and registration assistance.",
      },
      {
        name: "My Homeschool",
        url: "https://myhomeschool.com/",
        description:
          "A Christian Australian homeschool community offering a blended learning curriculum from PreK to Year 10 based on the Australian Curriculum and Charlotte Mason philosophy.",
      },
      {
        name: "Simply Homeschool",
        url: "https://simplyhomeschool.com.au/",
        description:
          "Provides 100+ book-based core programs aligned to the Australian Curriculum for ages 4\u201317, plus online classes, camps, and registration support. Designed for neurodiverse learners and multi-age families.",
      },
      {
        name: "Australian Christian Home Schooling (ACHS)",
        url: "https://www.achs.edu.au/",
        description:
          "The oldest and largest Christian home schooling support provider in Australia (30+ years). Uses the ACE curriculum with Australian-specific history, geography, and maths courses.",
      },
      {
        name: "Logos Australis (Via Classica)",
        url: "https://logosaustralis.com/",
        description:
          "Australia\u2019s first classical homeschool curriculum, founded by veteran educator Elizabeth Matheson. Focuses on the Liberal Arts tradition through literature, art, history, and music.",
      },
      {
        name: "Education Perfect",
        url: "https://www.educationperfect.com/",
        description:
          "An online learning platform with 40,000+ lessons for ages 9\u201318 across core subjects and languages. Aligned to Australian state curricula, with up to 5 learner accounts per family subscription.",
      },
    ],
  },
  {
    title: "International",
    resources: [
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org/",
        description:
          "A free, world-class education platform offering video lessons and practice exercises in math, science, history, economics, and more. Widely used by Australian homeschoolers as a supplementary resource.",
      },
      {
        name: "Easy Peasy All-in-One Homeschool",
        url: "https://allinonehomeschool.com/",
        description:
          "A completely free online homeschool curriculum for all levels and subjects, designed for 180 days using free internet resources. Popular with Australian families on a budget.",
      },
      {
        name: "HSLDA",
        url: "https://hslda.org/",
        description:
          "A US-based international homeschool legal advocacy organisation offering membership with legal aid, attorney access, and online academy courses for high schoolers.",
      },
      {
        name: "Wolsey Hall Oxford",
        url: "https://wolseyhalloxford.org.uk/",
        description:
          "One of the world\u2019s longest-established homeschooling colleges (est. 1894), based in Oxford, England. Offers Cambridge IGCSE and A-Level courses with exam centres in Sydney, Perth, and Canberra.",
      },
      {
        name: "Crimson Global Academy",
        url: "https://www.crimsonglobalacademy.school/",
        description:
          "An online school offering personalised learning, extracurriculars, and various international curricula for students aged 7\u201318, with a presence in Australia.",
      },
      {
        name: "SchoolhouseTeachers.com",
        url: "https://schoolhouseteachers.com/",
        description:
          "A complete PreK\u201312 curriculum library with hundreds of parent-led courses in core subjects, electives, and Bible-based studies. Offers an international/Australia-specific section.",
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

export default function CommunityResourcesPage() {
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
            Community
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            Community Resources
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-light/85">
            A curated directory of homeschooling support groups, curriculum
            providers, and communities across Australia.
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
            Know a resource we should add?
          </h2>
          <p className="mt-3 text-charcoal-light/85">
            Help us build the most comprehensive homeschooling directory in
            Australia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Suggest a Resource
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-charcoal/20 hover:bg-warm-white"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
