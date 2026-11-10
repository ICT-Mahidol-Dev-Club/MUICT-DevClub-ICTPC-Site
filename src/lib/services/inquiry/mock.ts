import type { Inquiry } from "@/types";
import type { InquiryFormValues } from "@/lib/validation";
import type { InquiryService } from "./interface";
import { mockDelay, maybeThrow, mockId } from "../_mock-utils";

const store: Inquiry[] = [];

export const mockInquiryService: InquiryService = {
  async submit(data: InquiryFormValues): Promise<{ id: string }> {
    await mockDelay();
    maybeThrow("inquiryService.submit");
    const inquiry: Inquiry = {
      id: mockId(),
      name: data.name,
      email: data.email,
      message: data.message,
      submittedAt: new Date().toISOString(),
      resolved: false,
    };
    store.push(inquiry);
    return { id: inquiry.id };
  },

  async listAll(): Promise<Inquiry[]> {
    await mockDelay();
    return [...store];
  },

  async resolve(id: string): Promise<Inquiry> {
    await mockDelay();
    const item = store.find((i) => i.id === id);
    if (!item) throw new Error(`Inquiry ${id} not found`);
    item.resolved = true;
    return { ...item };
  },
};

