import Link from "next/link";

const footerLinks = {
  Curriculum: [
    { label: "Curriculum Overview", href: "/curriculum" },
    { label: "Official Downloads", href: "https://www.australiancurriculum.edu.au/downloads/learning-areas", external: true },
  ],
  "External Resources": [
    { label: "Lesson Plans", href: "/external-resources/lesson-plans" },
    { label: "Worksheets", href: "/external-resources/worksheets" },
    { label: "Community", href: "/external-resources/community" },
  ],
  Company: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-terracotta">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2C7 2 4 6 4 10c0 3 1.5 5 3 6.5V22h10v-5.5c1.5-1.5 3-3.5 3-6.5 0-4-3-8-8-8z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <path
                    d="M12 2c-1 3-1 5 0 8 1-3 3-5 6-6-2 3-3 5-2 8 0-4-1.5-6-4-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-cream">
                Australian Home Schooling
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Supporting Australian families on their homeschooling journey with curriculum, resources, and community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cream/65 transition-colors hover:text-terracotta-light"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-cream/65 transition-colors hover:text-terracotta-light"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Australian Home Schooling. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-cream/50 transition-colors hover:text-cream/60">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-cream/50 transition-colors hover:text-cream/60">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
