import type { Meta, StoryObj } from '@storybook/react';

import { ShineBorder } from '.';


const meta: Meta<typeof ShineBorder> = {
  component: ShineBorder,
  tags: ["autodoc"],
  decorators: (Story) => <div className="m-4">
    <Story />
  </div>
};

export default meta;
type Story = StoryObj<typeof ShineBorder>;

export const Default: Story = {
  args: {
    className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl",
    color: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
    children: (
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span>
    )
  }
};

export const Monotone: Story = {
  args: {
    className: "text-center text-2xl font-bold capitalize",
    color: "black",
    children: "Shine Border"
  },
}