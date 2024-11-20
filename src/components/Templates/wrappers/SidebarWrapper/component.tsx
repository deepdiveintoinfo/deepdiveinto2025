import { ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { AppSidebar } from "./app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ThirdParty/ShadCn/Breadcrumb"
import { Separator } from "@/components/ThirdParty/ShadCn/Separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ThirdParty/ShadCn/Sidebar"
import * as changeCase from 'change-case'
import { NavSidebar } from "./nav-sidebar"

// Define the TypeScript interfaces
export const SidebarWrapper = ({children}: {children: ReactNode}) => {
    const location = useLocation();
    const pathNameChunks = location.pathname.split('/');
    const currentChunk = pathNameChunks.pop();
    return (
      <>
      <SidebarProvider>
      <NavSidebar />

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">

            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem key={`chunk`}>
                  <BreadcrumbLink href={`#`}>
                      {changeCase.capitalCase('DeepDiveInto 2025')}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                  {pathNameChunks.map((chunk, index) => <>
                      <BreadcrumbItem key={`chunk-${index}}`} className="hidden md:block">
                        <BreadcrumbLink href={`#${pathNameChunks.slice(0, index+1).join('/')}`}>
                          {changeCase.capitalCase(chunk || '')}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />

                    </>
                  )}
                  <BreadcrumbItem>
                    <BreadcrumbPage>{changeCase.capitalCase(currentChunk || '')}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children || <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />}

          </div>
        </SidebarInset>
        { location.pathname.startsWith('/project2025') && <AppSidebar side="right" /> }

      </SidebarProvider>
      </>
    )
  }
