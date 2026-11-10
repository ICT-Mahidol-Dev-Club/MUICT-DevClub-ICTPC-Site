import type { Registration, PublicTeam } from "@/types";
import type { RegistrationFormValues } from "@/lib/validation";

export interface RegistrationService {
  /**
   * Submit a new team registration.
   * Returns the created Registration (all fields – server use only).
   */
  submit(data: RegistrationFormValues): Promise<Registration>;

  /**
   * List all registrations (admin only).
   */
  listAll(): Promise<Registration[]>;

  /**
   * Get a single registration by ID (admin only).
   */
  getById(id: string): Promise<Registration | null>;

  /**
   * Update the status of a registration (admin only).
   */
  updateStatus(
    id: string,
    status: Registration["status"],
    note?: string,
  ): Promise<Registration>;
}
