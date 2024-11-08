import type { Meta, StoryObj } from '@storybook/react';

import { Ticker } from '.';


const meta: Meta<typeof Ticker> = {
  tags: ['autodoc'],
  component: Ticker,
};

export default meta;
type Story = StoryObj<typeof Ticker>;

export const Default: Story = {
  args: {
    className: "text-4xl md:text-7xl font-black",
    value: "456.78"
  },
};
