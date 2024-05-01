import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiCheckboxFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};
export function UiCheckboxField({
    className,
    
    label,
    inputProps,
  }: UiCheckboxFieldProps) {
    const id = useId();
    return (
      <div className={clsx(className, "flex flex-col gap-1")}>
       
        <input
          {...inputProps}
          id={id}
          className={clsx(
            inputProps?.className,
            "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
          )}
        />
        {label}
      </div>
    );
  }
  