import { redirect } from "next/navigation";
import { adminService } from "@/lib/services";
import type { AdminSession } from "@/types";

/**
 * Mock admin guard for server components.
 * Call at the top of any admin page.
 * When real auth is wired: replace adminService.getSession()
 * with the Supabase server-side session helper.
 *
 * @returns AdminSession if authenticated
 * @throws redirect to /admin/login if not authenticated
 */
export async function requireAdminSession(): Promise<AdminSession> {
  const session = await adminService.getSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}

