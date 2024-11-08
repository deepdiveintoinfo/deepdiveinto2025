import { cn } from "@/lib/utils"
import { AiButton } from './variants/Ai'
import { GetStartedButton } from "./variants/GetStarted";
import { DuolingoButton } from "./variants/Duolingo";
import { AlgoliaBlueButton } from "./variants/AlgoliaBlue";
import { AlgoliaWhiteButton } from "./variants/AlgoliaWhite";
import { ExternalLinkButton } from "./variants/ExternalLink";
import { StatusButton } from "./variants/Status";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

const Button = ({ className, ...props }: ButtonProps) => {
    return (
      <button
        className={cn(className)}
        {...props}
      />
    )
  }

Button.Ai = AiButton
Button.AlgoliaBlue = AlgoliaBlueButton
Button.AlgoliaWhite = AlgoliaWhiteButton
Button.Duolingo = DuolingoButton
Button.ExternalLink = ExternalLinkButton
Button.GetStarted = GetStartedButton
Button.Status = StatusButton


export { Button }
