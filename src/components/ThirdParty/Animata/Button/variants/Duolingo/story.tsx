import type { Meta, StoryObj } from '@storybook/react';

import { DuolingoButton } from '.';


const meta: Meta<typeof DuolingoButton> = {
  component: DuolingoButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof DuolingoButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
