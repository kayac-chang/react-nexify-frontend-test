import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};
export function Button({ children, className }: Props) {
  return (
    <button
      className={clsx(
        "text-white px-4 py-2 rounded",
        "shadow-2dp hover:shadow-3dp",
        "transition-shadow duration-300 ease-out-sine",
        className
      )}
    >
      {children}
    </button>
  );
}
