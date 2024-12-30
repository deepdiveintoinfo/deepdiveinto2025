import React from 'react'
import type { Preview } from "@storybook/react";

import '../src/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/lib/client'
import { TooltipProvider } from '../src/components/ThirdParty/ShadCn/Tooltip'

import { HashRouter } from 'react-router-dom'

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => <ApolloProvider client={client}>
      <TooltipProvider>
        <HashRouter>
          <div className='w-full flex justify-center align-center'>
            <Story />
          </div>
        </HashRouter>
      </TooltipProvider>
    </ApolloProvider>
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      initalActive: 'documentation-glossary--docs'
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      // storySort: (a, b) =>
      //   a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true, caseFirst: "upper" }),
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export default preview;
