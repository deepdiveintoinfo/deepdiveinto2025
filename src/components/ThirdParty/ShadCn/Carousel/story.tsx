import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '.';
import { default as Card, CardContent } from '../Card';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    docs: {
      subtitle: 'Displays a carousel or a component that looks like a carousel.',
      description: {
        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/carousel) | [Embla Carousel Documentation](https://www.embla-carousel.com/get-started/react/) | [API Reference](https://www.embla-carousel.com/api/)'
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    className: "w-full max-w-xs ml-10",
    children: <>
      <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </>
,
  },
};
