import { ReactNode, useState } from "react"
import { useLocation } from "react-router-dom"
import { DocumentSidebar } from "./document-sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  default as Breadcrumb,
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
  useSidebar,
} from "@/components/ThirdParty/ShadCn/Sidebar"
import * as changeCase from 'change-case'
import { SiteSidebar } from "./sidebars/site-sidebar"
import { Book, BookOpen, Menu, X, ChevronRight, ChevronLeft } from "lucide-react"


// Define the TypeScript interfaces
export const SidebarWrapper = ({children}: {children: ReactNode}) => {
  const isMobile = useIsMobile();
    const location = useLocation();
    const pathNameChunks = location.pathname.split('/');
    const currentChunk = pathNameChunks.pop();
    console.log({isMobile})

    const CloseLeftSidebarIcon = ({...props}) => {
      const { setOpenMobile } = useSidebar()
      return isMobile ? <X onClick={() => {
        setOpenMobile(false)
        setIsLeftSidebarOpen(false)
      }} {...props} /> : <ChevronLeft onClick={() => {
        setIsLeftSidebarOpen(false)
      }} {...props} />
    }
    const OpenLeftSidebarIcon = ({ ...props}) => {
      return isMobile ? <Menu onClick={() => {
        setIsLeftSidebarOpen(true)
      }} {...props} /> : <ChevronRight onClick={() => {
        setIsLeftSidebarOpen(true)
      }} {...props} />
    }
    
    const CloseRightSidebarIcon = ({...props}) => {
      const { setOpen, setOpenMobile } = useSidebar()
      return isMobile ? <Book onClick={() => setOpenMobile(false)} {...props} /> : <BookOpen onClick={() => setOpen(false)} {...props} />
    }
    const OpenRightSidebarIcon = ({ ...props}) => {
      const { setOpen, setOpenMobile } = useSidebar()
      return isMobile ? <Book onClick={() => setOpenMobile(true)} {...props} /> : <Book onClick={() => setOpen(true)} {...props} />
    }

    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);


    return (
      <>
      <SidebarProvider  open={isLeftSidebarOpen || false} onOpenChange={setIsLeftSidebarOpen} openMobile={isLeftSidebarOpen} onOpenMobileChange={setIsLeftSidebarOpen}>
        <SiteSidebar side="left" />
        <SidebarProvider open={isRightSidebarOpen} onOpenChange={setIsRightSidebarOpen} openMobile={isRightSidebarOpen} onOpenMobileChange={setIsRightSidebarOpen}>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear justify-between">
            <div className="flex items-center gap-2 px-4">
              { isLeftSidebarOpen ?
                <CloseLeftSidebarIcon className="-ml-1" /> :
                <OpenLeftSidebarIcon className="-ml-1" />
              }
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
                      <BreadcrumbSeparator className="hidden md:block" />
                    </>
                  )}
                  <BreadcrumbItem>
                    <BreadcrumbSeparator className="block md:hidden" />
                    <BreadcrumbPage>{changeCase.capitalCase(currentChunk || '')}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            { location.pathname.startsWith('/project2025') && <div className="mr-9">
                {isRightSidebarOpen ?
                
                  <CloseRightSidebarIcon className="-ml-1" /> : 
                  <OpenRightSidebarIcon className="-ml-1" />
                }
            </div> }

          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children || <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />}

          </div>
        </SidebarInset>
          { location.pathname.startsWith('/project2025') && <DocumentSidebar variant="sidebar" side="right" /> }
        </SidebarProvider>
      </SidebarProvider>
      </>
    )
  }
