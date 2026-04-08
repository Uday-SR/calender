import { format } from "date-fns";
import { isInRange, isStart, isEnd } from "@/utils/calender";
import { motion } from "framer-motion";

export default function DayCell({
  date,
  startDate,
  endDate,
  selectDate,
}: any) {
  const inRange = isInRange(date, startDate, endDate);
  const start = isStart(date, startDate);
  const end = isEnd(date, endDate);

  return (
    <motion.div
      onClick={() => selectDate(date)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-3 rounded-lg text-center cursor-pointer border
        ${inRange ? "bg-blue-500 text-white" : ""}
        ${start || end ? "bg-blue-700 text-white font-bold" : ""}
      `}
    >
      {format(date, "d")}
    </motion.div>
  );
}