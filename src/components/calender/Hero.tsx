import { format } from "date-fns";

export default function Hero({ currentDate }: { currentDate: Date }) {
  return (
    <div className="relative h-72 w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        className="w-full h-full object-cover"
        alt="calendar"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

      {/* BLUE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-500 clip-path-custom" />

      {/* TEXT */}
      <div className="absolute bottom-6 right-6 text-white text-right z-10">
        <p className="text-sm">{format(currentDate, "yyyy")}</p>
        <h2 className="text-2xl font-bold">
          {format(currentDate, "MMMM")}
        </h2>
      </div>
    </div>
  );
}