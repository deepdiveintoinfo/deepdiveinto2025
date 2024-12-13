import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from '.';


const meta: Meta<typeof AboutPage> = {
  component: AboutPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
