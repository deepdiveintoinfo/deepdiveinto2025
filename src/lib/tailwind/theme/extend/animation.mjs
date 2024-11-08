const keyframes = {
    shadcn: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
    },
    animata: {
        meteor: {
            "0%": { transform: "translateY(-20%) translateX(-50%)" },
            "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        "pop-blob": {
            "0%": { transform: "scale(1)" },
            "33%": { transform: "scale(1.2)" },
            "66%": { transform: "scale(0.8)" },
            "100%": { transform: "scale(1)" },
        },
        "bg-position": {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "100% 50%" },
          },
          "shine": {
            from: { backgroundPosition: '200% 0' },
            to: { backgroundPosition: '-200% 0' },
        },  
    },
    'magic-ui': {
        grid: {
            "0%": { transform: "translateY(-50%)" },
            "100%": { transform: "translateY(0)" },
        },
        "shine-pulse": {
            "0%": {
              "background-position": "0% 0%",
            },
            "50%": {
              "background-position": "100% 100%",
            },
            to: {
              "background-position": "0% 0%",
            },
        },  
    }

}

const animations = {
    shadcn: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
    },
    animata: {
        "meteor": "meteor var(--duration) var(--delay) ease-in-out infinite",
        "pop-blob": "pop-blob 5s infinite",
        "shine": "shine 8s ease-in-out infinite",
    },
    'magic-ui': {
        grid: "grid 15s linear infinite",
    }
}

export default {
    animation: {
        ...animations.shadcn,
        ...animations.animata,
        ...animations['magic-ui']
    },
    keyframes: {
        ...keyframes.shadcn,
        ...keyframes.animata,
        ...keyframes['magic-ui']
    },
}