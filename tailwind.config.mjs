// import * as theme from './src/lib/tailwind/theme/index.mjs'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

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
      gradient: 'var(--gradient)',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      muted: 'hsl(var(--muted))',
      'muted-foreground': 'hsl(var(--muted-foreground))',
      popover: 'hsl(var(--popover))',
      'popover-foreground': 'hsl(var(--popover-foreground))',
      card: 'hsl(var(--card))',
      'card-foreground': 'hsl(var(--card-foreground))',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      primary: 'hsl(var(--primary))',
      'primary-foreground': 'hsl(var(--primary-foreground))',
      secondary: 'hsl(var(--secondary))',
      'secondary-foreground': 'hsl(var(--secondary-foreground))',
      accent: 'hsl(var(--accent))',
      'accent-foreground': 'hsl(var(--accent-foreground))',
      destructive: 'hsl(var(--destructive))',
      'destructive-foreground': 'hsl(var(--destructive-foreground))',
      ring: 'hsl(var(--ring))',
      filter: {
        "blur-20": "blur(20px)",
        "blur-25": "blur(25px)",
      },
      'comics': {
        'caption': {
          light: '#fef896',
          DEFAULT: "#e3ec1a",
          'shadow': "#350604"
        }
      }  
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
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme,
  plugins: [
    import("tailwindcss-animate"),
    import("@tailwindcss/typography")
  ],
}
