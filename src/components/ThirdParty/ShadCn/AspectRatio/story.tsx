import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { default as AspectRatio } from '.';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  parameters: {
    docs: {
      subtitle: 'Displays content within a desired ratio.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/aspectratio) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/aspect-ratio) | [API Reference](https://www.radix-ui.com/primitives/docs/components/aspect-ratio#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    className: "bg-muted",
    children: <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      className="rounded-md object-cover"
    />
  }
};
