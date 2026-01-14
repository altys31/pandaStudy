import { css, cva } from "../../../styled-system/css";

const CardRecipes = cva({
  base: {
    p: "24px",
    bg: "white",
    rounded: "12px",
    border: "1px solid",
    borderColor: "gray.200",
    transition: "all 0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    variant: {
      default: {},
      elevated: {
        boxShadow: "md",
      },
      outlined: {
        borderWidth: "2px",
      },
    },
    size: {
      sm: {
        w: "240px",
        h: "80px",
        p: "16px",
      },
      md: {
        w: "300px",
        h: "100px",
        p: "32px",
      },
      lg: {
        w: "400px",
        h: "120px",
        p: "48px",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
  compoundVariants: [
    {
      variant: "elevated",
      size: "sm",
      css: {
        boxShadow: "sm",
        transform: "translateY(-2px)",
      },
    },
    {
      variant: "elevated",
      size: "md",
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
      size: "lg",
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

interface CardRecipesProps {
  variant: "elevated" | "outlined";
  size: "sm" | "md" | "lg";
}

const CardRecipeComponent = ({ variant, size }: CardRecipesProps) => {
  return (
    <div className={CardRecipes({ variant, size })}>
      <h1>Card</h1>
    </div>
  );
};

export const Excercise = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        p: "4rem",
      })}
    >
      <CardRecipeComponent variant="elevated" size="sm" />
      <CardRecipeComponent variant="elevated" size="md" />
      <CardRecipeComponent variant="elevated" size="lg" />
    </div>
  );
};
