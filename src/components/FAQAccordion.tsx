"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-charcoal/10 bg-warm-white shadow-sm"
                : "border-charcoal/[0.06] bg-transparent hover:border-charcoal/10"
            }`}
          >
            <button
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-lg font-medium transition-colors sm:text-xl ${
                  isOpen ? "text-charcoal" : "text-charcoal-light"
                }`}
              >
                {item.question}
              </span>
              <div
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-terracotta text-white"
                    : "bg-sand/60 text-charcoal-light"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            <div
              className="overflow-hidden"
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s ease",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="text-[15px] leading-relaxed text-charcoal-light/85 sm:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
