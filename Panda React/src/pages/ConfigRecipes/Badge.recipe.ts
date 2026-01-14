import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
    className: "badge",
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "500",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      userSelect: "none",
    },
    variants: {
      variant: {
        solid: {},
        outline: {
          bg: "transparent",
          borderWidth: "1px",
          borderStyle: "solid",
        },
        subtle: {},
      },
      colorScheme: {
        blue: {},
        green: {},
        red: {},
        yellow: {},
        purple: {},
        gray: {},
      },
      size: {
        sm: {
          px: "6px",
          py: "2px",
          fontSize: "12px",
          lineHeight: "1.2",
          minH: "20px",
        },
        md: {
          px: "8px",
          py: "4px",
          fontSize: "14px",
          lineHeight: "1.4",
          minH: "24px",
        },
        lg: {
          px: "12px",
          py: "6px",
          fontSize: "16px",
          lineHeight: "1.5",
          minH: "28px",
        },
      },
      radius: {
        none: {
          borderRadius: "0",
        },
        sm: {
          borderRadius: "4px",
        },
        md: {
          borderRadius: "6px",
        },
        lg: {
          borderRadius: "8px",
        },
        full: {
          borderRadius: "9999px",
        },
      },
    },
    defaultVariants: {
      variant: "solid",
      colorScheme: "blue",
      size: "md",
      radius: "md",
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        colorScheme: "blue",
        css: { bg: "blue.500", color: "white" },
      },
      {
        variant: "solid",
        colorScheme: "green",
        css: { bg: "green.500", color: "white" },
      },
      {
        variant: "solid",
        colorScheme: "red",
        css: { bg: "red.500", color: "white" },
      },
      {
        variant: "solid",
        colorScheme: "yellow",
        css: { bg: "yellow.500", color: "gray.900" },
      }, // 노란색은 검은 텍스트
      {
        variant: "solid",
        colorScheme: "purple",
        css: { bg: "purple.500", color: "white" },
      },
      {
        variant: "solid",
        colorScheme: "gray",
        css: { bg: "gray.500", color: "white" },
      },
      // Outline variants
      {
        variant: "outline",
        colorScheme: "blue",
        css: { borderColor: "blue.500", color: "blue.500" },
      },
      {
        variant: "outline",
        colorScheme: "green",
        css: { borderColor: "green.500", color: "green.500" },
      },
      {
        variant: "outline",
        colorScheme: "red",
        css: { borderColor: "red.500", color: "red.500" },
      },
      {
        variant: "outline",
        colorScheme: "yellow",
        css: { borderColor: "yellow.500", color: "yellow.500" },
      },
      {
        variant: "outline",
        colorScheme: "purple",
        css: { borderColor: "purple.500", color: "purple.500" },
      },
      {
        variant: "outline",
        colorScheme: "gray",
        css: { borderColor: "gray.500", color: "gray.500" },
      },
      // Subtle variants
      {
        variant: "subtle",
        colorScheme: "blue",
        css: { bg: "blue.50", color: "blue.700" },
      },
      {
        variant: "subtle",
        colorScheme: "green",
        css: { bg: "green.50", color: "green.700" },
      },
      {
        variant: "subtle",
        colorScheme: "red",
        css: { bg: "red.50", color: "red.700" },
      },
      {
        variant: "subtle",
        colorScheme: "yellow",
        css: { bg: "yellow.50", color: "yellow.700" },
      },
      {
        variant: "subtle",
        colorScheme: "purple",
        css: { bg: "purple.50", color: "purple.700" },
      },
      {
        variant: "subtle",
        colorScheme: "gray",
        css: { bg: "gray.100", color: "gray.700" },
      },
    ],
  });