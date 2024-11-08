import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DataVizProjectPage } from '.';
 
const meta: Meta<typeof DataVizProjectPage> = {
  component: DataVizProjectPage,
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
type Story = StoryObj<typeof DataVizProjectPage>;
 
export const Default: Story = {};
