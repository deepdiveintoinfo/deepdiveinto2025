import type { Meta, StoryObj } from '@storybook/react';
import { ChapterPage } from '.';

const meta: Meta<typeof ChapterPage> = {
  component: ChapterPage,
  title: "Components/Pages/dw-nominate"
};

export default meta;
type Story = StoryObj<typeof ChapterPage>;

export const Default: Story = {};
