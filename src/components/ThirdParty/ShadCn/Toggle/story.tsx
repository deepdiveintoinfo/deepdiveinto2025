import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toggle } from '.';
import { Bold } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  parameters: {
    docs: {
      subtitle: 'A two-state button that can be either on or off.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/toggle) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/toggle) | [API Reference](https://www.radix-ui.com/primitives/docs/components/toggle#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    "aria-label": "Toggle Bold",
    children: <Bold className="h-4 w-4" />    ,
  },
};
