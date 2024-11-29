import type { Meta, StoryObj } from '@storybook/react';

import { SectionOverview } from '.';


const meta: Meta<typeof SectionOverview> = {
  component: SectionOverview,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof SectionOverview>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
