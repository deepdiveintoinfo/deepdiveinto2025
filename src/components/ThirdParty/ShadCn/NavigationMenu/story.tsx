import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NavigationMenu } from '.';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  parameters: {
    docs: {
      subtitle: 'A collection of links for navigating websites.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/navigation-menu) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/navigation-menu) | [API Reference](https://www.radix-ui.com/primitives/docs/components/navigation-menu#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    children: 'NavigationMenu',
  },
};
