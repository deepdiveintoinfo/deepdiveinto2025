import React from "react";
import { cn } from "@/lib/utils";

type TimelineProps = {
  children: React.ReactNode;
  className?: string;
};

type TimelineItemProps = {
  title: string;
  description: string;
  className?: string;
};

const Timeline = ({ children, className }: TimelineProps) => (
  <div className={cn("relative border-l-2 border-muted pl-4", className)}>
    {children}
  </div>
);

const TimelineItem = ({ title, description, className }: TimelineItemProps) => (
  <div className={cn("mb-8 last:mb-0", className)}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export { Timeline, TimelineItem };
