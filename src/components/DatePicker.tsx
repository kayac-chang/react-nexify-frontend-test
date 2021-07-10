import { Icon } from "@/components";
import { format, parse } from "date-fns";

const pattern = "yyyy-MM-dd";

type Props = {
  value?: Date;
  onChange?: (value: Date) => void;
};
export function DatePicker({ value, onChange }: Props) {
  return (
    <div className="relative flex items-center">
      <input
        type="date"
        className="border-b w-full p-2"
        value={value ? format(value, pattern) : ""}
        onChange={(event) =>
          onChange?.(parse(event.target.value, pattern, new Date()))
        }
      />

      <span
        className="absolute right-2 w-4 pointer-events-none"
        role="presentation"
      >
        <Icon.Calendar />
      </span>
    </div>
  );
}
