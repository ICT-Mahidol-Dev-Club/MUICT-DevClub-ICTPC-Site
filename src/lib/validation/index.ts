import { z } from "zod";

// ─────────────────────────────────────────────────────────────────
// Registration / Team Member
// ─────────────────────────────────────────────────────────────────

export const teamMemberSchema = z.object({
  nickname: z.string().min(1, "Nickname is required").max(50),
  fullName: z.string().min(2, "Full name is required").max(120),
  studentId: z
    .string()
    .regex(/^\d{7}$/, "Student ID must be exactly 7 digits"),
  email: z.string().email("Invalid email address"),
  faculty: z.enum(["ICT", "DST"], {
    errorMap: () => ({ message: "Faculty must be ICT or DST" }),
  }),
  year: z
    .number()
    .int()
    .min(1, "Year must be 1–4")
    .max(4, "Year must be 1–4"),
});

export const registrationSchema = z.object({
  teamName: z
    .string()
    .min(2, "Team name must be at least 2 characters")
    .max(60, "Team name must be at most 60 characters")
    .regex(
      /^[\w\s\-']+$/,
      "Team name may only contain letters, numbers, spaces, hyphens, or apostrophes",
    ),
  members: z
    .array(teamMemberSchema)
    .min(1, "At least 1 member is required")
    .max(3, "At most 3 members are allowed"),
  consentGiven: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the data consent statement" }),
  }),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

// ─────────────────────────────────────────────────────────────────
// Inquiry / Contact
// ─────────────────────────────────────────────────────────────────

export const inquirySchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

// ─────────────────────────────────────────────────────────────────
// Admin login
// ─────────────────────────────────────────────────────────────────

export const adminLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type AdminLoginFormValues = z.infer<typeof adminLoginSchema>;

