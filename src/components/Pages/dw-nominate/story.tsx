import type { Meta, StoryObj } from '@storybook/react';
import { DWNominatePage } from '.';

const meta: Meta<typeof DWNominatePage> = {
  component: DWNominatePage,
  title: "Components/Pages/dw-nominate"
};

export default meta;
type Story = StoryObj<typeof DWNominatePage>;

export const Default: Story = {};
