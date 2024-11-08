import type { Meta, StoryObj } from '@storybook/react';

import { Sheet } from '.';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  parameters: {
    docs: {
      subtitle: 'Extends the Dialog component to display content that complements the main content of the screen.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/sheet) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/sheet) | [API Reference](https://www.radix-ui.com/primitives/docs/components/sheet#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    children: 'Sheet',
  },
};
