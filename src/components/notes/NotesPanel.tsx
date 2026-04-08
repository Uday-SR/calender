"use client";

import { useState, useEffect } from "react";

export default function NotesPanel() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("calendar-note");
    if (saved) setNote(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar-note", note);
  }, [note]);

  return (
    <textarea
      className="w-full h-40 p-2 bg-transparent resize-none outline-none"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d1d5db 1px, transparent 1px)",
        backgroundSize: "100% 28px",
      }}
      placeholder="Write notes..."
      value={note}
      onChange={(e) => setNote(e.target.value)}
    />
  );
}