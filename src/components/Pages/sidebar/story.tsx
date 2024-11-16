import type { Meta, StoryObj } from '@storybook/react';

import { SidebarPage } from '.';


const meta: Meta<typeof SidebarPage> = {
  component: SidebarPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof SidebarPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
