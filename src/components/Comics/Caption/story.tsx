import type { Meta, StoryObj } from '@storybook/react';

import { Caption } from '.';


const meta: Meta<typeof Caption> = {
  component: Caption,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    className: "text-center",
    children: <p>Then Iron Man agreed<br /> I was an Avenger.<br /> <b>Temporarily.</b></p>,
  },
};

export const Shadow: Story = {
  args: {
    className: "text-center",
    shadow: 'bottom-left',
    children: <p>Then Iron Man agreed<br /> I was an Avenger.<br /> <b>Temporarily.</b></p>,
  },
};

export const Gradiant: Story = {
  args: {
    gradiant: true,
    children: <p>Then Iron Man agreed<br /> I was an Avenger.<br /> <b>Temporarily.</b></p>,
  }
}