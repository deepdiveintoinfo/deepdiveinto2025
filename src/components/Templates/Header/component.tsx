import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ThirdParty/ShadCn/Accordion';
import { Button, buttonVariants } from '@/components/ThirdParty/ShadCn/Button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ThirdParty/ShadCn/NavigationMenu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ThirdParty/ShadCn/Sheet';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import nav from './nav';
import logo from '@/assets/united-states.svg';
import { kebabCase } from 'change-case';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img
      src={logo}
      className="w-8"
      alt="logo"
    />
    <span className="text-xl font-bold" style={{fontFamily: '"Cormorant Garamond", serif', fontWeight: 700}}>DEEPDIVE</span><span style={{fontFamily: '"Dancing Script", cursive'}}>into2025</span>
  </div>
)

const Navbar = () => (
  <div className="hidden lg:flex">
  {nav.map(({ page, url, children }, idx) => {
    if (!children) {
      return (
        <Link
          key={idx}
          to={url}
          className={cn(
            'text-muted-foreground',
            buttonVariants({
              variant: 'ghost',
            })
          )}
        >
          {page}
        </Link>
      );
    }

    return (
      <NavigationMenu key={idx}>
        <NavigationMenuList className='overflow-visible'>
          <NavigationMenuItem
            className={cn(
              'text-muted-foreground hover:bg-transparent active:bg-transparent focus:bg-transparent overflow-visible',
              buttonVariants({
                variant: 'ghost',
              })
            )}
          >
            <NavigationMenuTrigger>
              <Link to={url}>{page}</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                {children.map((section, sectionIdx) => (
                  <li
                    key={sectionIdx}
                    className="relative group"
                  >
                    <Link
                      to={section.url}
                      className={cn(
                        'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      )}
                    >
                      {section.emoji}
                      <div>
                        <div className="text-sm font-semibold">
                          {sectionIdx+1}. {section.section}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {section.description}
                        </p>
                      </div>
                    </Link>
                    {/* Sidebar for chapters */}
                    {section.chapters && (
                        <div
                          className="w-full absolute top-0 right-full z-50 hidden bg-white shadow-lg border group-hover:block"
                          style={{ minHeight: '100%' }}
                        >
                          <ul className="p-3 max-h-72 overflow-y-scroll">
                            {section.chapters.map((chapter, chapterIdx) => (
                              <li
                                key={chapterIdx}
                                className="mb-2"
                              >
                                <Link
                                  to={chapter.url}
                                  className={cn(
                                    'flex items-start gap-2 p-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground'
                                  )}
                                >
                                  <span className="text-lg">{chapter.emoji}</span>
                                  <div>
                                    <div className="text-sm font-medium">
                                      {sectionIdx+1}.{chapterIdx+1}. {chapter.title}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {chapter.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                    )}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  })}
</div>

)

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex lg:hidden">
      <div className="flex items-center justify-between">
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-2">
                  <Logo />
                </div>
                {nav.map(({ page, url, children }, idx) => {
                  if (!children) {
                    return (
                      <p>
                      <Link
                        key={idx}
                        to={url}
                        onClick={() => setIsOpen(false)}
                      >
                        {page}
                      </Link>
                      </p>
                    );
                  }
                  return (
                    <Accordion type='single'>
                    <AccordionItem value={kebabCase(page)}>
                      <AccordionTrigger className="mb-4 py-0 font-semibold">
                        {page}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>Foobar</div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>  
                )
                })}
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div> 
  )
}

export const Header = () => {
  return (
    <div className="container border-b">
      <nav className="z-50 flex justify-center w-full fixed top-0 left-0 border-b bg-zinc-100">
        <div className="container flex justify-between gap-6 pl-2 md:pl-0">
          <Logo />
          <Navbar />
          <MobileNavbar />
        </div>
      </nav>
    </div>
  );
};
