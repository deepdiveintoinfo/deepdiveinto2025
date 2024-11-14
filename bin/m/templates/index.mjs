import * as changeCase from "change-case";

export const unitTestTemplate = ({componentName, props, variants}) => {
  props;
  return `/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { 
  render, 
  screen, 
} from '@testing-library/react';
import { ${componentName} } from '..';
import { faker } from '@faker-js/faker';

describe('<${componentName} />', () => {
  describe('Props', () => {
      test('debug', () => {
        const { debug } = render(<${componentName} />);
        debug()
      });
  });
  describe('Variants', () => {
${variants ? Object.entries(variants).map(([variantName, variantMetadata]) => `
      describe('${variantName}', () => {
  ${variantMetadata.options ? Object.entries(variantMetadata.options).map(([optionName, optionValue]) => `
        test('${optionName}', () => {
          const id = faker.string.alpha({ length: 5, casing: 'lower' })
          const { container } = render(<${componentName} ${variantName}={"${optionName}"} data-testid={id} />)
          const component = screen.getByTestId(id)
          expect(component).toHaveClass('${optionValue}')
          expect(container).toMatchSnapshot();
        })`).join('') : ''}
      })`).join('') : ''}
    })
  })
`
}


export const componentTemplate = (componentName) => {
    const componentNameTitleCase = changeCase.pascalCase(componentName)
    const componentNameCamelCase = changeCase.camelCase(componentName)
    return `import { forwardRef} from 'react'
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { ${componentNameCamelCase}Variants } from '.'

import { cn } from "@/lib/utils"

export interface ${componentNameTitleCase}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ${componentNameCamelCase}Variants> {
  asChild?: boolean
}

const ${componentNameTitleCase} = forwardRef<HTMLDivElement, ${componentNameTitleCase}Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(${componentNameCamelCase}Variants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
${componentNameTitleCase}.displayName = "${componentNameTitleCase}"

export { ${componentNameTitleCase} }
`
}

export const  indexTemplate = () => `export * from './component'
export * from './variants'
`

export const storyTemplate = (componentName) => {
    const componentNameTitleCase = changeCase.pascalCase(componentName)

    return `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentNameTitleCase} } from '.';


const meta: Meta<typeof ${componentNameTitleCase}> = {
  component: ${componentNameTitleCase},
  tags: ["autodoc"]
};

export default meta;
type Story = StoryObj<typeof ${componentNameTitleCase}>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};
`
}

export const variantsTemplate = (componentName) => {
    const componentNameCamelCase = changeCase.camelCase(componentName)

    return `import { cva } from "class-variance-authority"


export const ${componentNameCamelCase}Variants = cva(
    [],
    {
      variants: {},
      defaultVariants: {},
    }
  )

export default ${componentNameCamelCase}Variants`
}

export const documentationTemplate = (componentName, type, options) => {
  return (`import { Meta } from '@storybook/blocks'

<Meta title="components/${changeCase.pascalCase(type)}/${componentName}" />

# ${changeCase.capitalCase(componentName)}

This component is an implementation of the ${changeCase.capitalCase(type)} type. Below is a walkthrough of how this component was created and how you can customize it further.

## Walkthrough

To create the default ${changeCase.capitalCase(componentName)} component, run the following command:

\`\`\`bash
npx m create ${changeCase.kebabCase(type)} ${changeCase.kebabCase(componentName)}
\`\`\`

This will generate a new component at \`/src/components/${changeCase.pascalCase(type)}/${changeCase.pascalCase(componentName)}\`. The directory structure for this component will include a \`component.tsx\`, \`story.tsx\`, \`index.ts\`, and \`variants.tsx\`.

### Component Code

Below is the generated \`component.tsx\` for the \`${changeCase.pascalCase(componentName)}\` component:

\`\`\`tsx
${componentTemplate(componentName, options)}
\`\`\`

### Index Code

Below is the generated \`component.tsx\` for the \`${changeCase.pascalCase(componentName)}\` component:

\`\`\`tsx
${indexTemplate(options)}
\`\`\`

### Storybook Code

Below is the generated \`story.tsx\` for the \`${changeCase.pascalCase(componentName)}\` component:

\`\`\`tsx
${storyTemplate(componentName, options)}
\`\`\`

### Variants Code

Below is the generated \`variants.tsx\` for the \`${changeCase.pascalCase(componentName)}\` component:

\`\`\`tsx
${variantsTemplate(componentName, options)}
\`\`\`

## Customization

{/* Add your documentation here */}

`)
}

export const pageComponentTemplate = ({nameOfThing, urlPath, options}) => {
    return `import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'
import './style.css'

// Define the TypeScript interfaces
export const ${changeCase.pascalCase(nameOfThing)}Page: PageComponentType = () => {

    // const { ${changeCase.camelCase(nameOfThing)}Id } = useParams()

    return (
      <>
        <h1>${changeCase.capitalCase(nameOfThing)}</h1>
      </>
    );
  }

  ${changeCase.pascalCase(nameOfThing)}Page.path = "${urlPath}"
`

}


export const atomTemplate = (componentName) => componentTemplate(componentName)
export const moleculeTemplate = (componentName) => componentTemplate(componentName)
export const organismTemplate = (componentName) => componentTemplate(componentName)
export const templateTemplate = (componentName) => componentTemplate(componentName)
export const pageTemplate = (componentName) => componentTemplate(componentName)