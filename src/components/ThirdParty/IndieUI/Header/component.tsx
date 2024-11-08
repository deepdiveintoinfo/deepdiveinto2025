import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { MobileHeader } from './variants/MobileHeader';
import { cn } from '@/lib/utils';
import { headerVariants } from '.'
 
export interface HeaderProps extends VariantProps<typeof headerVariants> {
  sticky?: boolean;
  Logo: React.ReactNode;
  /**
   * Items to be displayed on mobile
   */
  mobileItems: ({
    setIsOpen,
  }: {
    setIsOpen: (open: boolean) => void;
  }) => React.ReactNode | React.ReactNode;
  /**
   * Items to be displayed on desktop
   */
  desktopItems: React.ReactNode;
}
 
//======================================
export const Header = ({
  Logo,
  sticky,
  variant,
  mobileItems,
  desktopItems,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'flex w-full dark:bg-zinc-950/50 backdrop-blur bg-zinc-50',
        sticky && variant == 'centered' && 'md:sticky top-3',
        sticky && variant == 'default' && 'md:sticky top-0'
      )}
    >
      <div className={cn('hidden md:block', headerVariants({ variant }))}>
        <div className="flex-row-start px-6 pb-2 pt-3 w-full gap-2">
          {Logo}
        </div>
        <nav className="grow flex-row-end gap-3 lg:gap-8">{desktopItems}</nav>
      </div>
      <MobileHeader Logo={Logo}>{mobileItems}</MobileHeader>
    </header>
  );
};