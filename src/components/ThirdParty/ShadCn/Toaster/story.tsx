import type { Meta, StoryObj } from '@storybook/react';

import Toaster from '.';

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  parameters: {
    docs: {
      subtitle: 'An opinionated toast component for React.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/sonner) | [Sonner Documentation](https://sonner.emilkowal.ski/)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
};
