import type { Meta, StoryObj } from '@storybook/react';

import { StatusButton } from '.';


const meta: Meta<typeof StatusButton> = {
  component: StatusButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof StatusButton>;

export const Default: Story = {};
