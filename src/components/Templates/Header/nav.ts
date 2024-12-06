import { sections } from "@/content/project2025";
  
  
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
    page: "About",
    url: "/about",
  },
  {
    page: "FAQ",
    url: "/faq",
  },
]