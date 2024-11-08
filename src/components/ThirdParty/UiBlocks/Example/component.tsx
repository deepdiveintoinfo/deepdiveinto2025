import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { exampleVariants } from '.'

import { cn } from "@/lib/utils"

export interface ExampleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof exampleVariants> {
  asChild?: boolean
}

const Example = forwardRef<HTMLDivElement, ExampleProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(exampleVariants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Example.displayName = "Example"

export { Example }
