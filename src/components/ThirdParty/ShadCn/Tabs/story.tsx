import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  parameters: {
    docs: {
      subtitle: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/tabs) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/tabs) | [API Reference](https://www.radix-ui.com/primitives/docs/components/tabs#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: 'Tabs',
  },
};
