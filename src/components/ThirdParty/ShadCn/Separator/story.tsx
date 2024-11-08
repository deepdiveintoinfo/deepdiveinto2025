import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '.';

const meta: Meta<typeof Separator> = {
  component: Separator,
  parameters: {
    docs: {
      subtitle: 'Visually or semantically separates content.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/separator) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/separator) | [API Reference](https://www.radix-ui.com/primitives/docs/components/separator#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => <div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>


};
