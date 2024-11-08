import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Label } from '@/components/ThirdParty/ShadCn';
import { Checkbox } from '.';

 
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    docs: {
      subtitle: 'A control that allows the user to toggle between checked and not checked.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/checkbox) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/checkbox) | [API Reference](https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference)'
      },
    },
  },
  args: { onClick: fn() },
};
 
export default meta;
type Story = StoryObj<typeof Checkbox>;
 
export const Default: Story = {
    render() {
        return (
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
          )        
    }
};

