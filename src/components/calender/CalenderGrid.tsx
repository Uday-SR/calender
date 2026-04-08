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

  return (
    <div>
      {/* Days */}
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-2 min-h-[0px]">
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

            return (
            <motion.div
                key={date.toISOString()}
                onClick={() => selectDate(date)}
                onMouseEnter={() => setHoverDate(date)}
                className={`
                relative w-full h-full flex items-center justify-center 
                cursor-pointer text-sm
                ${!isCurrentMonth ? "text-gray-400" : "text-black"}
                `}
            >
                {(inRange || preview) && (
                <motion.div
                    layout
                    className={`
                    absolute inset-0 
                    ${inRange ? "bg-blue-300" : "bg-blue-100"}
                    ${start ? "rounded-l-full" : ""}
                    ${end ? "rounded-r-full" : ""}
                    ${!start && !end ? "rounded-none" : ""}
                    `}
                />
                )}

                {(start || end) && (
                <motion.div
                    layoutId="range-circle"
                    className="absolute w-7 h-7 bg-amber-300 rounded-full"
                />
                )}

                <span className="relative z-10 text-sm font-medium">
                {format(date, "d")}
                </span>
            </motion.div>
            );
        })}
        </div>
    </div>
  );
}