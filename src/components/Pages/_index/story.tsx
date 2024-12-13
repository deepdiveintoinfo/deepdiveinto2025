import type { Meta, StoryObj } from '@storybook/react';
import IndexPage from '.';

const meta: Meta<typeof IndexPage> = {
  component: IndexPage,
  title: "Components/Pages"
};

export default meta;
type Story = StoryObj<typeof IndexPage>;

export const Default: Story = {};
