import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    docs: {
      subtitle: 'A succinct message that is displayed temporarily.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toast) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/toast) | [API Reference](https://www.radix-ui.com/primitives/docs/components/toast#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Toast',
  },
};
