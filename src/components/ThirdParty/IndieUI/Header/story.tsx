import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';
import { HeaderDemo } from './demo';


const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <HeaderDemo variant='default' />
};
