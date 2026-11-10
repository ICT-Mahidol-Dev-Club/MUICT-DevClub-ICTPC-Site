import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { AdminSession } from "@/types";
import { ADMIN_COOKIE } from "./constants";

/**
 * Server-side admin guard. Reads the HTTP-only session cookie set by
 * POST /api/admin/login. Redirects to /admin/login if absent or expired.
 *
 * When real auth is wired: replace this with the Supabase server-side
 * session helper (e.g. createServerClient + getSession()).
 *
 * @returns AdminSession if authenticated
 * @throws redirect to /admin/login if not authenticated
 */
export async function requireAdminSession(): Promise<AdminSession> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!raw) {
    redirect("/admin/login");
  }

  let session: AdminSession;
  try {
    session = JSON.parse(raw) as AdminSession;
  } catch {
    redirect("/admin/login");
  }

  // Treat expired sessions as unauthenticated
  if (new Date(session.expiresAt) < new Date()) {
    redirect("/admin/login");
  }

  return session;
}

