import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Terminal } from "lucide-react"

import { default as Alert, AlertTitle, AlertDescription } from '.';

const meta: Meta<typeof Alert> = {
  component: Alert,
  parameters: {
    docs: {
      subtitle: 'Displays a callout for user attention.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/alert)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: <>
          <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </>
  },
};

export const Desctructive: Story = {
  args: {
    variant: "destructive",
    ...Default.args
  },
};
