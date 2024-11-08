import type { Meta, StoryObj } from '@storybook/react';

import { RetroGrid } from '.';


const meta: Meta<typeof RetroGrid> = {
  component: RetroGrid,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof RetroGrid>;

export const Default: Story = {
  render: () => (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span>

      <RetroGrid />
    </div>
  )
};
