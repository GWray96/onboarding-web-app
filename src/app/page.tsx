import OnboardingForm from "@/components/OnboardingForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50/70">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(167,243,208,0.5),transparent)]" />
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200/90 bg-emerald-50/80 px-6 py-2.5 text-sm text-emerald-800">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            Gareth Wray — Digital Marketing &amp; Growth Specialist
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Client Onboarding
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            This form helps us understand your business and goals so we can build
            a strategy that gets results. Takes about 10–15 minutes.
          </p>
        </header>

        <main className="rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-lg shadow-emerald-900/5 sm:p-10 ring-1 ring-slate-900/5">
          <OnboardingForm />
        </main>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>All information is confidential and stored securely.</p>
          <p className="mt-1">
            Questions?{" "}
            <a
              href="mailto:hello@garethrswray.com"
              className="font-medium text-emerald-700 underline decoration-amber-300 underline-offset-2 hover:text-emerald-600 hover:decoration-emerald-400"
            >
              hello@garethrswray.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
