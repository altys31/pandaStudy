import { useState } from "react";
import { css } from "../../../styled-system/css";
import { ProfileCard } from "../Styling Foundation/ProfileCard";
import { useTheme } from "next-themes";

export const DesignTokensExcercise = () => {
  const theme = useTheme();
  const [colorMode, setColorMode] = useState(theme.theme);

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    theme.setTheme(colorMode === "light" ? "dark" : "light");
  };

  return (
    <div className={css({ containerType: "inline-size" })}>
      <button
        onClick={toggleColorMode}
        className={css({
          position: "relative",
          w: "120px",
          h: "40px",
          borderRadius: "8px",
          border: "1px solid #333333",
          bg: "bg.default.default",
          color: "fg.default.default",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          mt: "24px",
          mb: "24px",
        })}
      >
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <div
        className={css({
          display: "flex",
          flexDirection: { base: "column", "@/6xl": "row" },
          gap: { base: "48px", "@/3xl": "64px" },
          p: "48px",
          bg: { base: "bg.default.default", _dark: "bg.default.dark" },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "left",
          })}
        >
          <h1
            className={css({
              fontSize: "32px",
              fontWeight: "600",
              color: { base: "fg.default.default", _dark: "fg.default.dark" },
            })}
          >
            Hire Talents
          </h1>
          <div
            className={css({
              fontSize: "20px",
              fontWeight: "400",
              color: { base: "fg.subtle.default", _dark: "fg.subtle.dark" },
            })}
          >
            Connect with professionals around the world to get your projects
            done easily
          </div>
          <div
            className={css({
              fontSize: "20px",
              fontWeight: "600",
              color: { base: "fg.default.default", _dark: "fg.default.dark" },
            })}
          >
            View more
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",

            "@container (min-width: 720px)": {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            },
          })}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <ProfileCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignTokensExcercise;
