import { defineConfig} from "@pandacss/dev";
import { badgeRecipe } from "./src/pages/ConfigRecipes/Badge.recipe";
import { alertRecipe } from "./src/pages/ConfigRecipes/Alert.recipe";
import { cardRecipe } from "./src/pages/ConfigRecipes/Card.recipe";
import { progressRecipe } from "./src/pages/SlotRecipes/Progress.recipe";
import { pandaPreset } from "./panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-panda', pandaPreset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss: {
    body: {
      bg : {base: "#F8FAFC", _dark: '#111827'},
      color: {base: "#111827", _dark: "#F8FAFC"},
    },
  },
  theme: {
    extend: {
        semanticTokens: {
          fonts:{
            cardTitle: {
              value: "Inter",
            }
          },
          colors: {
            cardBg: {
              value: "white",
            },
            cardAccent: {
              value: 'black',
            }
          }
        },
      recipes: {
        badge: badgeRecipe,
        alert: alertRecipe,
        card: cardRecipe,
        progress: progressRecipe,
      },
    },
  },
  conditions:{
    extend: {
      icon: '& > div',
    },
  },

  themes: {
    kent:{
      semanticTokens: {
        fonts:{
          cardTitle: {
            value: "Domine", 
          }
        },
        colors: {
          cardBgr: {
            value: "white",
          },
          cardAccent: {
            value: '{colors.red.500}',
          }
        }
      },
    },
    oxford: {
      semanticTokens: {
        fonts:{
          cardTitle: {
            value: "Paytone One",
          }
        },
        colors: {
          cardBg: {
            value: '{colors.green.50}',
          },
          cardAccent: {
            value: '{colors.green.600}',
          }
        }
      },
    }
  },

  staticCss: {
    themes: ['*'],
  },

  jsxStyleProps: "all",
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
