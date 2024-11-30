import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedProgressBar } from '.';


const meta: Meta<typeof SegmentedProgressBar> = {
  component: SegmentedProgressBar,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof SegmentedProgressBar>;

export const Default: Story = {
  args: {},
};
