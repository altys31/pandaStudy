import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { LayerStyles } from "./LayerStyles";
import { TypographyStyles } from "./TypographyStyles";

export const ThemeExcercises = () => {
  return (
    <div
      className={flex({
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        p: "24px",
        textAlign: "left",
      })}
    >
      <div className={css({ textStyle: "display.small" })}>
        1. Typography Styles
      </div>
      <TypographyStyles />
      <div className={css({ textStyle: "display.small" })}>2. Layer Styles</div>
      <LayerStyles />
    </div>
  );
};
