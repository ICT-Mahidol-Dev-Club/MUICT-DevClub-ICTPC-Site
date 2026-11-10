// Organizer and developer profile data.
// Edit this file to update team listings.
// Profile photos go in /public/images/team/

export interface OrganizerProfile {
  name: string;
  role: string;
  imageUrl?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  github?: string;
  imageUrl?: string;
}

export const organizers: OrganizerProfile[] = [
  { name: "Organizer Name 1", role: "Project Lead, SMO MUICT" },
  { name: "Organizer Name 2", role: "Logistics, SMO MUICT" },
  { name: "Organizer Name 3", role: "Technical Lead, Dev Club" },
  // TODO: fill in real names and roles
];

export const developers: DeveloperProfile[] = [
  { name: "Developer Name 1", role: "Full-stack", github: "https://github.com/placeholder" },
  { name: "Developer Name 2", role: "UI/UX", github: "https://github.com/placeholder" },
  // TODO: fill in real names and GitHub profiles
];
