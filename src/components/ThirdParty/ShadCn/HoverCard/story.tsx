import type { Meta, StoryObj } from '@storybook/react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '.';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { CalendarDays } from 'lucide-react';
import { Button } from '../Button';

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  parameters: {
    docs: {
      subtitle: 'For sighted users to preview content available behind a link.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/hovercard) | [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/components/hover-card) | [API Reference](https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference)'
      },
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    children: <>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </>
  },
};
