import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DashboardPage4 } from '.';
 
const meta: Meta<typeof DashboardPage4> = {
  component: DashboardPage4,
  tags: ['!autodocs'],
  parameters: {
    docs: {
    //   subtitle: 'Displays a button or a component that looks like a button.',
    //   description: {
    //     component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/button)'
    //   },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof DashboardPage4>;
 
export const Default: Story = {};
