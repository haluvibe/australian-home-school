import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Australian Home Schooling",
  description:
    "Privacy policy for Australian Home Schooling. Learn how we collect, use, and protect your personal information.",
};

const lastUpdated = "17 February 2026";

export default function PrivacyPage() {
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
            Privacy Policy
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
                Introduction
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                Australian Home Schooling (&quot;we&quot;, &quot;our&quot;, or
                &quot;us&quot;) is committed to protecting the privacy of our
                users. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website australianhomeschool.com.au and use our services.
              </p>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                By using our website, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with the terms of this policy, please do not access the site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Information We Collect
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We may collect information about you in a variety of ways. The
                information we may collect via the website includes:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
                  <p className="font-semibold text-charcoal">Personal Data</p>
                  <p className="mt-1 text-base text-charcoal-light/85">
                    When you voluntarily provide it to us, we may collect
                    personally identifiable information such as your name and
                    email address, for example when you contact us through our
                    contact form or sign up for our newsletter.
                  </p>
                </div>
                <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
                  <p className="font-semibold text-charcoal">Usage Data</p>
                  <p className="mt-1 text-base text-charcoal-light/85">
                    We may automatically collect certain information when you
                    visit our website, including your IP address, browser type,
                    operating system, referring URLs, pages viewed, and the dates
                    and times of your visits.
                  </p>
                </div>
                <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
                  <p className="font-semibold text-charcoal">
                    Cookies and Tracking
                  </p>
                  <p className="mt-1 text-base text-charcoal-light/85">
                    We may use cookies, web beacons, and similar tracking
                    technologies to collect information about your browsing
                    activities. You can set your browser to refuse all or some
                    cookies, or to alert you when cookies are being sent.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                How We Use Your Information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal-light/85">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To provide, operate, and maintain our website and services
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To improve, personalise, and expand our website
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To understand and analyse how you use our website
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To respond to your enquiries and provide customer support
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To send you updates, newsletters, and marketing
                  communications (with your consent)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To detect, prevent, and address technical issues
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Sharing Your Information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties except in the
                following circumstances:
              </p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal-light/85">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  With trusted third-party service providers who assist us in
                  operating our website (e.g., hosting, analytics)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  When required by law, regulation, or legal process
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/50" />
                  To protect our rights, privacy, safety, or property
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Data Security
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We use reasonable administrative, technical, and physical
                security measures to protect your personal information. However,
                no method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Third-Party Links
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                Our website contains links to third-party websites and resources.
                We are not responsible for the privacy practices or content of
                these external sites. We encourage you to read the privacy
                policies of any third-party site you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Children&apos;s Privacy
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                Our website is intended for use by parents and guardians. We do
                not knowingly collect personal information from children under 13
                without parental consent. If you believe we have collected
                information from a child, please contact us immediately and we
                will take steps to remove that information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Australian Privacy Act
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We comply with the Australian Privacy Principles (APPs)
                contained in the Privacy Act 1988 (Cth). You have the right to
                access, correct, or request deletion of your personal
                information held by us. To make such a request, please contact us
                using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Changes to This Policy
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Contact Us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light/85">
                If you have questions or concerns about this Privacy Policy,
                please{" "}
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
