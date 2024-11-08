import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '.';
import { Button, Label } from '@/components/ThirdParty/ShadCn'
import { InputForm } from './demo'

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    docs: {
      subtitle: 'Displays a badge or a component that looks like a badge.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/badge)'
      },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof Input>;
 
export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const File: Story = {
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Email'
  }
}

export const WithLabel: Story = {
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
}

export const WithButton: Story = {
  render: () => <div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>
}

export const WithForm: Story = {
  render: () => <InputForm />
}