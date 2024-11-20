/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@radix-ui/themes';
import './styles/globals.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as pages from './components/Pages'
import { PageWrapper, IndexWrapper } from './components/Templates/wrappers';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SidebarWrapper } from './components/Templates/wrappers/SidebarWrapper';


const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo"); // Retrieve scroll target from URL
    const hash = location.hash.replace("#", ""); // Retrieve hash value, if any

    const targetId = scrollTo || hash; // Prefer scrollTo, fallback to hash

    if (targetId) {
      // If a target ID is provided, scroll to that element
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return; // Exit early as we're scrolling to a specific element
      }
    }

    // Fallback: If no target ID or element found, scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search, location.hash, location.pathname]);

  return null;
};

/**
 * Router documentation https://reactrouter.com/en/main/routers/create-hash-router
 */
const router = createHashRouter(Object.entries(pages).map(([path, Element]) => {
  return ({
    ...Element,
    // element: path == 'IndexPage' ? <SidebarWrapper><ScrollHandler /><Element /></SidebarWrapper> : <SidebarWrapper><ScrollHandler /><Element /></SidebarWrapper>
    element: (
      <SidebarWrapper>
        <ScrollHandler />
        <Element />
      </SidebarWrapper>)
  })
}), {
});

function App() {
  return (
    <TooltipProvider>
      <Theme className='flex justify-center' accentColor="crimson" grayColor="sand" radius="large" scaling="100%" style={{width: '100%', overflow: 'hidden'}}>
          <RouterProvider router={router} />
      </Theme>
    </TooltipProvider>
  )
}

export default App
