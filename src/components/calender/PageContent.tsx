"use client";

import Header from "./Header";
import CalendarGrid from "./CalenderGrid";
import NotesPanel from "@/components/notes/NotesPanel";
import Hero from "./Hero";
import { motion } from "framer-motion";

export default function PageContent({ date, calendar, onChange, isActive }: any) {
  return (
    <div className="
      bg-gray-50 overflow-hidden
      border border-gray-200
      shadow-black shadow-xs
    ">
      <Hero currentDate={date} />

      <div className="grid md:grid-cols-2 gap-6 p-6 relative z-20">
        
        {/* NOTES */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            x: isActive ? 0 : -20,
            pointerEvents: isActive ? "auto" : "none",
          }}
          
          className="w-full"
        >
          <NotesPanel date={date} />
        </motion.div>

        {/* CALENDAR */}
        <div>
          <motion.div
            initial={false} 
            animate={{
              x: 0,
              opacity: isActive ? 1 : 0.7, 
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <Header
              currentDate={date}
              setCurrentDate={() => {}}
              setDirection={(dir: number) => onChange(dir)}
            />

            <CalendarGrid
              {...calendar}
              currentDate={date}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}