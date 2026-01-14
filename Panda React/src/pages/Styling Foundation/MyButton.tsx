import { css } from "../../../styled-system/css";
import { IoMdLogOut } from "react-icons/io";

export const MyButton = () => {
  return (
    <button
      className={css({
        display: "inline-flex",
        alignItems: "center",
        px: "24px",
        py: "12px",
        gap: "10px",
        bg: "black",
        color: "white",
        fontWeight: "600",
        minHeight: "48px",
        padding: "8px",
        borderRadius: "4px",
        mx: "36",
        my: "12",
        _hover: {
          bg: "#313131",
        },
        _focus: {
          outline: "2px solid #ACACAC",
          outlineOffset: "2px",
        },
        _icon: {
          color: "red",
        },
      })}
    >
      <div
        className={css({ display: "flex", alignItems: "center", gap: "8px" })}
      >
        <IoMdLogOut size={24} />
        Sign in
      </div>
    </button>
  );
};
