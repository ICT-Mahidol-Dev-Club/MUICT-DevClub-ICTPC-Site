import type { PublicTeam } from "@/types";
import type { TeamsService } from "./interface";
import { mockDelay, maybeThrow } from "../_mock-utils";

const MOCK_TEAMS: PublicTeam[] = [
  {
    id: "mock-reg-001",
    teamName: "Binary Bandits",
    memberCount: 2,
    members: [
      { nickname: "alice", faculty: "ICT", year: 3 },
      { nickname: "bob", faculty: "DST", year: 2 },
    ],
    status: "confirmed",
  },
  {
    id: "mock-reg-003",
    teamName: "Null Pointers",
    memberCount: 3,
    members: [
      { nickname: "dave", faculty: "ICT", year: 1 },
      { nickname: "eve", faculty: "ICT", year: 2 },
      { nickname: "frank", faculty: "DST", year: 3 },
    ],
    status: "confirmed",
  },
];

export const mockTeamsService: TeamsService = {
  async listPublic(): Promise<PublicTeam[]> {
    await mockDelay();
    maybeThrow("teamsService.listPublic");
    return MOCK_TEAMS;
  },
};

