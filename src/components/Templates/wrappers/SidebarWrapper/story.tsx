import type { Meta, StoryObj } from '@storybook/react';

import { SidebarWrapper } from '.';


const meta: Meta<typeof SidebarWrapper> = {
  component: SidebarWrapper,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof SidebarWrapper>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
