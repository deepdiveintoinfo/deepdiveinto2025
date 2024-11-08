import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ScrollArea } from '.';
import { ScrollAreaDemo } from './demo';

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  parameters: {
    docs: {
      subtitle: 'Augments native scroll functionality for custom, cross-browser styling.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/scroll-area) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/scroll-area) | [API Reference](https://www.radix-ui.com/primitives/docs/components/scroll-area#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => <ScrollAreaDemo />
};
