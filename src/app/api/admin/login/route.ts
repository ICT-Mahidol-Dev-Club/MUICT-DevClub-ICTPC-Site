import { NextRequest, NextResponse } from "next/server";
import { adminLoginSchema } from "@/lib/validation";

// Mock credentials — replace with Supabase auth when backend is wired
const MOCK_ADMIN_EMAIL = "admin@ictpc.local";
const MOCK_ADMIN_PASSWORD = "admin1234";

/** Cookie name used by the mock session guard */
export const ADMIN_COOKIE = "ictpc_admin_session";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = adminLoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { email, password } = parsed.data;

  // Simulate a small delay so the UI loading state is visible
  await new Promise((r) => setTimeout(r, 300));

  if (email !== MOCK_ADMIN_EMAIL || password !== MOCK_ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const session = {
    userId: "mock-admin-001",
    email: MOCK_ADMIN_EMAIL,
    role: "admin" as const,
    expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
  };

  const res = NextResponse.json({ ok: true });

  // HTTP-only cookie — not accessible from JS, survives page navigations
  res.cookies.set({
    name: ADMIN_COOKIE,
    value: JSON.stringify(session),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // 8-hour expiry matches session.expiresAt
    maxAge: 8 * 60 * 60,
    // Set secure:true in production; for localhost dev false is fine
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
