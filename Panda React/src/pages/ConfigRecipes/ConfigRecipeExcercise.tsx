import { css, type RecipeVariant } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { card } from "../../../styled-system/recipes";

type CardVariants = RecipeVariant<typeof card>;

const CardRecipeComponent = ({ variant }: CardVariants) => {
  return (
    <div className={card({ variant })}>
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
            <div className={css({ fontSize: "12px" })}>🌧️</div>
            <div className={css({ fontSize: "12px", fontWeight: "400" })}>
              4% precipitation
            </div>
          </div>
          <div className={flex({ alignItems: "center", gap: "5px" })}>
            <div className={css({ fontSize: "12px" })}>💨</div>
            <div
              className={css({
                fontSize: "12px",
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
