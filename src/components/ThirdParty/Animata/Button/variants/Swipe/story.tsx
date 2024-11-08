import type { Meta, StoryObj } from '@storybook/react';

import { SwipeButton } from '.';


const meta: Meta<typeof SwipeButton> = {
  component: SwipeButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof SwipeButton>;

export const Default: Story = {
  args: {
    firstClass: "bg-orange-500 text-white",
    firstText: "Get access",
    secondClass: "bg-red-500 text-white",
    secondText: "Get access"
  }
};
