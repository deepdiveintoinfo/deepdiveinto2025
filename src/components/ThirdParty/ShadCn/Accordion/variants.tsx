import { cva } from "class-variance-authority"

export const accordionVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export const accordionTriggerVariants = cva(
    "flex w-full items-center justify-between px-4 text-left mb-0 font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 transition-colors [&[data-state=open]>svg]:rotate-[135deg]",
    {
      variants: {
        variant: {
          default: "",
        },
        size: {
          sm: "text-base lg:text-lg",
          lg: "lg:text-lg",
        },
        invert: {
          true: "text-white bg-primary hover:bg-primary-dark",
          false: "",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "sm"
      },
    }
  )
  