import { ReactNode } from "react"
import { Header } from "@/components/Templates/Header"
import { Footer } from "../../Footer/component"

  
  export const PageWrapper = ({children}: {children: ReactNode}) => {
    return (
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="container mt-10 px-4 md:px-6">
          {children}
        </div>
        <Footer />
      </div>

    )
  }