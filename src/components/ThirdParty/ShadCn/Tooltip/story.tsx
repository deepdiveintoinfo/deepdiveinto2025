import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    docs: {
      subtitle: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/tooltip) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/tooltip) | [API Reference](https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
