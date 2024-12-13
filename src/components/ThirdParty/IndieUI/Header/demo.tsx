import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { Header } from './index';
import Button from '@/components/ThirdParty/IndieUI/Button';
 
const headerLinks = [
  { name: 'Features', href: '/header-demo/#features' },
  { name: 'Pricing', href: '/header-demo/#pricing' },
  { name: 'FAQs', href: '/header-demo/#faqs' },
];
const icons = [
  {
    name: 'Twitter',
    icon: <FaXTwitter size="14" />,
    href: 'https://x.com',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size="14" />,
    href: 'https://github.com',
  },
];
const HeaderLink = (props: { href: string; name: string }) => {
  return <a href={props.href}>{props.name}</a>;
};
export const HeaderDemo = ({
  variant = 'default',
}: {
  variant: 'default' | 'centered';
}) => (
  <Header
    variant={variant}
    Logo={<a href="#">Click me</a>}
    desktopItems={
      <>
        {headerLinks.map((link, i) => (
          <HeaderLink key={i} href={link.href} name={link.name} />
        ))}
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {headerLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={'outline'}
            className="w-full rounded-xl justify-center"
            size="lg"
            onClick={() => setIsOpen(false)}
          >
            <a href={link.href}>{link.name}</a>
          </Button>
        ))}
        <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-center grow gap-2">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={'outline'}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={icon.href}>{icon.icon}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </>
    )}
  />
);
