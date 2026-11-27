import { SiteConfig } from "@/config/site.config";

export interface ConfigService {
  /**
   * Gets the current site configuration.
   */
  get(): Promise<SiteConfig>;

  /**
   * Updates the site configuration.
   */
  update(patch: Partial<SiteConfig>): Promise<SiteConfig>;
}