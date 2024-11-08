import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  parameters: {
    docs: {
      subtitle: 'Use to show a placeholder while content is loading.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/skeleton)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render() {
    return (<div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>)
  }
};

export const Card: Story = {
  render() {
    return (<div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>)
  }
}
