import type { Meta, StoryObj } from '@storybook/react';
import SectionPage from '.';

const meta: Meta<typeof SectionPage> = {
  component: SectionPage,
  title: "Components/Pages/section"
};

export default meta;
type Story = StoryObj<typeof SectionPage>;

export const Default: Story = {};
