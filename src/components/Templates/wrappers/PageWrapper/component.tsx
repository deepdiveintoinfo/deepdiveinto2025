import { useState } from "react";
import { ReactNode } from "react"
import { Header } from "@/components/Templates/Header"

  
  export const PageWrapper = ({children}: {children: ReactNode}) => {
    return (
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="container pt-16">
          {children}
        </div>
      </div>

    )
  }

  export const IndexWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex flex-col items-center justify-start h-full w-full bg-gray-50">
        <header className="w-full bg-primary text-primary-foreground py-4 shadow-md">
          <nav className="max-w-5xl mx-auto flex justify-between items-center px-4 lg:px-8">
            {/* Logo */}
            <a href="/" className="text-2xl font-display font-bold tracking-wide">
              Deep Dive Into 2025
            </a>
  
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
  
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-6 text-sm font-medium">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:underline">
                  Goals
                </a>
              </li>
              <li>
                <a href="#why-this-matters" className="hover:underline">
                  Why This Matters
                </a>
              </li>
              <li>
                <a href="#how-you-can-help" className="hover:underline">
                  How to Help
                </a>
              </li>
              <li>
                <a href="/chapters" className="hover:underline">
                  Chapters
                </a>
              </li>
              <li>
                <a href="/contribute" className="hover:underline">
                  Contribute
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="w-full max-w-5xl px-4 lg:px-8 mt-8">{children}</main>
        <footer className="w-full bg-secondary text-secondary-foreground py-4 mt-16">
          <div className="max-w-5xl mx-auto text-center text-sm">
            © {new Date().getFullYear()} Deep Dive Into 2025. All rights reserved.
          </div>
        </footer>
      </div>
    );
  };
  
  /* Mobile Menu Component */
  const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-darker text-primary-foreground hover:bg-primary-dark transition"
          aria-label="Toggle Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-primary text-primary-foreground shadow-md z-10 flex flex-col items-start px-4 py-4 space-y-2">
            <li>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#goals"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                Goals
              </a>
            </li>
            <li>
              <a
                href="#why-this-matters"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                Why This Matters
              </a>
            </li>
            <li>
              <a
                href="#how-you-can-help"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                How to Help
              </a>
            </li>
            <li>
              <a
                href="/chapters"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                Chapters
              </a>
            </li>
            <li>
              <a
                href="/contribute"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:underline"
              >
                Contribute
              </a>
            </li>
          </ul>
        )}
      </>
    );
  };
  