import type { Meta, StoryObj } from '@storybook/react';

import { Balloon } from '.';


const meta: Meta<typeof Balloon> = {
  component: Balloon,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Balloon>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
