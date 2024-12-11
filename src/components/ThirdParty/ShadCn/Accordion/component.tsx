import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type VariantProps } from "class-variance-authority"
import { accordionVariants, accordionTriggerVariants } from ".";

import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  />
));
Accordion.displayName = "Accordion";


const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "[&>h3]:mb-0 py-3", // Adds divider and removes top border for the first item
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & VariantProps<typeof accordionTriggerVariants> & { invert?: boolean }
>(({ className, invert, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ invert, className }))}
      {...props}
    >
      {children}
      <PlusIcon className={`h-6 w-6 shrink-0 transition-transform duration-200 ${invert ? `text-white` : `text-muted-foreground` }`} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden bg-white text-gray-700 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-4 py-3", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default Accordion;

export { AccordionItem, AccordionTrigger, AccordionContent };
