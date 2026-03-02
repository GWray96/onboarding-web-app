"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inlineError, setInlineError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage: string | null = null;
  if (error === "missing_code") {
    errorMessage =
      "The login link is missing a code. Please request a new magic link.";
  } else if (error === "auth_failed") {
    errorMessage =
      "That login link is invalid or has expired. Please request a new magic link.";
  }

  const handleLogin = async () => {
    if (!email) return;
    setInlineError(null);
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (!error) {
      setSent(true);
    } else {
      console.error("Magic link error:", error);
      // Supabase uses status 429 for email rate limiting
      const isRateLimit = (error as { status?: number }).status === 429;
      const message = isRateLimit
        ? "We’ve had too many magic link requests in a short time. Please wait a few minutes and try again."
        : "Something went wrong sending the magic link. Please try again.";
      setInlineError(message);
    }

    setLoading(false);
  };

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-emerald-50/70 px-4">
        <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Check your inbox ✉️
          </h2>
          <p className="text-slate-600">
            We&apos;ve sent a magic link to <strong>{email}</strong>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            The link expires in about 1 hour.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-2xl font-bold text-slate-900">
          Welcome to Momentum Digital
        </h1>
        <p className="mb-6 text-sm text-slate-600">
          Enter your email to access your onboarding.
        </p>
        {(errorMessage || inlineError) && (
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            {inlineError ?? errorMessage}
          </div>
        )}
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
        />
        <button
          onClick={handleLogin}
          disabled={loading || !email}
          className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Magic Link"}
        </button>
      </div>
    </div>
  );
}

