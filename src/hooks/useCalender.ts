"use client";

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
      setHoverDate(null);
      return;
    }

    if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
      setHoverDate(null);
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