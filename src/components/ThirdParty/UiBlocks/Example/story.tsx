import type { Meta, StoryObj } from '@storybook/react';

import { Example } from '.';


const meta: Meta<typeof Example> = {
  component: Example,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
