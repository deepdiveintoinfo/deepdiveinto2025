import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Label } from '.';
import { Checkbox } from '@/components/ThirdParty/ShadCn';

const meta: Meta<typeof Label> = {
  component: Label,
  parameters: {
    docs: {
      subtitle: 'Renders an accessible label associated with controls.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/label) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/label) | [API Reference](https://www.radix-ui.com/primitives/docs/components/label#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <div>
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
</div>
};
