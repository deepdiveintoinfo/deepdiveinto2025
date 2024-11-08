import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text }
