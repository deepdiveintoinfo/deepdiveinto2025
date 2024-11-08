import type { Meta, StoryObj } from '@storybook/react';

import { HeroForms } from '.';


const meta: Meta<typeof HeroForms.CenterAlignedSearchWithTags> = {
  component: HeroForms.CenterAlignedSearchWithTags,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof HeroForms.CenterAlignedSearchWithTags>;

export const CenterAlignedSearchWithTags: Story = {};

export const CenterAlignedWithAForm: Story = {
  render: () => <HeroForms.CenterAlignedWithAForm />
}

export const ImageAndForm: Story = {
  render: () => <HeroForms.ImageAndForm />
}

export const SignUpForm: Story = {
  render: () => <HeroForms.SignUpForm />
}
