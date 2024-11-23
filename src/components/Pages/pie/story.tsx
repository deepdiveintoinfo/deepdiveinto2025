import type { Meta, StoryObj } from '@storybook/react';

import { PiePage } from '.';


const meta: Meta<typeof PiePage> = {
  component: PiePage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof PiePage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
