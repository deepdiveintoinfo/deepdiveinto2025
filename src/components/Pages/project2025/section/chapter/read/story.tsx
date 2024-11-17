import type { Meta, StoryObj } from '@storybook/react';

import { ReadPage } from '.';


const meta: Meta<typeof ReadPage> = {
  component: ReadPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ReadPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
