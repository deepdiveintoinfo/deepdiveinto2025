/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { 
  render, 
  screen, 
} from '@testing-library/react';
import { Button } from '..';
import { faker } from '@faker-js/faker';

describe('<Button />', () => {
  describe('Props', () => {
      test('debug', () => {
        const { debug } = render(<Button />);
        debug()
      });
  });
  describe('Variants', () => {

      describe('variant', () => {
  
        test('default', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"default"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90')
          expect(container).toMatchSnapshot();
        })
        test('destructive', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"destructive"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('bg-destructive text-destructive-foreground hover:bg-destructive/90')
          expect(container).toMatchSnapshot();
        })
        test('outline', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"outline"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('border border-input bg-background hover:bg-accent hover:text-accent-foreground')
          expect(container).toMatchSnapshot();
        })
        test('secondary', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"secondary"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('bg-secondary text-secondary-foreground hover:bg-secondary/80')
          expect(container).toMatchSnapshot();
        })
        test('ghost', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"ghost"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('hover:bg-accent hover:text-accent-foreground')
          expect(container).toMatchSnapshot();
        })
        test('link', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"link"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('text-primary underline-offset-4 hover:underline')
          expect(container).toMatchSnapshot();
        })
        test('expandIcon', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"expandIcon"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('group relative text-primary-foreground bg-primary hover:bg-primary/90')
          expect(container).toMatchSnapshot();
        })
        test('ringHover', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"ringHover"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2')
          expect(container).toMatchSnapshot();
        })
        test('shine', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"shine"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ')
          expect(container).toMatchSnapshot();
        })
        test('gooeyRight', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"gooeyRight"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ')
          expect(container).toMatchSnapshot();
        })
        test('gooeyLeft', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"gooeyLeft"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ')
          expect(container).toMatchSnapshot();
        })
        test('linkHover1', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"linkHover1"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300')
          expect(container).toMatchSnapshot();
        })
        test('linkHover2', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button variant={"linkHover2"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300')
          expect(container).toMatchSnapshot();
        })
      })
      describe('size', () => {
  
        test('default', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button size={"default"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('h-10 px-4 py-2')
          expect(container).toMatchSnapshot();
        })
        test('sm', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button size={"sm"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('h-9 rounded-md px-3')
          expect(container).toMatchSnapshot();
        })
        test('lg', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button size={"lg"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('h-11 rounded-md px-8')
          expect(container).toMatchSnapshot();
        })
        test('icon', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<Button size={"icon"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('h-10 w-10')
          expect(container).toMatchSnapshot();
        })
      })
    })
  })
