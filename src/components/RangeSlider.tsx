import clsx from "clsx";
import { useState } from "react";

type Props = {
  min?: number;
  max?: number;
  value?: number;
};
export function RangeSlider({ min = 0, max = 100, value: _value = 50 }: Props) {
  const [value, setValue] = useState(_value);

  const percent = Math.round((value / (max - min)) * 100);

  return (
    <div className="w-40 relative flex items-center">
      <div className="relative w-full bg-gray-200 flex items-center pointer-events-none">
        <div
          className="bg-pink-button"
          style={{ width: `${percent}%`, height: `3px` }}
        />

        <div
          className={clsx(
            "absolute transform -translate-x-1/2",
            "w-4 h-4 bg-pink-button rounded-full shadow-1dp",
            percent ? "bg-pink-button" : "bg-black"
          )}
          style={{ left: `${percent}%` }}
        />
      </div>

      <input
        type="range"
        name=""
        id=""
        className="w-full absolute opacity-0"
        min={min}
        max={max}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
