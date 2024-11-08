import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';
import { ChevronRight, Loader2, Mail } from 'lucide-react';


const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      subtitle: 'Displays a button or a component that looks like a button.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/button)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <ChevronRight className="h-4 w-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    children: <>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </>
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
    </>
  }
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#">Button</a>
  }
}

// expandIcon
// ringHover
export const Shine: Story = {
  args: {
    variant: "shine",
    children: "Shine"
  }
}
// gooeyRight
// gooeyLeft
// linkHover1
// linkHover2