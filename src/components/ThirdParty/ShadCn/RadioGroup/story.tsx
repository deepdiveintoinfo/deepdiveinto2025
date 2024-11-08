import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { RadioGroup } from '.';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  parameters: {
    docs: {
      subtitle: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/radio-group) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/radio-group) | [API Reference](https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: 'RadioGroup',
  },
};
