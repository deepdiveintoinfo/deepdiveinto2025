import type { Meta, StoryObj } from '@storybook/react';

import { ChartsPage1 } from '.';
 
const meta: Meta<typeof ChartsPage1> = {
  component: ChartsPage1,
  tags: ['!autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof ChartsPage1>;
 
export const Default: Story = {};
