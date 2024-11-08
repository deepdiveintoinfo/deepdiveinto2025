import type { Meta, StoryObj } from '@storybook/react';

import { ExternalLinkButton } from '.';


const meta: Meta<typeof ExternalLinkButton> = {
  component: ExternalLinkButton,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ExternalLinkButton>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
