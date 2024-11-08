import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToggleGroup } from '.';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  parameters: {
    docs: {
      subtitle: 'A set of two-state buttons that can be toggled on or off.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toggle-group) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/toggle-group) | [API Reference](https://www.radix-ui.com/primitives/docs/components/toggle-group#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    children: 'ToggleGroup',
  },
};
