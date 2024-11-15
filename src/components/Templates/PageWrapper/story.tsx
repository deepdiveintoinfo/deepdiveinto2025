import type { Meta, StoryObj } from '@storybook/react';

import { PageWrapper } from '.';
 
const meta: Meta<typeof PageWrapper> = {
  component: PageWrapper,
  tags: ['!autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof PageWrapper>;
 
export const Default: Story = {};
