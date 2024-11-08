import type { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from '.';
import { Label } from '@/components/ThirdParty/ShadCn';
import { Button } from '../Button';
import { Input } from '../Input';

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    docs: {
      subtitle: 'Displays rich content in a portal, triggered by a button.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/popover) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/popover) | [API Reference](https://www.radix-ui.com/primitives/docs/components/popover#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: <>
          <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </>
  },
};
