"use client";
import { SiteConfig } from "@/config/site.config";
import { createContext, useContext } from "react";

const ConfigContext = createContext<SiteConfig | null>(null);

export function ConfigProvider({ config, children }: { config: SiteConfig; children: React.ReactNode }) {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

export const useConfig = () => {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error("useConfig must be used within ConfigProvider");
  return ctx;
};