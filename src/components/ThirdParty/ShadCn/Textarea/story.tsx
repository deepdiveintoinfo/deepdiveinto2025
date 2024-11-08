import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  parameters: {
    docs: {
      subtitle: 'Displays a form textarea or a component that looks like a textarea.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/textarea)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    children: 'Textarea',
  },
};
