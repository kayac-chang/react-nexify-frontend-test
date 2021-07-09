import { Icon } from "@/components";

export function DatePicker() {
  return (
    <div className="relative flex items-center">
      <input type="date" name="" id="" className="border-b p-2" />

      <span
        className="absolute right-2 w-4 pointer-events-none"
        role="presentation"
      >
        <Icon.Calendar />
      </span>
    </div>
  );
}
