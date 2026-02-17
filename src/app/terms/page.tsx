import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Australian Home Schooling",
  description:
    "Terms of service for Australian Home Schooling. Read our terms and conditions for using our website and services.",
};

const lastUpdated = "17 February 2026";

export default function TermsPage() {
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
            Legal
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-light/85">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 pt-12 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-custom space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Agreement to Terms
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                By accessing or using the Australian Home Schooling website
                (&quot;the Site&quot;), you agree to be bound by these Terms of
                Service. If you do not agree to all the terms and conditions,
                please do not use the Site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Description of Service
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                Australian Home Schooling provides educational information,
                curriculum resources, community links, and tools to support
                homeschooling families in Australia. Our services include curated
                resource directories, curriculum breakdowns, lesson plan
                references, and community support listings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Use of the Site
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                You agree to use the Site only for lawful purposes and in a way
                that does not infringe the rights of others or restrict their use
                of the Site. You must not:
              </p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal-light/85">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  Use the Site in any way that breaches any applicable local,
                  state, or federal law or regulation
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  Attempt to gain unauthorised access to any part of the Site
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  Use automated systems or software to extract data from the
                  Site (scraping)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  Reproduce, duplicate, or copy any material from the Site for
                  commercial purposes without permission
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                AI-Generated Content Disclaimer
              </h2>
              <div className="mt-3 rounded-xl border border-terracotta/20 bg-terracotta/[0.04] px-5 py-3.5">
                <p className="text-base font-medium leading-relaxed text-charcoal">
                  All content on this Site, including worksheets, curriculum
                  summaries, activity descriptions, and educational materials,
                  has been generated with the assistance of artificial
                  intelligence (AI). While we review content for quality, AI-generated
                  material can contain mistakes, inaccuracies, or
                  outdated information.
                </p>
                <p className="mt-2 text-base leading-relaxed text-charcoal-light/85">
                  We encourage parents and educators to review all materials
                  before use and to verify any information against official
                  curriculum documents from the Australian Curriculum,
                  Assessment and Reporting Authority (ACARA). If you spot an
                  error, please{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-terracotta underline decoration-terracotta/30 transition-colors hover:text-terracotta-dark hover:decoration-terracotta"
                  >
                    report it to us
                  </Link>{" "}
                  so we can correct it.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Educational Information Disclaimer
              </h2>
              <div className="mt-3 rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
                <p className="text-base leading-relaxed text-charcoal-light/85">
                  The information provided on this Site is for general
                  informational and educational purposes only. While we strive
                  for accuracy, we make no guarantees that the information is
                  complete, current, or applicable to your specific
                  circumstances. Homeschooling regulations vary by state and
                  territory and may change over time. Always verify requirements
                  directly with your state or territory&apos;s education
                  authority.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Third-Party Links & Resources
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                The Site contains links to third-party websites, resources, and
                services that are not owned or controlled by us. We have no
                control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party websites. Our
                inclusion of links to external resources does not constitute an
                endorsement or recommendation.
              </p>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                You acknowledge and agree that we shall not be responsible or
                liable, directly or indirectly, for any damage or loss caused by
                the use of any content, goods, or services available on or
                through any third-party websites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Intellectual Property
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                The Site and its original content, features, and functionality
                are owned by Australian Home Schooling and are protected by
                Australian and international copyright, trademark, and other
                intellectual property laws. Curriculum content referenced on the
                Site is sourced from the Australian Curriculum, Assessment and
                Reporting Authority (ACARA) and is used in accordance with their
                terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Limitation of Liability
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                To the maximum extent permitted by Australian law, Australian
                Home School and its operators shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, or
                other intangible losses, resulting from your use of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Indemnification
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                You agree to indemnify and hold harmless Australian Home Schooling
                and its operators from any claims, losses, or damages, including
                legal fees, arising out of your use or misuse of the Site or your
                violation of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Governing Law
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                These Terms shall be governed by and construed in accordance with
                the laws of Australia. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                Australia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Changes to These Terms
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We reserve the right to modify or replace these Terms at any
                time. Material changes will be posted on this page with an
                updated revision date. Your continued use of the Site after any
                changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Contact Us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                If you have questions about these Terms of Service, please{" "}
                <Link
                  href="/contact"
                  className="font-medium text-terracotta underline decoration-terracotta/30 transition-colors hover:text-terracotta-dark hover:decoration-terracotta"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
