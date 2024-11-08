import type { Meta, StoryObj } from '@storybook/react';

import { PricingSection } from '.';


const meta: Meta<typeof PricingSection> = {
  component: PricingSection,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof PricingSection>;

export const Default: Story = {};
