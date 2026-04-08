"use client"
import Calendar from "@/components/calender/Calender";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-[100vh] flex items-center justify-center py-6">

      <div className="scale-[0.75]">

        {/* CALENDAR */}
        <motion.div
          initial={{ rotate: -0.5 }}
          animate={{ rotate: 0.5 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <Calendar />
        </motion.div>

      </div>
    </main>
  );
}