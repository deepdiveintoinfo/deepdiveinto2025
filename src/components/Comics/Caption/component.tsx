import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { captionVariants } from '.'

import { cn } from "@/lib/utils"

export interface CaptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof captionVariants> {
  asChild?: boolean
  /** Box Shadow of the panel.*/
  shadow?: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "none"
  /** Whether Caption should have a white circular gradiant */
  gradiant?: boolean;
}

const Caption = forwardRef<HTMLDivElement, CaptionProps>(
  ({ shadow = "none", gradiant=false, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(captionVariants({ shadow, gradiant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Caption.displayName = "Caption"

export { Caption }
