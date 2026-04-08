import { format } from "date-fns";

export function getNoteKey(startDate: Date | null, endDate: Date | null) {
  if (!startDate) return null;

  const start = format(startDate, "yyyy-MM-dd");

  if (!endDate) return start;

  const end = format(endDate, "yyyy-MM-dd");

  return `${start}_${end}`;
}