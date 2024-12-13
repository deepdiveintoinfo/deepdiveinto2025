import type { Meta, StoryObj } from '@storybook/react';

import ContributePage from '.';


const meta: Meta<typeof ContributePage> = {
  component: ContributePage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ContributePage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
