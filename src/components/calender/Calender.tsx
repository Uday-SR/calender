"use client";

import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { motion } from "framer-motion";

import { useCalendar } from "@/hooks/useCalender";
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
        w-[370px] md:w-[400px] h-auto bg-white overflow-hidden
        border border-gray-200 shadow-black shadow-xl flex flex-col
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
                    style={{
                        transformOrigin: direction === 1 ? "left center" : "right center",
                    }}

                    // SWIPE 
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}

                    onDragEnd={(e, info) => {
                        const swipe = info.offset.x;

                        if (swipe < -50) {
                        changeMonth(1);   
                        } else if (swipe > 50) {
                        changeMonth(-1);  
                        }
                    }}

                    animate={
                        isAnimating
                        ? {
                            rotateY: direction === 1 ? -90 : 90,
                            x: direction === 1 ? -80 : 80,
                            scale: 0.92,
                            opacity: 0.6,
                            }
                        : {
                            rotateY: 0,
                            x: 0,
                            scale: 1,
                            opacity: 1,
                            }
                    }

                    transition={{
                        duration: 0.9,
                        ease: [0.4, 0, 0.2, 1],
                    }}
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