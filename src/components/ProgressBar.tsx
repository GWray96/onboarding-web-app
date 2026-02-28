"use client";

const STEPS = [
  "Contact",
  "Business",
  "Digital Presence",
  "Goals",
  "Access",
  "Final",
];

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-start">
        {STEPS.map((label, index) => {
          const isActive = index + 1 <= currentStep;
          const isCurrent = index + 1 === currentStep;
          return (
            <div key={label} className="flex min-w-0 flex-1 items-start">
              <div className="flex min-w-0 flex-1 flex-col items-center">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold shadow-sm transition-all ${
                    isCurrent
                      ? "bg-linear-to-br from-amber-400 to-amber-600 text-white ring-4 ring-amber-200/60"
                      : isActive
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`mt-2 hidden text-center text-xs font-medium sm:block ${
                    isActive ? "text-slate-700" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`mt-3.5 h-1.5 w-8 shrink-0 rounded-full transition-colors sm:w-12 ${
                    index + 1 < currentStep
                      ? "bg-linear-to-r from-emerald-500 to-emerald-400"
                      : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
