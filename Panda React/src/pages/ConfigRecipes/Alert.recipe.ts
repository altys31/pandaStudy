import { defineRecipe } from "@pandacss/dev";


export const alertRecipe = defineRecipe({
    className: "alert",
    base: {
      p: "16px",
      rounded: "8px",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    variants: {
      status: {
        success: {},
        error: {},
        warning: {},
        info: {},
      },
      variant: {
        solid: {},
        subtle: {},
        outline: {
          bg: "transparent",
          borderWidth: "1px",
          borderStyle: "solid",
        },
      },
    },
    defaultVariants: {
      status: "info",
      variant: "solid",
    },
    compoundVariants: [
      // Success variants
      {
        status: "success",
        variant: "solid",
        css: {
          bg: "green.500",
          color: "white",
        },
      },
      {
        status: "success",
        variant: "subtle",
        css: {
          bg: "green.50",
          color: "green.800",
          borderColor: "green.200",
        },
      },
      {
        status: "success",
        variant: "outline",
        css: {
          borderColor: "green.500",
          color: "green.700",
        },
      },
      // Error variants
      {
        status: "error",
        variant: "solid",
        css: {
          bg: "red.500",
          color: "white",
        },
      },
      {
        status: "error",
        variant: "subtle",
        css: {
          bg: "red.50",
          color: "red.800",
          borderColor: "red.200",
        },
      },
      {
        status: "error",
        variant: "outline",
        css: {
          borderColor: "red.500",
          color: "red.700",
        },
      },
      // Warning variants
      {
        status: "warning",
        variant: "solid",
        css: {
          bg: "yellow.500",
          color: "gray.900", // 노란색은 검은 텍스트
        },
      },
      {
        status: "warning",
        variant: "subtle",
        css: {
          bg: "yellow.50",
          color: "yellow.800",
          borderColor: "yellow.200",
        },
      },
      {
        status: "warning",
        variant: "outline",
        css: {
          borderColor: "yellow.500",
          color: "yellow.700",
        },
      },
      // Info variants
      {
        status: "info",
        variant: "solid",
        css: {
          bg: "blue.500",
          color: "white",
        },
      },
      {
        status: "info",
        variant: "subtle",
        css: {
          bg: "blue.50",
          color: "blue.800",
          borderColor: "blue.200",
        },
      },
      {
        status: "info",
        variant: "outline",
        css: {
          borderColor: "blue.500",
          color: "blue.700",
        },
      },
    ],
  });