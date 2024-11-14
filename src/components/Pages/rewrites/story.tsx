import type { Meta, StoryObj } from '@storybook/react';

import { RewritesPage } from '.';


const meta: Meta<typeof RewritesPage> = {
  component: RewritesPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof RewritesPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
