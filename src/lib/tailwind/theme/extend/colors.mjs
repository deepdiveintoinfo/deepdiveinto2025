// const desiredShades = {
//     '50': 'lightest',
//     '200': 'lighter',
//     '300': 'light',
//     '500': 'DEFAULT',
//     '600': 'dark',
//     '700': 'darker',
//     '900': 'darkest'
// };

// const tokenize = (color) => Object.fromEntries(
//     Object.entries(color)
//       .filter(([shade]) => Object.keys(desiredShades).includes(shade))
//       .map(([shade, value]) => [desiredShades[shade], value])
//   );
  

export default () => ({
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
  })