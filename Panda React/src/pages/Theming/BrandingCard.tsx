import { css } from "../../../styled-system/css";
import { stack } from "../../../styled-system/patterns";
import { useState } from "react";

export const BrandingCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={stack({
        maxW: "320px",
        p: "6",
        gap: "5",
        border: "1px solid",
        borderColor: "gray.400",
        bg: "cardBg",
      })}
    >
      <div
        className={css({
          w: "266px",
          h: "170px",
          bg: "gray.200",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          opacity: `${isLoading} ? 1 : 0`,
        })}
      >
        <div
          className={css({
            position: "absolute",
            w: "24px",
            h: "24px",
            border: "2px solid white",
            borderTopColor: "transparent",
            borderRadius: "full",
            animation: "spin 0.75s linear infinite",
          })}
        />
      </div>
      <img
        className={css({
          w: "266px",
          h: "170px",
          objectFit: "cover",
          position: "absolute",
        })}
        src={`https://picsum.photos/266/170`}
        onLoad={() => setIsLoading(false)}
        alt={"random image"}
      />
      <div
        className={css({
          textTransform: "uppercase",
          fontWeight: "semibold",
          color: "cardAccent",
        })}
      >
        NEW POST
      </div>
      <div
        className={css({
          fontSize: "2xl",
          fontFamily: "cardTitle",
          fontWeight: "semibold",
        })}
      >
        What tech stack are devlepers currently using?
      </div>
      <div
        className={css({
          textTransform: "uppercase",
          fontWeight: "semibold",
          color: "#888",
        })}
      >
        BY CHRISTIE WOOD
      </div>
    </div>
  );
};
