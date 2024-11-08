import type { Meta, StoryObj } from '@storybook/react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '.';

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    docs: {
      subtitle: 'Displays a list of options for the user to pick from—triggered by a button.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/select) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/select) | [API Reference](https://www.radix-ui.com/primitives/docs/components/select#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

};
