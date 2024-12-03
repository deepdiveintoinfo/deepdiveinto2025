import React from 'react';
import { cn } from '@/lib/utils';

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "relative rounded-md border-l-8 border-secondary bg-white py-6 pl-8 pr-4 font-sans text-sm md:text-lg italic leading-relaxed text-muted-dark before:absolute before:left-3 before:top-3 before:font-serif before:text-5xl before:text-secondary-dark before:content-['“']",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p className={cn('mt-4 pr-4 text-right font-bold not-italic text-sm md:text-base text-primary-dark', className)}>
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
