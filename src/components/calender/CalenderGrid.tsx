"use client";

import { format, isSameMonth } from "date-fns";
import {
  generateCalendarDays,
  isInRange,
  isStart,
  isEnd,
  isPreviewRange,
} from "@/utils/calender";
import { motion } from "framer-motion";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarGrid({
  currentDate,
  startDate,
  endDate,
  hoverDate,
  setHoverDate,
  selectDate,
}: any) {
  const days = generateCalendarDays(currentDate);

  // Load notes
  const allNotes =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("calendar-notes") || "{}")
      : {};

  return (
    <div>
      {/* Days */}
      <div className="grid grid-cols-7 gap-3 text-xs text-gray-500 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 grid-rows-6 gap-1 h-[240px]">
        {days.map((date) => {
          const inRange = isInRange(date, startDate, endDate);
          const preview = isPreviewRange(date, startDate, hoverDate, endDate);
          const start = isStart(date, startDate);
          const end = isEnd(date, endDate);
          const isCurrentMonth = isSameMonth(date, currentDate);

          const key = format(date, "yyyy-MM-dd");

          // Detect notes
          let hasSingleNote = false;
          let isInSavedRange = false;

          Object.entries(allNotes).forEach(([k, value]) => {
            if (!value || value.trim() === "") return;

            if (k === key) {
              hasSingleNote = true;
            }

            if (k.includes("_")) {
              const [rangeStart, rangeEnd] = k.split("_");

              if (key >= rangeStart && key <= rangeEnd) {
                isInSavedRange = true;
              }
            }
          });

          return (
            <motion.div
              key={date.toISOString()}
              onClick={() => selectDate(date)}
              onMouseEnter={() => setHoverDate(date)}
              className={`
                relative w-full h-full flex items-center justify-center 
                cursor-pointer text-sm
                ${!hasSingleNote && isInSavedRange ? "bg-gray-200" : ""}
                ${!isCurrentMonth ? "text-gray-400" : "text-black"}
              `}
            >
              {/* Selection range */}
              {(inRange || preview) && (
                <motion.div
                  layout
                  className={`
                    absolute inset-0 pointer-events-none
                    ${inRange ? "bg-blue-300" : "bg-blue-100"}
                    ${start ? "rounded-l-full" : ""}
                    ${end ? "rounded-r-full" : ""}
                  `}
                />
              )}

              {/* Selected start/end */}
              {(start || end) && (
                <motion.div
                  layoutId="range-circle"
                  className="absolute w-7 h-7 bg-amber-300 rounded-full pointer-events-none z-10"
                />
              )}

              {/* Single note */}
              {hasSingleNote && (
                <div className="absolute w-7 h-7 bg-green-500 rounded-full pointer-events-none z-20" />
              )}

              {/* Date */}
              <span className="relative z-30 text-sm font-medium">
                {format(date, "d")}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}