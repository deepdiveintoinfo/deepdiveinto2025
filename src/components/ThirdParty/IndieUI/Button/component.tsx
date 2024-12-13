import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "."
import { cn } from "@/lib/utils"
 
 
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  hideIcon?: boolean
}
 
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      rightIcon,
      leftIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="w-0 mr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:mr-1 group-hover:opacity-100">
            {leftIcon}
          </span>
        )}
        <Slottable>{props.children}</Slottable>
        {rightIcon && (
          <span className="w-0 ml-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100">
            {rightIcon}
          </span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"
 
export default Button
