import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { default as Avatar, AvatarFallback, AvatarImage } from '.';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    docs: {
      subtitle: 'An image element with a fallback for representing the user.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/avatar) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/avatar) | [API Reference](https://www.radix-ui.com/primitives/docs/components/avatar#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: <>
      <AvatarImage src="https://github.com/loraxx753.png" alt="@shadcn" />
      <AvatarFallback>KB</AvatarFallback>
    </>
  },
};
