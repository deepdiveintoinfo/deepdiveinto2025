import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    docs: {
      subtitle: 'An input where the user selects a value from within a given range.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/slider) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/slider) | [API Reference](https://www.radix-ui.com/primitives/docs/components/slider#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    children: 'Slider',
  },
};
