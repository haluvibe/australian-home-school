import Link from "next/link";

const features = [
  {
    title: "Flexible Curriculum",
    description:
      "Adapt learning to your child's pace, interests, and unique strengths. Our guides align with the Australian Curriculum while leaving room for discovery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    title: "State Compliance",
    description:
      "Navigate registration requirements across every state and territory with clear, up-to-date guidance from NSW to WA.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    color: "bg-sage/10 text-sage",
  },
  {
    title: "Community Support",
    description:
      "Connect with thousands of Australian homeschooling families. Share experiences, swap resources, and find local meet-ups.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "bg-golden/15 text-golden",
  },
  {
    title: "Progress Tracking",
    description:
      "Document learning milestones, build portfolios, and generate reports that satisfy state authority requirements with ease.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "bg-terracotta/10 text-terracotta-dark",
  },
];

const testimonials = [
  {
    quote:
      "We were terrified about taking the leap into homeschooling. Australian Home School gave us the confidence and structure we needed while keeping the freedom we wanted.",
    name: "Sarah M.",
    location: "Byron Bay, NSW",
    initials: "SM",
  },
  {
    quote:
      "My son has special needs and the mainstream system wasn't working. The resources here have been life-changing — he's thriving for the first time.",
    name: "David K.",
    location: "Melbourne, VIC",
    initials: "DK",
  },
  {
    quote:
      "As a regional family, access to quality curriculum was always a challenge. Now our kids get the same standard of education without the three-hour bus ride.",
    name: "Lisa & Tom P.",
    location: "Emerald, QLD",
    initials: "LP",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-terracotta/[0.04]" />
          <div className="animate-float-reverse absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-sage/[0.04]" />
          <div className="animate-float absolute right-1/3 bottom-20 h-[200px] w-[200px] rounded-full bg-golden/[0.06]" />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #235F8B 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                For Australian Families
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Nurture Curiosity,{" "}
              <span className="relative">
                <span className="relative z-10">Grow Together</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4 lg:h-5" />
              </span>
            </h1>

            <p className="animate-fade-up delay-200 mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg md:text-xl">
              The trusted platform for Australian families choosing to learn at
              home. Curriculum-aligned resources, state-by-state guidance, and a
              community that understands.
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-terracotta/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/30"
              >
                Start Your Journey
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-charcoal/20 hover:bg-cream"
              >
                Learn More
              </Link>
            </div>

            {/* Social proof */}
            <div className="animate-fade-up delay-500 mt-10 flex items-center gap-4 sm:mt-14">
              <div className="flex -space-x-2.5">
                {["bg-terracotta", "bg-sage", "bg-golden", "bg-terracotta-dark"].map(
                  (bg, i) => (
                    <div
                      key={i}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-warm-white ${bg} text-xs font-bold text-white`}
                    >
                      {["S", "D", "L", "J"][i]}
                    </div>
                  )
                )}
              </div>
              <div className="text-sm text-charcoal-light/80">
                <span className="font-semibold text-charcoal">2,400+</span> families homeschooling with us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-y border-charcoal/5 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-charcoal/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { value: "8", label: "States & territories covered" },
            { value: "1,200+", label: "Curriculum-aligned resources" },
            { value: "98%", label: "Parent satisfaction rate" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 px-6 py-7 text-center sm:py-10">
              <span className="font-display text-3xl font-semibold text-terracotta sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-charcoal-light/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, #235F8B 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Everything you need to teach with confidence
            </h2>
            <p className="mt-4 text-base text-charcoal-light/85 sm:text-lg">
              From structured curriculum to community support, we provide the
              tools Australian families need to deliver outstanding education at
              home.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-charcoal/[0.06] bg-warm-white p-5 transition-all duration-300 hover:border-charcoal/10 hover:shadow-xl hover:shadow-charcoal/[0.03] sm:p-7 lg:p-8"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-light/85">
                  {feature.description}
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="absolute bottom-5 right-5 text-charcoal/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-terracotta/40 sm:bottom-7 sm:right-7 lg:bottom-8 lg:right-8"
                >
                  <path
                    d="M5 10h10m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-charcoal py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 grain-overlay opacity-50" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #FAF6F4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-light">
              Trusted by Families
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Stories from our community
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-cream/[0.06] bg-cream/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-cream/10 hover:bg-cream/[0.05] sm:p-7 lg:p-8"
              >
                {/* Quote mark */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-terracotta/30"
                >
                  <path
                    d="M10.5 18.5C10.5 21.5 8.5 24 5 24V21C7 21 7.5 19.5 7.5 18.5H5V12H12V18.5H10.5ZM23.5 18.5C23.5 21.5 21.5 24 18 24V21C20 21 20.5 19.5 20.5 18.5H18V12H25V18.5H23.5Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/20 text-xs font-bold text-terracotta-light">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream/90">{t.name}</p>
                    <p className="text-xs text-cream/60">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-warm-white py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
            Ready to Begin?
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            Start your homeschooling journey today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-charcoal-light/85 sm:mt-5 sm:text-lg">
            Join thousands of Australian families who&apos;ve chosen a different path.
            Everything you need is right here.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-terracotta/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/30"
            >
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-charcoal-light transition-colors hover:text-terracotta"
            >
              Read the FAQ
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
