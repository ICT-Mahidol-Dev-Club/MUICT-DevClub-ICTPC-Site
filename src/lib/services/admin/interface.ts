import type { AdminSession } from "@/types";
import type { AdminLoginFormValues } from "@/lib/validation";

export interface AdminService {
  /**
   * Authenticate with email + password.
   * Returns a session on success.
   */
  login(credentials: AdminLoginFormValues): Promise<AdminSession>;

  /**
   * Invalidate the current session (sign out).
   */
  logout(): Promise<void>;

  /**
   * Return the current session, or null if not authenticated.
   * This is the hook that the admin guard calls.
   */
  getSession(): Promise<AdminSession | null>;
}
