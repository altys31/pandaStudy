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
          py: "10",
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
        <div
          className={css({
            px: "8",
            py: "6",
            borderRadius: "2xl",
            textStyle: "body.large",
            flex: "1",
            textAlign: "center",
            fontWeight: "medium",
          })}
        >
          Select from available days
        </div>
        <div className={grid({ gridTemplateColumns: "repeat(2, 2fr)" })}>
          <button
            className={css({
              px: "8",
              py: "4",
              fontWeight: "semibold",
              flex: "1",
              borderRadius: "2xl",
              textStyle: "body.large",
              layerStyle: "surface.outline",
            })}
          >
            Mon
          </button>
          <button
            className={css({
              px: "8",
              py: "4",
              fontWeight: "semibold",
              flex: "1",
              borderRadius: "2xl",
              textStyle: "body.large",
              layerStyle: "control.disabled",
              color: "gray.400",
            })}
          >
            Tue
          </button>
          <button
            className={css({
              px: "8",
              py: "4",
              fontWeight: "semibold",
              flex: "1",
              borderRadius: "2xl",
              textStyle: "body.large",
              layerStyle: "control.selected",
            })}
          >
            Wed
          </button>
          <button
            className={css({
              px: "8",
              py: "4",
              fontWeight: "semibold",
              flex: "1",
              borderRadius: "2xl",
              textStyle: "body.large",
              layerStyle: "surface.outline",
            })}
          >
            Thur
          </button>
        </div>
      </div>
    </div>
  );
};
