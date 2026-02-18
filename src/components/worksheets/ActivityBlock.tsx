import type { ReactNode } from "react";

interface ActivityBlockProps {
  number: number;
  title: string;
  instruction: string;
  parentTip?: string;
  children: ReactNode;
}

export default function ActivityBlock({ number, title, instruction, parentTip, children }: ActivityBlockProps) {
  return (
    <div className="activity-block rounded-xl border-2 border-charcoal/8 p-3 sm:p-4">
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
      {/* Parent Tip */}
      {parentTip && (
        <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-blue-50/80 px-3 py-2.5 text-sm text-blue-900 print:bg-blue-50/50 print:text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex-1">
            <span className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-blue-500/80">
              Teacher Tip
            </span>
            <span className="leading-relaxed">{parentTip}</span>
          </div>
        </div>
      )}
    </div>
  );
}
