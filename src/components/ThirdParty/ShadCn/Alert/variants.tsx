import { cva } from "class-variance-authority"

export const alertVariants = cva(
  "relative w-full rounded-lg border border-border bg-card p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground dark:bg-muted dark:text-muted-foreground",
        destructive:
          "border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive dark:border-destructive-darker/50 dark:text-destructive-darker dark:[&>svg]:text-destructive-darker",
        warning:
          "border-accent/50 bg-accent/10 text-accent-warm-dark [&>svg]:text-accent-warm-dark dark:border-accent-warm-dark/50 dark:text-accent-warm-darker dark:[&>svg]:text-accent-warm-darker",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
