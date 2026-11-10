import type { Inquiry } from "@/types";
import type { InquiryFormValues } from "@/lib/validation";

export interface InquiryService {
  /**
   * Submit a contact/inquiry message.
   */
  submit(data: InquiryFormValues): Promise<{ id: string }>;

  /**
   * List all inquiries (admin only).
   */
  listAll(): Promise<Inquiry[]>;

  /**
   * Mark an inquiry as resolved (admin only).
   */
  resolve(id: string): Promise<Inquiry>;
}

