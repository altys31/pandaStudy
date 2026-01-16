import { css, sva, type RecipeVariant } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns/flex";

export const SlotRecipesEx = () => {
  //세로로 길게 이어져있고 중간중간 마다 체크포인트가 있는 형태
  const ProgressSlotRecipe = sva({
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
        default: {},
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

  type ProgressVariant = RecipeVariant<typeof ProgressSlotRecipe>;

  interface ProgressProps extends ProgressVariant {
    title: string;
    description: string;
    checked: boolean;
    index: number;
  }

  const ProgressCheckpoint = ({
    size,
    checked,
  }: Pick<ProgressProps, "size" | "checked">) => {
    const styles = ProgressSlotRecipe({ checked, size });
    return <div className={styles.checkpoint}>{checked ? "✓" : ""}</div>;
  };

  const ProgressLine = ({ size }: Pick<ProgressProps, "size">) => {
    const styles = ProgressSlotRecipe({ size });
    return <div className={styles.line}></div>;
  };

  const ProgressTitle = ({
    size,
    title,
  }: Pick<ProgressProps, "size" | "title">) => {
    const styles = ProgressSlotRecipe({ size });
    return <div className={styles.title}>{title}</div>;
  };

  const ProgressDescription = ({
    size,
    description,
  }: Pick<ProgressProps, "size" | "description">) => {
    const styles = ProgressSlotRecipe({ size });
    return <div className={styles.description}>{description}</div>;
  };

  const ProgressSlotRecipeComponent = ({
    title,
    description,
    checked,
    size,
    index,
  }: ProgressProps) => {
    const styles = ProgressSlotRecipe({ size });
    return (
      <div className={styles.root}>
        <div
          className={flex({
            direction: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "2px",
          })}
        >
          <ProgressCheckpoint checked={checked} size={size} />
          {index !== 3 && <ProgressLine size={size} />}
        </div>
        <div
          className={css({
            textAlign: "left",
            alignSelf: "start",
          })}
        >
          <ProgressTitle title={title} size={size} />
          <ProgressDescription description={description} size={size} />
        </div>
      </div>
    );
  };

  const titles = ["Ordered", "Shiped", "Out for delivery", "Delivered"];
  const descriptions = [
    "9:15 AM, January 2024",
    "12:45 PM, January 5 2024",
    "07:00 AM, January 8, 2024",
    "Estimated delivery today by 5:30 PM",
  ];
  const checked = [true, true, false, false];

  return (
    <div>
      <div className={css({ mt: "0.25rem" })}>Size = Medium</div>
      {titles.map((_, i) => (
        <ProgressSlotRecipeComponent
          title={titles[i]}
          description={descriptions[i]}
          checked={checked[i]}
          size="md"
          index={i}
          key={i}
        />
      ))}
      <div className={css({ mt: "0.25rem" })}>Size = Small</div>
      {titles.map((_, i) => (
        <ProgressSlotRecipeComponent
          title={titles[i]}
          description={descriptions[i]}
          checked={checked[i]}
          size="sm"
          index={i}
          key={i}
        />
      ))}
    </div>
  );
};
