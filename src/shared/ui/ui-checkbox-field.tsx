import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiCheckboxFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};
export function UiCheckboxField({
<<<<<<< HEAD
  className,

  label,
  inputProps,
}: UiCheckboxFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-row gap-3 content-center")}>
      {label}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-5 h-15 outline-none",
        )}
      />
    </div>
  );
}
=======
    className,
    
    label,
    inputProps,
  }: UiCheckboxFieldProps) {
    const id = useId();
    return (
      <div className={clsx(className, "flex flex-row gap-3 content-center")}>
       {label}
        <input
          {...inputProps}
          id={id}
          className={clsx(
            inputProps?.className,
            "rounded border border-slate-300 focus:border-teal-600 px-5 h-15 outline-none",
          )}
        />
        
      </div>
    );
  }
  
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
