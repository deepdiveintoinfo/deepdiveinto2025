import { ComponentPropsWithoutRef } from "react";

type SimpleCenteredProps = ComponentPropsWithoutRef<"div">

export const SimpleCentered = ({children}: SimpleCenteredProps) => (children)