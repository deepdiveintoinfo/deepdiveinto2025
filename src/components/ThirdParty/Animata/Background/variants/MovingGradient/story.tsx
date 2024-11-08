import type { Meta, StoryObj } from '@storybook/react';

import { MovingGradient } from '.';
import { BadgeAlert } from 'lucide-react';


const meta: Meta<typeof MovingGradient> = {
  component: MovingGradient,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof MovingGradient>;

export const Default: Story = {
  args: {
    className: "rounded-xl shadow-md",
    children: (
      <div className="w-64 p-4">
        <h4 className="text-md mb-2 flex flex-row items-center gap-2 font-bold text-orange-500">
          <BadgeAlert />
          <span>
            Priority notifications
          </span>
        </h4>
        <p className="break-words text-sm text-black/80">
          You can set up priority notifications to be alerted on your phone or computer for important emails.
        </p>
      </div>
    ),
  },
};
