import type { Meta, StoryObj } from '@storybook/react';

import IconSection from '.';


const meta: Meta<typeof IconSection.CenteredDescriptionWithIconBlocks> = {
  component: IconSection.CenteredDescriptionWithIconBlocks,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof IconSection.CenteredDescriptionWithIconBlocks>;

export const CenteredDescriptionWithIconBlocks: Story = {};

export const CircleIconsCenterAligned: Story = {
  render: () => <IconSection.CircleIconsCenterAligned />
}
export const DescriptionOnLeftIconBlocksOnRight: Story = {
  render: () => <IconSection.DescriptionOnLeftIconBlocksOnRight />
}
export const SolidIconWithHoverEffect: Story = {
  render: () => <IconSection.SolidIconWithHoverEffect />
}
export const StackedCards: Story = {
  render: () => <IconSection.StackedCards />
}
export const TwoColsGrid: Story = {
  render: () => <IconSection.TwoColsGrid />
}