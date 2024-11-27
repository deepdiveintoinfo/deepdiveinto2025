import { Avatar, AvatarFallback, AvatarImage } from '@/components/ThirdParty/ShadCn/Avatar';
import { Badge } from '@/components/ThirdParty/ShadCn/Badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ThirdParty/ShadCn/Pagination';

const posts = [
  {
    id: 'post-1',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-2',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-3',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-4',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-5',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-6',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-7',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-8',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-9',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '#',
    image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
];

export const ChapterGrid = () => {
  return (
    <section className="">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <p>Duis sem sem, gravida vel porttitor eu, volutpat ut arcu</p>
          <h3 className="mb-4 w-full text-2xl font-medium md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl">
            Chapters
          </h3>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex text-clip rounded-xl md:mb-5">
                <div className="size-full transition duration-300 group-hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[3/2] size-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <Badge>{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {post.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-1.webp" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-xs text-muted-foreground">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 border-t border-border py-2 md:mt-10 lg:mt-12">
          <Pagination>
            <PaginationContent className="w-full justify-between">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <div className="hidden items-center gap-1 md:flex">
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};
