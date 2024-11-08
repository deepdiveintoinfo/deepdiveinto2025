import type { Meta, StoryObj } from '@storybook/react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "."
import { Label } from '@/components/ThirdParty/ShadCn/Label';
import { Button } from '@/components/ThirdParty/ShadCn/Button';
import { Input } from '@/components/ThirdParty/ShadCn/Input';
import { DialogOverlay } from './component';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    docs: {
      subtitle: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/dialog) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/dialog) | [API Reference](https://www.radix-ui.com/primitives/docs/components/dialog#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render() {
    return(<>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
      </DialogPortal>
    </>)
  }
};
