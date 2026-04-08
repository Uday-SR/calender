import { useState } from "react";

export function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const selectDate = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  return {
    currentDate,
    setCurrentDate,
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    selectDate,
  };
}