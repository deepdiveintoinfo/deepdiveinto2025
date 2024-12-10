import type { Meta, StoryObj } from '@storybook/react';

import FaqPage from '.';


const meta: Meta<typeof FaqPage> = {
  component: FaqPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof FaqPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
