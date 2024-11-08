import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';


const meta: Meta<typeof Text> = {
  component: Text,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
