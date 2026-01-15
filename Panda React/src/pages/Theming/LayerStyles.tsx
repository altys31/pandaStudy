import { css } from "../../../styled-system/css";
import { flex, grid, stack } from "../../../styled-system/patterns";

export const LayerStyles = () => {
  return (
    <div
      className={flex({
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      })}
    >
      <div
        className={css({
          px: "7",
          py: "4",
          fontWeight: "semibold",
          borderRadius: "xl",
          textStyle: "body.large",
          layerStyle: "control.solid",
          color: "white",
        })}
      >
        Button
      </div>
      <div
        className={stack({
          px: "6",
          py: "4",
          borderRadius: "2xl",
          gap: "24px",
          width: "420px",
          layerStyle: "surface.raised",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div>Select from available days</div>
        <div className={grid({ gridTemplateColumns: "repeat(2, 2fr)" })}>
          <button
            className={css({
              px: "8",
              py: "6",
              fontWeight: "semibold",
              color: "gray.400",
              flex: "1",
              borderRadius: "2xl",
              textStyle: "body.large",
              layerStyle: "control.disabled",
            })}
          >
            Mon
          </button>
          <button>Tue</button>
          <button>Wed</button>
          <button>Thur</button>
        </div>
      </div>
    </div>
  );
};
