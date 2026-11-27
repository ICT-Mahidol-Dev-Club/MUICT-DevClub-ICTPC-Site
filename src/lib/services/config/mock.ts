import { siteConfig, SiteConfig } from "@/config/site.config";
import { ConfigService } from "./interface";
import { maybeThrow, mockDelay } from "../_mock-utils";

const g = globalThis as unknown as { __mockConfig?: SiteConfig };
const MOCK_CONFIG = (g.__mockConfig ??= { ...siteConfig });

export const mockConfigService: ConfigService = {
  async get(): Promise<SiteConfig> {
    await mockDelay();
    return MOCK_CONFIG;
  },

  async update(patch: Partial<SiteConfig>): Promise<SiteConfig> {
    await mockDelay();
    maybeThrow("configService.update");
    Object.assign(MOCK_CONFIG, patch);
    return MOCK_CONFIG;
  },
};