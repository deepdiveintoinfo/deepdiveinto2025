import * as theme from './src/lib/tailwind/theme/index.mjs'

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme,
  plugins: [
    import("tailwindcss-animate")
  ],
}
