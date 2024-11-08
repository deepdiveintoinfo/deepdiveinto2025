import type { Meta, StoryObj } from '@storybook/react';

import { InteractiveGrid } from '.';


const meta: Meta<typeof InteractiveGrid> = {
  component: InteractiveGrid,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof InteractiveGrid>;

export const Default: Story = {
  args: {
    children: (
      <div className="pointer-events-none my-24 flex h-fit max-w-sm flex-col items-center justify-center text-center text-zinc-800">
        <h1 className="text-4xl font-bold">
          Hello there!
        </h1>
        <p className="text-balance text-base">
          I am a placeholder content. Hover over the small squares to see the animation.
        </p>
      </div>
    )
  },
};
