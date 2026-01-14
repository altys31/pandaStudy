import { defineConfig} from "@pandacss/dev";
import { badgeRecipe } from "./src/pages/ConfigRecipes/Badge.recipe";
import { alertRecipe } from "./src/pages/ConfigRecipes/Alert.recipe";
import { cardRecipe } from "./src/pages/ConfigRecipes/Card.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

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
      recipes: {
        badge: badgeRecipe,
        alert: alertRecipe,
        card: cardRecipe,
      },
    },
  },
  conditions:{
    extend: {
      icon: '& > div',
    },
  },

  
  // The output directory for your css system
  outdir: "styled-system",
});
