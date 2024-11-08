import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    docs: {
      subtitle: 'A control that allows the user to toggle between checked and not checked.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/switch) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/switch) | [API Reference](https://www.radix-ui.com/primitives/docs/components/switch#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: 'Switch',
  },
};
