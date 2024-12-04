import { sections } from "@/lib/data/project2025";
  
  
export default [
  {
    page: "Contribute",
    url: "/contribute",
  },
  {
        page: "Explore Project 2025",
        url: "/project2025",
        children: sections,
    },
    {
        page: "FAQ",
        url: "/faq",
    },
    {
      page: "About",
      url: "/about",
    },
]