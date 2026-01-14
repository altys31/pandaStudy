import { useTheme } from "next-themes";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { css } from "../../../styled-system/css";

export const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "12rem",
        color: "black",
        gap: "0.5rem",
      })}
    >
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <IoMdSunny size={24} color="black" />
        ) : (
          <IoMdMoon size={24} color="black" />
        )}
      </button>
      <p className={css({ fontSize: "10px", fontWeight: "300" })}>
        Click Me to Toggle Theme
      </p>
    </div>
  );
};
