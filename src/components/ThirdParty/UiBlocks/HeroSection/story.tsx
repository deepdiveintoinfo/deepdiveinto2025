import type { Meta, StoryObj } from '@storybook/react';

import HeroSection from '.';

const meta: Meta<typeof HeroSection.SimpleCentered> = {
  component: HeroSection.SimpleCentered,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof HeroSection.SimpleCentered>;

export const SimpleCentered: Story = {
  args: {
    children: 'Foobar',
  },
};

export const CenteredWithImage: Story = {
  render: () => <HeroSection.CenteredWithImage />
}

export const GradientBackground: Story = {
  render: () => <HeroSection.GradientBackground />
}

export const ImageWithReviews: Story = {
  render: () => <HeroSection.ImageWithReviews />
}

export const WithEmailInput: Story = {
  render: () => <HeroSection.WithEmailInput />
}
