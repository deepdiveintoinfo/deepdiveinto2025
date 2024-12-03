// import * as theme from './src/lib/tailwind/theme/index.mjs'
import pkg from 'tailwindcss/defaultTheme.js'


/** @type {import('tailwindcss').Config} */

const { fontFamily, colors } = pkg

const theme = {
  extend: {
    fontFamily: {
      sans: ['Source Sans Pro', ...fontFamily.sans], // Default sans-serif font
      display: ['Bangers', ...fontFamily.sans], // Optional heading font
    },
    spacing: {
      /* USWDS Spacing Scale */
      '1': '0.25rem', // 4px
      '2': '0.5rem', // 8px
      '3': '0.75rem', // 12px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '7': '2rem', // 32px
      '8': '2.5rem', // 40px
      '9': '3rem', // 48px
      '10': '4rem', // 64px
      '12': '6rem', // 96px
      '14': '8rem', // 128px
      indent: '2rem', // 32px
    },
    borderRadius: {
      /* USWDS Border Radii */
      none: '0px',
      sm: '0.25rem', // 4px
      DEFAULT: '0.375rem', // 6px
      md: '0.5rem', // 8px
      lg: '1rem', // 16px
      full: '9999px', // Fully rounded
    },
    boxShadow: {
      /* USWDS Box Shadows */
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)', // Subtle shadow
      DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)', // Medium shadow
      md: '0 4px 6px rgba(0, 0, 0, 0.15)', // Moderate shadow
      lg: '0 10px 15px rgba(0, 0, 0, 0.2)', // Prominent shadow
    },
    colors: {
      ...colors,
      gradient: 'var(--gradient)',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      'muted-foreground': 'hsl(var(--muted-foreground))',
      popover: 'hsl(var(--popover))',
      'popover-foreground': 'hsl(var(--popover-foreground))',
      card: 'hsl(var(--card))',
      'card-foreground': 'hsl(var(--card-foreground))',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        lighter: 'hsl(var(--primary-lighter))',
        light: 'hsl(var(--primary-light))',
        vivid: 'hsl(var(--primary-vivid))',
        dark: 'hsl(var(--primary-dark))',
        darker: 'hsl(var(--primary-darker))',
      },
      'primary-foreground': 'hsl(var(--primary-foreground))',
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        lighter: 'hsl(var(--secondary-lighter))',
        light: 'hsl(var(--secondary-light))',
        vivid: 'hsl(var(--secondary-vivid))',
        dark: 'hsl(var(--secondary-dark))',
        darker: 'hsl(var(--secondary-darker))',
      },
      'secondary-foreground': 'hsl(var(--secondary-foreground))',
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        lighter: 'hsl(var(--muted-lighter))',
        light: 'hsl(var(--muted-light))',
        dark: 'hsl(var(--muted-dark))',
        darker: 'hsl(var(--muted-darker))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        lighter: 'hsl(var(--accent-cool-lighter))',
        'cool-light': 'hsl(var(--accent-cool-light))',
        'cool-dark': 'hsl(var(--accent-cool-dark))',
        'cool-darker': 'hsl(var(--accent-cool-darker))',
        'warm-lighter': 'hsl(var(--accent-warm-lighter))',
        'warm-light': 'hsl(var(--accent-warm-light))',
        'warm-dark': 'hsl(var(--accent-warm-dark))',
        'warm-darker': 'hsl(var(--accent-warm-darker))',
      },
      'accent-foreground': 'hsl(var(--accent-foreground))',
      destructive: 'hsl(var(--destructive))',
      'destructive-foreground': 'hsl(var(--destructive-foreground))',
      ring: 'hsl(var(--ring))',
      filter: {
        "blur-20": "blur(20px)",
        "blur-25": "blur(25px)",
      },
      sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        light: 'hsl(var(--sidebar-background-light))',
        dark: 'hsl(var(--sidebar-background-dark))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--sidebar-primary))',
          lighter: 'hsl(var(--sidebar-primary-lighter))',
          light: 'hsl(var(--sidebar-primary-light))',
          dark: 'hsl(var(--sidebar-primary-dark))',
          darker: 'hsl(var(--sidebar-primary-darker))',
        },
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: {
          DEFAULT: 'hsl(var(--sidebar-accent))',
          light: 'hsl(var(--sidebar-accent-light))',
          dark: 'hsl(var(--sidebar-accent-dark))',
        },
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: {
          DEFAULT: 'hsl(var(--sidebar-border))',
          light: 'hsl(var(--sidebar-border-light))',
          dark: 'hsl(var(--sidebar-border-dark))',
        },
        ring: 'hsl(var(--sidebar-ring))',
      },
    },
      typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.800'), // Default text color
          a: {
            color: theme('colors.blue.500'),
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          h1: {
            fontWeight: '700',
            fontSize: theme('fontSize.3xl'),
          },
          h2: {
            fontWeight: '600',
            fontSize: theme('fontSize.2xl'),
          },
          h3: {
            fontWeight: '600',
            fontSize: theme('fontSize.xl'),
          },
        },
      },
    }),
  },
}




export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
    './public/index.html', // Include HTML templates if any
  ],
  prefix: "",
  theme,
  plugins: [
    import("tailwindcss-animate"),
    import("@tailwindcss/typography")
  ],
  safelist: [
    'text-yellow-500', // Add the specific class manually if dynamically generated
    'text-gray-500',
    'text-green-500',
  ],
}
