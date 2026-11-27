const TZ = "Asia/Bangkok";

export function toBangkokInput(value: string | Date) {
  if (!value) return "";
  return new Date(value)
    .toLocaleString("sv-SE", { timeZone: TZ })
    .slice(0, 16)
    .replace(" ", "T");
}

export function fromBangkokInput(value: string) {
  if (!value) return value;
  return new Date(`${value}:00+07:00`).toISOString();
}