/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@radix-ui/themes';
import './styles/globals.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import * as pages from './components/Pages'

/**
 * Router documentation https://reactrouter.com/en/main/routers/create-hash-router
 */
const router = createHashRouter(Object.entries(pages).map(([_, Element]) => {
  return ({
    ...Element,
    element: <Element />,
  })
}), {
});

console.log(router.routes)


function App() {
  return (
    <Theme className='flex justify-center' accentColor="crimson" grayColor="sand" radius="large" scaling="100%" style={{width: '100%', overflow: 'hidden'}}>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
