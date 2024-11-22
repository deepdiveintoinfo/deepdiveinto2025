"use client"
import { useState } from "react"
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ThirdParty/ShadCn/Collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ThirdParty/ShadCn/Sidebar"
import { useLocation } from "react-router-dom"

import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

export function ContentNav({
  items,
  title,
}: {
  title: string
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const location = useLocation()
  const isMobile = useIsMobile()
  const {
    setOpen,
    setOpenMobile,
  } = useSidebar()
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            // defaultValue={index === 0 ? "open" : "closed"}
            open={currentSection ? currentSection === item.title : (location.pathname.includes(item.url))}
            onOpenChange={(open) => setCurrentSection(open ? item.title : null)}
            defaultOpen = {true}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} isActive={location.pathname.startsWith(item.url) ? true : false}>
                  {item.icon && <item.icon />}
                  <span className="inline-block ml-2">{item.title}</span>
                  <SidebarMenuAction>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuAction>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={location.pathname.startsWith(subItem.url) ? true : false}
                          onClick={() => {
                            if(isMobile) {
                              setOpenMobile(false)
                              setOpen(false)
                            }
                          }}
                        >
                          <Link reloadDocument to={`${subItem.url}?tabKey=summary`}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )}
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
