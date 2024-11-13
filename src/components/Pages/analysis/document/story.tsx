import type { Meta, StoryObj } from '@storybook/react';
import { DocumentPage } from '.';

const meta: Meta<typeof DocumentPage> = {
  component: DocumentPage,
  title: "Components/Pages/document"
};

export default meta;
type Story = StoryObj<typeof DocumentPage>;

export const Default: Story = {};
