import { cn } from "@/lib/utils";

interface WorkButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Classes to apply to the hover effect */
  hoverClasseName?: string;
  /** Classes to apply to the text */
  textClassName?: string;
}

export function WorkButton({className, hoverClasseName ='', textClassName = '', children, ...props}: WorkButtonProps) {
  return (
    <button {...props} className={cn("group relative overflow-hidden rounded-full bg-purple-950 px-14 py-4 text-lg transition-all", className)}>
      <span className={cn("absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14", hoverClasseName)}></span>
      <span className={cn("font-semibold text-purple-200", textClassName)}>{children}</span>
    </button>
  );
}

