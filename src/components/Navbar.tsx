"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface DropdownConfig {
  tagline: string;
  items: DropdownItem[];
}

const curriculumSubjects = [
  {
    label: "English",
    href: "/curriculum?subject=english",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    label: "Mathematics",
    href: "/curriculum?subject=mathematics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M4 4l4 4M16 4l4 4M4 16l4 4M16 16l4 4" />
      </svg>
    ),
  },
];

const dropdowns: Record<string, DropdownConfig> = {
  "External Resources": {
    tagline: "Everything you need\nto teach with confidence",
    items: [
      {
        label: "Lesson Plans",
        href: "/external-resources/lesson-plans",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        ),
      },
      {
        label: "Worksheets",
        href: "/external-resources/worksheets",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        ),
      },
      {
        label: "Community",
        href: "/external-resources/community",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Curriculum", href: "#", hasDropdown: true },
  { label: "External Resources", href: "#", hasDropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 shadow-[0_1px_0_0_rgba(35,95,139,0.08)] backdrop-blur-md"
          : "bg-warm-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-terracotta transition-transform duration-300 group-hover:scale-105">
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
              <path
                d="M12 10c-1 2-3 3-5 3 2 1 3 3 4 5 0-3 2-5 4-6-2 0-3 0-3-2z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-charcoal">
            Australian Home Schooling
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => item.hasDropdown ? handleMouseEnter(item.label) : setOpenDropdown(null)}
              onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
            >
              {item.hasDropdown ? (
                <button
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    openDropdown === item.label
                      ? "text-terracotta"
                      : "text-charcoal-light hover:text-charcoal"
                  }`}
                  onClick={() =>
                    setOpenDropdown(prev => prev === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-[15px] font-medium text-charcoal-light transition-colors hover:text-charcoal"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/20 lg:block"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "top-[9px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[1.5px] w-5 bg-charcoal transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "top-[9px] -rotate-45" : "top-[16px]"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Curriculum Dropdown Panel */}
      <div
        className="hidden border-t border-charcoal/5 overflow-hidden lg:grid"
        style={{
          gridTemplateRows: openDropdown === "Curriculum" ? "1fr" : "0fr",
          opacity: openDropdown === "Curriculum" ? 1 : 0,
          transition: "grid-template-rows 0.3s ease, opacity 0.2s ease",
        }}
        onMouseEnter={() => handleMouseEnter("Curriculum")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden">
          <div className="mx-auto hidden max-w-7xl items-start gap-16 px-6 py-10 lg:flex lg:px-8">
            <p className="font-display text-2xl leading-tight text-charcoal/40 whitespace-pre-line min-w-[220px]">
              {"Australian Curriculum\nby learning area"}
            </p>
            <div className="flex flex-1 gap-3">
              {curriculumSubjects.map((subject) => (
                <Link
                  key={subject.label}
                  href={subject.href}
                  className="group flex flex-1 items-center gap-4 rounded-2xl border border-transparent px-5 py-4 transition-all duration-200 hover:border-sand hover:bg-cream"
                  onClick={() => setOpenDropdown(null)}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand/60 text-charcoal-light transition-colors group-hover:bg-terracotta/10 group-hover:text-terracotta">
                    {subject.icon}
                  </div>
                  <div>
                    <span className="text-[15px] font-medium text-charcoal">{subject.label}</span>
                    <p className="text-xs text-charcoal-light/60">Foundation &ndash; Year 10</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="ml-auto text-charcoal/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-terracotta"
                  >
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Resources Dropdown Panel */}
      {Object.entries(dropdowns).map(([key, config]) => (
        <div
          key={key}
          className="hidden border-t border-charcoal/5 overflow-hidden lg:grid"
          style={{
            gridTemplateRows: openDropdown === key ? "1fr" : "0fr",
            opacity: openDropdown === key ? 1 : 0,
            transition: "grid-template-rows 0.3s ease, opacity 0.2s ease",
          }}
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div className="mx-auto hidden max-w-7xl items-start gap-16 px-6 py-10 lg:flex lg:px-8">
              <p className="font-display text-2xl leading-tight text-charcoal/40 whitespace-pre-line min-w-[220px]">
                {config.tagline}
              </p>
              <div className="flex flex-1 gap-2">
                {config.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex flex-1 items-center gap-4 rounded-2xl border border-transparent px-5 py-4 transition-all duration-200 hover:border-sand hover:bg-cream"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand/60 text-charcoal-light transition-colors group-hover:bg-terracotta/10 group-hover:text-terracotta">
                      {item.icon}
                    </div>
                    <span className="text-[15px] font-medium text-charcoal">
                      {item.label}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="ml-auto text-charcoal/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-terracotta"
                    >
                      <path
                        d="M6 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile Menu */}
      <div
        className={`border-t border-charcoal/5 bg-warm-white lg:hidden ${mobileOpen ? "overflow-y-auto" : "overflow-hidden"}`}
        style={{
          maxHeight: mobileOpen ? "calc(100vh - 72px)" : "0px",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.2s ease",
        }}
      >
        <div className="space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium text-charcoal-light"
                    onClick={() =>
                      setOpenDropdown(prev => prev === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: openDropdown === item.label ? "300px" : "0px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    {item.label === "Curriculum" ? (
                      <div className="space-y-1 pb-2 pl-4">
                        {curriculumSubjects.map((subject) => (
                          <Link
                            key={subject.label}
                            href={subject.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-charcoal-light transition-colors hover:bg-cream hover:text-terracotta"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-charcoal/30">{subject.icon}</span>
                            {subject.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1 pb-2 pl-4">
                        {dropdowns[item.label]?.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-charcoal-light transition-colors hover:bg-cream hover:text-terracotta"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-charcoal/30">{subItem.icon}</span>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-charcoal-light transition-colors hover:text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link
              href="/get-started"
              className="block rounded-full bg-charcoal px-5 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
