import type { Meta, StoryObj } from '@storybook/react';

import { BlurryBlob } from '.';


const meta: Meta<typeof BlurryBlob> = {
  component: BlurryBlob,
  tags: ['autodoc']
};

export default meta;
type Story = StoryObj<typeof BlurryBlob>;

export const Default: Story = {
  args: {
    className: "rounded-xl opacity-45",
    firstBlobColor: "bg-purple-400",
    secondBlobColor: "bg-blue-400",
  },
};
