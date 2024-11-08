import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '.'
import { FormDemo } from './demo'

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    docs: {
      subtitle: 'Building forms with React Hook Form and Zod.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/form) | [React Hook Form](https://react-hook-form.com/)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => <FormDemo />
};
