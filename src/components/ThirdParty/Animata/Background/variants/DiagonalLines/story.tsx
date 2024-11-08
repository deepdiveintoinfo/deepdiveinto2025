import type { Meta, StoryObj } from '@storybook/react';

import { DiagonalLines } from '.';


const meta: Meta<typeof DiagonalLines> = {
  component: DiagonalLines,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof DiagonalLines>;

export const Default: Story = {
  args: {
    className: "bg-slate-black"
  }
};
