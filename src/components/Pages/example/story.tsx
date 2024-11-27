import type { Meta, StoryObj } from '@storybook/react';

import { ExamplePage } from '.';


const meta: Meta<typeof ExamplePage> = {
  component: ExamplePage,
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ExamplePage>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
