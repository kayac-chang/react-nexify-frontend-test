import clsx from "clsx";
import { useState } from "react";

export function RangeSlider() {
  const [value, setValue] = useState(100);

  return (
    <div className="w-40 relative flex items-center">
      <div className="relative w-full bg-gray-200 flex items-center pointer-events-none">
        <div
          className="bg-pink-button"
          style={{ width: `${value}%`, height: `3px` }}
        />

        <div
          className={clsx(
            "absolute transform -translate-x-1/2",
            "w-4 h-4 bg-pink-button rounded-full shadow-1dp",
            value ? "bg-pink-button" : "bg-black"
          )}
          style={{ left: `${value}%` }}
        />
      </div>

      <input
        type="range"
        name=""
        id=""
        className="w-full absolute opacity-0"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
