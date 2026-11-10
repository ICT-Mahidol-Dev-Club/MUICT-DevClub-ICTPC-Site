// Re-export navigation helpers bound to the routing config.
// Use these instead of importing directly from next-intl.
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

