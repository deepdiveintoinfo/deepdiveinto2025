import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { default as Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  parameters: {
    docs: {
      subtitle: 'A vertically stacked set of interactive headings that each reveal a section of content.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/accordion) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/accordion) | [API Reference](https://www.radix-ui.com/primitives/docs/components/accordion#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-full",
    children: <>
          <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>

    </>
  },
};
