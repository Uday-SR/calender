import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isWithinInterval,
} from "date-fns";

export function generateCalendarDays(currentDate: Date) {
  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(endOfMonth(currentDate));

  const days: Date[] = [];
  let day = start;

  while (day <= end) {
    days.push(day);
    day = addDays(day, 1);
  }

  return days;
}

export function isInRange(date: Date, start?: Date | null, end?: Date | null) {
  if (!start || !end) return false;
  return isWithinInterval(date, { start, end });
}

export function isStart(date: Date, start?: Date | null) {
  return start && isSameDay(date, start);
}

export function isEnd(date: Date, end?: Date | null) {
  return end && isSameDay(date, end);
}

export function isPreviewRange(
  date: Date,
  start?: Date | null,
  hover?: Date | null,
  end?: Date | null
) {
  if (!start || end || !hover) return false;

  const [min, max] =
    hover > start ? [start, hover] : [hover, start];

  return date >= min && date <= max;
}