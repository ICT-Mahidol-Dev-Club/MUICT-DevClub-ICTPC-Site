import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ICTPC",
    default: "ICTPC — ICT Programming Contest",
  },
  description:
    "ICTPC is the annual competitive programming contest for ICT and DST students at Mahidol University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
