import { defineSlotRecipe } from "@pandacss/dev";

export const progressRecipe = defineSlotRecipe({
    className: "progress",
    slots: ["root", "checkpoint", "line", "title", "description"],
    base: {
      root: {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        mt: "2px",
        gap: "16px",
        ml: "2rem",
        height: "inherit",
      },
      checkpoint: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        w: "24px",
        h: "24px",
        border: "1px solid #D2D8E0",
        borderRadius: "50%",
        mt: "0.2rem",
      },
      line: {
        w: "2px",
        bg: "#D9D9D9",
        position: "relative",
        top: "0",
        left: "0",
      },
      title: {
        fontSize: "14px",
        fontWeight: "500",
      },
      description: {
        fontSize: "12px",
        fontWeight: "400",
        color: "#949494",
      },
    },
    variants: {
      checked: {
        true: {
          checkpoint: {
            bg: "#3A3A3A",
            color: "white",
          },
        },
        false: {
          checkpoint: {
            border: "2px solid #D9D9D9",
          },
        },
      },
      size: {
        default: {
        },
        sm: {
          checkpoint: {
            w: "16px",
            h: "16px",
            fontSize: "10px",
          },
          line: {
            h: "32px",
          },
          title: {
            fontSize: "14px",
          },
          description: {
            fontSize: "12px",
            fontWeight: "400",
            color: "#949494",
          },
        },
        md: {
          checkpoint: {
            w: "24px",
            h: "24px",
            fontSize: "16px",
          },
          line: {
            h: "44px",
          },
          title: {
            fontSize: "16px",
            fontWeight: "500",
          },
          description: {
            fontSize: "14px",
            fontWeight: "400",
            color: "#949494",
          },
        },
      },
    },
  });