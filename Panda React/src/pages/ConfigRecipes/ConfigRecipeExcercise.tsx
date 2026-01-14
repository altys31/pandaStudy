import { css, cva, type RecipeVariant } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const CardRecipes = cva({
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
        boxShadow: "md",
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

type CardVariants = RecipeVariant<typeof CardRecipes>;

const CardRecipeComponent = ({ variant }: CardVariants) => {
  return (
    <div className={CardRecipes({ variant })}>
      <div>
        <div className={css({ fontSize: "16px", fontWeight: "bold" })}>
          United Kingdom
        </div>
        <div
          className={css({
            fontSize: "14px",
            color: "#6B7280",
            textAlign: "start",
          })}
        >
          Tue, 12:30 PM
        </div>
      </div>
      <div>
        <div className={flex({})}>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
            })}
          >
            <div className={css({ fontSize: "64px", fontWeight: "400" })}>
              40
            </div>
            <div className={flex({ alignSelf: "start", mt: "20px" })}>℃</div>
            <div className={css({ fontSize: "48px", ml: "46px" })}>🌤️</div>
          </div>
        </div>
        <div className={flex({ justifyContent: "space-around", gap: "24px" })}>
          <div
            className={flex({
              alignItems: "center",
              gap: "8px",
              textWrap: "nowrap",
            })}
          >
            <div className={css({ fontSize: "14px" })}>🌧️</div>
            <div className={css({ fontSize: "14px", fontWeight: "400" })}>
              4% precipitation
            </div>
          </div>
          <div className={flex({ alignItems: "center", gap: "5px" })}>
            <div className={css({ fontSize: "14px" })}>💨</div>
            <div
              className={css({
                fontSize: "14px",
                fontWeight: "400",
                textWrap: "nowrap",
              })}
            >
              23 km/h Winds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConfigRecipeExcercise = () => {
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
      <CardRecipeComponent variant="outlined" />
      <CardRecipeComponent variant="elevated" />
      <CardRecipeComponent variant="filled" />
    </div>
  );
};
