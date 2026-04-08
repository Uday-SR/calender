import Header from "./Header";
import CalendarGrid from "./CalenderGrid";
import NotesPanel from "@/components/notes/NotesPanel";
import Hero from "./Hero";

export default function PageContent({ date, calendar, onChange, isActive }: any) {
  
  return (
    <div className="
      bg-gray-50 overflow-hidden
      border border-gray-200
      shadow-black shadow-xs
    ">
      <Hero currentDate={date} />

      <div className="grid md:grid-cols-2 gap-6 p-6 relative z-20">
        {isActive && <NotesPanel
          startDate={calendar.startDate}
          endDate={calendar.endDate}
        />}

        <div>
          <Header
            currentDate={date}
            setCurrentDate={() => {}}
            setDirection={(dir: number) => onChange(dir)}
          />
          <CalendarGrid
            {...calendar}
            currentDate={date}
          />
        </div>
      </div>
    </div>
  );
}