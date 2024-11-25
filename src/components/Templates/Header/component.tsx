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
import { ScrollArea } from '@/components/ThirdParty/ShadCn/ScrollArea/component';

const subMenuItemsOne = [
  {
    title: '1. Taking the Reins of Government',
    description: 'Focuses on restructuring the White House and executive offices to centralize control.',
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: '2. The Common Defense',
    description: 'Focuses on national security, military, and foreign relations strategies.',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: '3. The General Welfare',
    description: 'Covers healthcare, education, environmental policy, and housing programs.',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: '4. The Economy',
    description:
      'Focuses on trade, financial systems, and economic development initiatives.',
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: '5. Independent Regulatory Agencies',
    description:
      'Addresses oversight bodies like the Federal Reserve, FCC, and SEC.',
    icon: <Zap className="size-5 shrink-0" />,
  },
];

export const Header = () => {
  return (
    <div className="container border-b">
      <nav className="z-50 hidden justify-center lg:flex w-full fixed top-0 left-0 border-b bg-zinc-100">
        <div className="container flex justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={'/assets/united-states.svg'}
              className="w-8"
              alt="logo"
            />
            <span className="text-xl font-bold">DEEPDIVE</span><span>into2025</span>
          </div>
          <div className="flex">
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
        </div>
      </nav>
    </div>
  );
};


export const OldHeader = () => {
  return (
      <div className="container border-b">
        <nav className="z-50 hidden justify-center lg:flex w-full fixed top-0 left-0 border-b bg-zinc-100">
          <div className="container flex justify-between gap-6">
            <div className="flex items-center gap-2">
              <img
                src={'/assets/united-states.svg'}
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold">DEEPDIVE</span><span>into2025</span>
            </div>
            <div className="flex">
              {nav.map(({page, url, children}, idx) => {
                if(!children) {
                  return (
                    <Link key={idx} to={url} className={cn(
                      'text-muted-foreground',
                      buttonVariants({
                        variant: 'ghost',
                      }),
                    )}>
                        {page}
                    </Link>
                  )
                }

                return (
                  <NavigationMenu key={idx}>
                    <NavigationMenuList>
                      <NavigationMenuItem className={cn(
                        'text-muted-foreground hover:bg-transparent active:bg-transparent focus:bg-transparent',
                        buttonVariants({
                          variant: 'ghost',
                        }),
                      )}>
                        <NavigationMenuTrigger>
                          <Link to={url}>
                            {page}
                          </Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-96">
                            <NavigationMenuLink>
                              {children.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    className={cn(
                                      'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                    )}
                                    to={item.url}
                                  >
                                    {item.emoji}
                                    <div>
                                      <div className="text-sm font-semibold">
                                        {item.section}
                                      </div>
                                      <p className="text-sm leading-snug text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </NavigationMenuLink>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
  
                )
              })}
            </div>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold">Shadcn Blocks</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.shadcnblocks.com/images/block/block-1.svg"
                        className="w-8"
                        alt="logo"
                      />
                      <span className="text-xl font-bold">Shadcn Blocks</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href="#" className="font-semibold">
                    Pricing
                  </a>
                  <Link to="project2025">

                  <a className="font-semibold">
                    Explore Project 2025
                  </a>
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant={'outline'}>Log in</Button>
                    <Button>Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
  );
};
