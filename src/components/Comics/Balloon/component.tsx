import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { balloonVariants } from '.'

import { cn } from "@/lib/utils"

export interface BalloonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof balloonVariants> {
  asChild?: boolean
}

const Balloon = forwardRef<HTMLDivElement, BalloonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(balloonVariants({ className }))}
        style={{
          
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Balloon.displayName = "Balloon"

export { Balloon }
