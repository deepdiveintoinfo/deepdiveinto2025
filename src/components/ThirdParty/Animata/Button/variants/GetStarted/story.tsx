import type { Meta, StoryObj } from '@storybook/react';

import { GetStartedButton } from '.';


const meta: Meta<typeof GetStartedButton> = {
  component: GetStartedButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof GetStartedButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
