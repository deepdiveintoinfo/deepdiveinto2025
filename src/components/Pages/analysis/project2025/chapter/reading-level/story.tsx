import type { Meta, StoryObj } from '@storybook/react';

import { ReadingLevelPage } from '.';


const meta: Meta<typeof ReadingLevelPage> = {
  component: ReadingLevelPage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ReadingLevelPage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
