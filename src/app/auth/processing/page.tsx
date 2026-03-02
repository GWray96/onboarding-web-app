"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthProcessingPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/");
    }, 700);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Signing you in…
        </h2>
        <p className="text-slate-600">
          One moment while we verify your magic link and take you to your
          onboarding form.
        </p>
      </div>
    </div>
  );
}

