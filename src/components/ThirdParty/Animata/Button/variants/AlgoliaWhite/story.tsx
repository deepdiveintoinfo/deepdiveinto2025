import type { Meta, StoryObj } from '@storybook/react';

import { AlgoliaWhiteButton } from '.';


const meta: Meta<typeof AlgoliaWhiteButton> = {
  component: AlgoliaWhiteButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof AlgoliaWhiteButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
