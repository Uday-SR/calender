"use client";

import { useEffect, useState } from "react";
import { getNoteKey } from "@/utils/notes";

export default function NotesPanel({ startDate, endDate }: any) {
  const [note, setNote] = useState("");

  const key = getNoteKey(startDate, endDate);

  useEffect(() => {
    if (!key) return;

    const allNotes = JSON.parse(localStorage.getItem("calendar-notes") || "{}");

    setNote(allNotes[key] || "");
  }, [key]);

  useEffect(() => {
    if (!key) return;

    const allNotes = JSON.parse(localStorage.getItem("calendar-notes") || "{}");

    allNotes[key] = note;

    localStorage.setItem("calendar-notes", JSON.stringify(allNotes));
  }, [note, key]);

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-sm font-semibold mb-2">
        {key ? "Notes" : "Select a date"}
      </h1>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write notes..."
        disabled={!key}
        className="
          w-full h-full
          resize-none outline-none
          bg-transparent
          text-sm
          leading-[28px]
          px-2
          disabled:opacity-50
        "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #d1d5db 1px, transparent 1px)",
          backgroundSize: "100% 28px",
        }}
      />
    </div>
  );
}