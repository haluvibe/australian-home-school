import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-5xl font-semibold text-charcoal">
        404
      </h1>
      <p className="mt-3 text-lg text-charcoal-light">
        Sorry, we couldn&apos;t find that page.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-charcoal px-6 py-3 text-base font-semibold text-cream transition-all duration-200 hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/20"
      >
        Back to Home
      </Link>
    </section>
  );
}
