import type { Registration } from "@/types";
import type { RegistrationFormValues } from "@/lib/validation";
import type { RegistrationService } from "./interface";
import { mockDelay, maybeThrow, mockId } from "../_mock-utils";

// In-memory store (resets on server restart)
const store: Registration[] = [
  {
    id: "mock-reg-001",
    teamName: "Binary Bandits",
    members: [
      {
        nickname: "alice",
        fullName: "Alice Somporn",
        studentId: "6688001",
        email: "alice@student.mahidol.ac.th",
        faculty: "ICT",
        year: 3,
      },
      {
        nickname: "bob",
        fullName: "Bob Thanakrit",
        studentId: "6688002",
        email: "bob@student.mahidol.ac.th",
        faculty: "DST",
        year: 2,
      },
    ],
    submittedAt: "2026-11-01T10:00:00+07:00",
    status: "confirmed",
    consentGiven: true,
  },
  {
    id: "mock-reg-002",
    teamName: "Stack Overflow",
    members: [
      {
        nickname: "charlie",
        fullName: "Charlie Nattawut",
        studentId: "6688003",
        email: "charlie@student.mahidol.ac.th",
        faculty: "ICT",
        year: 4,
      },
    ],
    submittedAt: "2026-11-02T14:30:00+07:00",
    status: "pending",
    consentGiven: true,
  },
];

export const mockRegistrationService: RegistrationService = {
  async submit(data: RegistrationFormValues): Promise<Registration> {
    await mockDelay();
    maybeThrow("registrationService.submit");
    const reg: Registration = {
      id: mockId(),
      teamName: data.teamName,
      members: data.members.map((m) => ({
        ...m,
        year: Number(m.year),
      })),
      submittedAt: new Date().toISOString(),
      status: "pending",
      consentGiven: data.consentGiven,
    };
    store.push(reg);
    return reg;
  },

  async listAll(): Promise<Registration[]> {
    await mockDelay();
    maybeThrow("registrationService.listAll");
    return [...store];
  },

  async getById(id: string): Promise<Registration | null> {
    await mockDelay();
    return store.find((r) => r.id === id) ?? null;
  },

  async updateStatus(
    id: string,
    status: Registration["status"],
    note?: string,
  ): Promise<Registration> {
    await mockDelay();
    const reg = store.find((r) => r.id === id);
    if (!reg) throw new Error(`Registration ${id} not found`);
    reg.status = status;
    if (note !== undefined) reg.note = note;
    return { ...reg };
  },
};
