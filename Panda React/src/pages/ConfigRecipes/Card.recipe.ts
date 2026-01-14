import { defineRecipe } from "@pandacss/dev";

export const cardRecipe = defineRecipe({
  className: "card",
  base: {
    w: "311px",
    h: "210px",
    p: "25px 20px 25px 20px",
    bg: "white",
    rounded: "12px",
    transition: "all 0.2s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "start",
  },
  variants: {
    variant: {
      default: {},
      elevated: {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      outlined: {
        border: "1px solid #F2F2F2",
      },
      filled: {
        bg: "#F1F1F1",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
  compoundVariants: [
    {
      variant: "elevated",
      css: {
        boxShadow: "sm",
        transform: "translateY(-2px)",
      },
    },
    {
      variant: "elevated",
      css: {
        boxShadow: "md",
        _hover: {
          boxShadow: "lg",
          transform: "translateY(-2px)",
        },
      },
    },
    {
      variant: "elevated",
      css: {
        boxShadow: "lg",
        _hover: {
          boxShadow: "xl",
          transform: "translateY(-4px)",
        },
      },
    },
  ],
});
