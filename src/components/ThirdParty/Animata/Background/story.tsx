import type { Meta, StoryObj } from '@storybook/react';

import { Background } from '.';


const meta: Meta<typeof Background> = {
  component: Background,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
  args: {
    children: 'foobar'
  },
};
