import { Menu } from 'lucide-react';
import React from 'react';
import {
  default as Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ThirdParty/ShadCn/Accordion';
import { Button, buttonVariants } from '@/components/ThirdParty/ShadCn/Button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
import { ChapterType, SectionType } from '@/content/project2025/types';

const Logo = ({...props}) => (
  <Link {...props}  className="flex items-center gap-2" to="/">
    <img
      src={logo}
      className="w-8"
      alt="logo"
    />
    <span className="text-xl font-bold" style={{fontFamily: '"Cormorant Garamond", serif', fontWeight: 700}}>DEEPDIVE</span><span style={{fontFamily: '"Dancing Script", cursive'}}>into2025</span>
  </Link>
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
                          {sectionIdx+1}. {section.title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {section.tagline}
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
                                      {chapter.tagline}
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
          <SheetContent side={"left"} className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-2">
                  <Logo onClick={() => setIsOpen(false)} />
                </div>
                {nav.map(({ page, url, children }, idx) => {
                  if (!children) {
                    return (
                      <Link
                        className='block w-full text-left my-4 font-semibold text-gray-900 hover:bg-gray-300'
                        key={`mobile-nav-header-${idx}`}
                        to={url}
                        onClick={() => setIsOpen(false)}
                      >
                        {page}
                      </Link>
                    );
                  }
                  return (
                    <Accordion key={`mobile-nav-header-${idx}`} type='multiple'>
                      <AccordionItem value={kebabCase(page)}>
                        <div className='flex justify-between'>
                          <Link
                            to={url}
                            onClick={() => setIsOpen(false)}
                          >
                            {page}
                          </Link>
                          <AccordionTrigger size={"sm"} className={cn(
                            "font-semibold bg-transparent p-0"
                            )}>
                            
                          </AccordionTrigger>
                        </div>
                        <AccordionContent className='p-0 m-0'>
                          <Accordion className='text-left text-base text-ellipsis p-0 m-0' type='multiple'>
                            {children.map((section: SectionType, idx: number) => (
                              <AccordionItem key={`mobile-nav-${idx}`} value={kebabCase(section.title)}>
                                <div className='flex justify-between'>
                                  <Link to={section.url} onClick={() => setIsOpen(false)}>
                                    {section.emoji} {section.title}
                                  </Link>
                                  <AccordionTrigger className={cn(
                                    `font-semibold bg-transparent p-0 ml-8 -indent-7`,
                                  )}></AccordionTrigger>
                                </div>
                                {section.chapters && (
                                  <AccordionContent className='p-0 m-0'>
                                    {section.chapters.map((chapter: ChapterType, idx2: number) => (
                                      <Link
                                        key={`mobile-nav-sub-${idx}-${idx2}`}
                                        to={chapter.url}
                                        className={cn(
                                          'text-ellipsis px-2 ml-8 -indent-7 py-3 block select-none gap-1 rounded-md no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                        )}
                                        onClick={() => setIsOpen(false)}
                                      >
                                      {chapter.emoji} {chapter.title}
                                      </Link>
                                    ))}
                          </AccordionContent>
                          )}
                          </AccordionItem>
                        ))}
                        </Accordion>
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
        <div className="container flex justify-between px-4 md:px-6">
          <Logo />
          <Navbar />
          <MobileNavbar />
        </div>
      </nav>
    </div>
  );
};