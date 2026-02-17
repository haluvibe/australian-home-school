import type { ReactNode } from "react";

interface ActivityBlockProps {
  number: number;
  title: string;
  instruction: string;
  children: ReactNode;
}

export default function ActivityBlock({ number, title, instruction, children }: ActivityBlockProps) {
  return (
    <div className="activity-block rounded-xl border-2 border-charcoal/8 p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta text-base font-bold text-white">
          {number}
        </span>
        <div>
          <h2 className="text-lg font-bold text-charcoal">{title}</h2>
          <p className="text-base text-charcoal-light">{instruction}</p>
        </div>
      </div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}
