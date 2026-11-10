// Shared mock utilities
// ─────────────────────────────────────────────────────────────────

/** Simulate network latency (100–600 ms). */
export function mockDelay(): Promise<void> {
  const ms = 100 + Math.random() * 500;
  return new Promise((res) => setTimeout(res, ms));
}

/** Throw a simulated error ~15% of the time. */
export function maybeThrow(label: string): void {
  if (Math.random() < 0.15) {
    throw new Error(`[mock] Simulated error in ${label}`);
  }
}

/** Generate a simple mock UUID. */
export function mockId(): string {
  return `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
