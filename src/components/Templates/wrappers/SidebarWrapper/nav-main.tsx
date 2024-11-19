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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ThirdParty/ShadCn/Sidebar"

import { Link } from "react-router-dom"

export function NavMain({
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

  const [currentSection, setCurrentSection] = useState<string | null>(null)
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={currentSection ? currentSection === item.title : `${window.location.hash.replace('#', '')}`.startsWith(item.url)}
            onOpenChange={(open) => setCurrentSection(open ? item.title : null)}
            defaultOpen = {`${window.location.hash.replace('#', '')}`.startsWith(item.url)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton  tooltip={item.title} isActive={`${window.location.hash}`.startsWith(item.url) ? true : false}>
                  {item.icon && <item.icon />}
                  <span className="inline-block ml-2">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={`${window.location.hash.replace('#', '')}`.startsWith(subItem.url) ? true : false}>
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
