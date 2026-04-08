import { addMonths, subMonths, format } from "date-fns";
import LeftArrow from "../icons/Left";
import RightArrow from "../icons/Right";

export default function Header({
  currentDate,
  setCurrentDate,
  setDirection,
}: any) {
  return (
    <div className="flex justify-between items-center mb-4">

      <button
        onClick={() => {
          setDirection(-1);
          setCurrentDate(subMonths(currentDate, 1));
        }}
      >
        <LeftArrow />
      </button>

      <h2 className="font-semibold text-lg">
        {format(currentDate, "MMMM yyyy")}
      </h2>

      <button
        onClick={() => {
          setDirection(1);
          setCurrentDate(addMonths(currentDate, 1));
        }}
      >
        <RightArrow />
      </button>

    </div>
  );
}