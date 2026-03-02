import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  // If there is no code in the URL, send back to login
  if (!code) {
    return NextResponse.redirect(new URL("/login?error=missing_code", url));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Error exchanging code for session:", error);
    return NextResponse.redirect(new URL("/login?error=auth_failed", url));
  }

  // At this point the Supabase session cookie is set.
  // Redirect via a short "Signing you in..." screen.
  return NextResponse.redirect(new URL("/auth/processing", url));
}

