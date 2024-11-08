import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DashboardPage5 } from '.';
 
const meta: Meta<typeof DashboardPage5> = {
  component: DashboardPage5,
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
type Story = StoryObj<typeof DashboardPage5>;
 
export const Default: Story = {};
