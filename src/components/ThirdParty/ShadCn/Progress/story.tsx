import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Progress } from '.';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    docs: {
      subtitle: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/progress) [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/progress) | [API Reference](https://www.radix-ui.com/primitives/docs/components/progress#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => <ProgressDemo />
};

const ProgressDemo = () => {
  const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} className="w-[60%]" />
}


