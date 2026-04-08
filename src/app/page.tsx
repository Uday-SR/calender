"use client"
import Calendar from "@/components/calender/Calender";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-6">

      <div className="relative">

        {/* HANGING CALENDAR (SUBTLE SWING) */}
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