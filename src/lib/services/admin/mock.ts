import type { AdminSession } from "@/types";
import type { AdminLoginFormValues } from "@/lib/validation";
import type { AdminService } from "./interface";
import { mockDelay } from "../_mock-utils";

// Mock credentials — replace with real auth when connecting Supabase
const MOCK_ADMIN_EMAIL = "admin@ictpc.local";
const MOCK_ADMIN_PASSWORD = "admin1234";

let currentSession: AdminSession | null = null;

export const mockAdminService: AdminService = {
  async login(credentials: AdminLoginFormValues): Promise<AdminSession> {
    await mockDelay();
    if (
      credentials.email !== MOCK_ADMIN_EMAIL ||
      credentials.password !== MOCK_ADMIN_PASSWORD
    ) {
      throw new Error("Invalid credentials");
    }
    const session: AdminSession = {
      userId: "mock-admin-001",
      email: MOCK_ADMIN_EMAIL,
      role: "admin",
      expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
    };
    currentSession = session;
    return session;
  },

  async logout(): Promise<void> {
    await mockDelay();
    currentSession = null;
  },

  async getSession(): Promise<AdminSession | null> {
    await mockDelay();
    if (!currentSession) return null;
    if (new Date(currentSession.expiresAt) < new Date()) {
      currentSession = null;
      return null;
    }
    return { ...currentSession };
  },
};

