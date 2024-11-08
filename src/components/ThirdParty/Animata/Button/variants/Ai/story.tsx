import type { Meta, StoryObj } from '@storybook/react';

import { AiButton } from './component';

const meta: Meta<typeof AiButton> = {
  component: AiButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof AiButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
