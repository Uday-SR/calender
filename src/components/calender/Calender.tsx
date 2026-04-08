"use client";

import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { motion } from "framer-motion";

import { useCalendar } from "@/hooks/useCalender";
import Header from "./Header";
import CalendarGrid from "./CalenderGrid";
import NotesPanel from "@/components/notes/NotesPanel";
import Hero from "./Hero";
import PageContent from "./PageContent";

export default function Calendar() {
    const calendar = useCalendar();

    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextDate =
        direction === 1
        ? addMonths(calendar.currentDate, 1)
        : subMonths(calendar.currentDate, 1);

    const changeMonth = (dir: number) => {
        if (isAnimating) return;

        setDirection(dir);
        setIsAnimating(true);

        setTimeout(() => {
        calendar.setCurrentDate(nextDate);
        setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="
        w-[420px] md:w-[450px]
        h-[610px]
        bg-white overflow-hidden
        border border-gray-200
        shadow-black shadow-xl
        flex flex-col
    ">

        <div className="relative w-full max-w-4xl mx-auto" style={{ perspective: 1500 }}>

        {/* BOTTOM PAGE (NEXT MONTH) */}
        <div className="absolute inset-0 z-0">
            <PageContent
                date={nextDate}
                calendar={calendar}
                isActive={false}
            />
        </div>

        {/* TOP PAGE (CURRENT MONTH) */}
        <motion.div
            key={calendar.currentDate.toISOString()}
            className="relative z-10"

            animate={
            isAnimating
                ? {
                    rotateY: direction === 1 ? -90 : 90,
                    x: direction === 1 ? -100 : 100,
                    opacity: 0,
                }
                : {}
            }

            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <PageContent
                date={calendar.currentDate}
                calendar={calendar}
                onChange={changeMonth}
                isActive={true}
            />
        </motion.div>

        </div>
        </div>
    );
}