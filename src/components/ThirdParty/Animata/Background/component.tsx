import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { backgroundVariants } from '.'

import { cn } from "@/lib/utils"

export interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundVariants> {
  asChild?: boolean
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(backgroundVariants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Background.displayName = "Background"

export { Background }
