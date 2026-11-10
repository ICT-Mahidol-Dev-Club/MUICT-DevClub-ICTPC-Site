import type { PublicTeam } from "@/types";

export interface TeamsService {
  /**
   * List all confirmed teams for the public /teams page.
   * Returns only public fields.
   */
  listPublic(): Promise<PublicTeam[]>;
}
