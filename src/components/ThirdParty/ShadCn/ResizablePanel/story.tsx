import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { 
  default as ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup, 
  // ResizablePanel, 
  // ResizableHandle 
} from '.';

const meta: Meta<typeof ResizablePanelGroup> = {
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      subtitle: 'Accessible resizable panel groups and layouts with keyboard support.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/resizable) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/resizable) | [API Reference](https://www.radix-ui.com/primitives/docs/components/resizable#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: () => <ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>

};
