import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({
  className,
  right,
  action
}: {
  className?: string;
  right?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white dark:bg-slate-900 dark:text-slate-200",
        className,
      )}
    > 
      <UiLogo />
      {action}
      {right}
    </header>
  );
}
