import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { BrandingCard } from "./BrandingCard";
import { LayerStyles } from "./LayerStyles";
import { TypographyStyles } from "./TypographyStyles";
import { useState } from "react";
import type { ThemeName } from "../../../styled-system/themes";

export type BrandingCardTheme = ThemeName | undefined;

export const ThemeExcercises = () => {
  const [cardTheme, setCardTheme] = useState<BrandingCardTheme>();
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
      <div className={css({ gap: "24px" })}>
        <div className={css({ textStyle: "display.small", mb: "24px" })}>
          3. Multi Branding Theme
        </div>
        <select
          value={String(cardTheme)}
          onChange={(e) => setCardTheme(e.target.value as BrandingCardTheme)}
          className={css({
            textStyle: "body.medium",
            border: "1px solid #9CA3AF",
            borderRadius: "8px",
            padding: "8px 16px",
            marginBottom: "24px",
            bg: "#FFFFFF",
          })}
        >
          <option value="">Default</option>
          <option value="kent">Kent</option>
          <option value="oxford">Oxford</option>
        </select>
        <div
          data-panda-theme={String(cardTheme)}
          className={flex({
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          })}
        >
          <BrandingCard />
        </div>
      </div>
    </div>
  );
};
