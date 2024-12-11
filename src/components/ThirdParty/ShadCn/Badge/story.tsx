import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { default as component } from '.';
 
const meta: Meta<typeof component> = {
  component,
  parameters: {
    docs: {
      subtitle: 'Displays a badge or a component that looks like a badge.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/badge) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/badge) | [API Reference](https://www.radix-ui.com/primitives/docs/components/badge#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof component>;
 
export const Default: Story = {
  args: {
    children: "Badge",
  },
};