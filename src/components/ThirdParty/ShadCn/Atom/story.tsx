import type { Meta, StoryObj } from '@storybook/react';
import { Atom } from '.';

const meta: Meta<typeof Atom> = {
  component: Atom,
};

export default meta;
type Story = StoryObj<typeof Atom>;

export const Default: Story = {
  args: {
    className: "", 
    children: "Hello universe!"
  }
};
