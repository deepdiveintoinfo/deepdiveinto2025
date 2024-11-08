import { cva } from "class-variance-authority"


export const captionVariants = cva(
    ["border-2 border-black p-2 bg-comics-caption font-action-man shadow-comics-caption-shadow max-w-fit"],
    {
      variants: {
        shadow: {
          'none': "",
          'bottom-right': "shadow-[5px_6px_0px_0px_#3F0200]",
          'bottom-left': "shadow-[-5px_6px_0px_0px_#3F0200]",
          'top-right': "shadow-[5px_-6px_0px_0px_#3F0200]",
          'top-left': "shadow-[-5px_-6px_0px_0px_#3F0200]"
        },
        gradiant: {
          true: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-comics-caption-light",
          false: ""
        }
      },
      defaultVariants: {
        shadow: "none",
        gradiant: false
      },
    }
  )

export default captionVariants