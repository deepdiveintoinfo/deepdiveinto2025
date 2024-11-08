import { cva } from "class-variance-authority"


export const headerVariants = cva('mx-auto', {
  variants: {
    variant: {
      default: 'max-w-7xl',
      centered:
        'max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default headerVariants