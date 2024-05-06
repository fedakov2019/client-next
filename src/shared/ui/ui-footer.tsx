import clsx from "clsx";

export const Footer = ({ className }: { className?: string }) => {
    return (
      <div className={clsx("flex items-center justify-between mt-8 text-[--textSoft]",
      className,
    )}>
        <div className="font-boold">Alex Dev</div>
        <div className="h-3">© All rights reserved.</div>
      </div>
    );
  };
  
  