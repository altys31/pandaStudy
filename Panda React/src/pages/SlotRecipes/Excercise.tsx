import { css, sva } from "../../../styled-system/css";

export const SlotRecipesEx = () => {
  //세로로 길게 이어져있고 중간중간 마다 체크포인트가 있는 형태
  const ProgressSlotRecipe = sva({
    slots: ["root", "checkpoint", "line", "label"],
    base: {
      root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "1rem",
      },
      checkpoint: {
        w: "24px",
        h: "24px",
        border: "1px solid #D2D8E0",
        borderRadius: "50%",
      },
      line: {
        h: "60px",
        w: "1px",
        bg: "gray.500",
        position: "relative",
        top: "0",
        left: "0",
      },
      label: {
        ml: "12px",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
  });
  return (
    <div>
      <div className={css(ProgressSlotRecipe({}))}>
        <div className={css({})}></div>
        <div className={css({})}></div>
      </div>
    </div>
  );
};
