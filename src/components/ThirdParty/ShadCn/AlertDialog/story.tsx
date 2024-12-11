import type { Meta, StoryObj } from '@storybook/react';

import { default as AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '.';
import { Button } from '@/components/ThirdParty/ShadCn';

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  parameters: {
    docs: {
      subtitle: 'A modal dialog that interrupts the user with important content and expects a response.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/alertdialog) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/alert-dialog) | [API Reference](https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    children: <>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
  </>
  },
};

export const Example: Story = {
  args: {
    children: <>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
  </>
  }
}
