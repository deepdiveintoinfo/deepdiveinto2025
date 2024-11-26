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
  