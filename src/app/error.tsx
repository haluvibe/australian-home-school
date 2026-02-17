"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-5xl font-semibold text-charcoal">
        Oops
      </h1>
      <p className="mt-3 text-lg text-charcoal-light">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-6 inline-flex rounded-full bg-charcoal px-6 py-3 text-base font-semibold text-cream transition-all duration-200 hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/20"
      >
        Try Again
      </button>
    </section>
  );
}
