import type { Meta, StoryObj } from '@storybook/react';

import { Timeline } from '.';


const meta: Meta<typeof Timeline> = {
  component: Timeline,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
