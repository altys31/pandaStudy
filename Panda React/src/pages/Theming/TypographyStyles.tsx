import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

export const TypographyStyles = () => {
  return (
    <div
      className={flex({
        flexDirection: "column",
        w: "573px",
        h: "540px",
        p: "56px 40px 56px 40px",
        gap: "40px",
        border: "1px solid #9CA3AF",
        rounded: "24px",
        textAlign: "left",
      })}
    >
      <div className={flex({ flexDirection: "column", gap: "16px" })}>
        <div
          className={css({
            textStyle: "display.medium",
            fontWeight: "semibold",
          })}
        >
          What's happening
        </div>
        <div className={css({ color: "gray.500", textStyle: "body.large" })}>
          Catch up on the latest new about Panda CSS
        </div>
      </div>

      <div className={flex({ flexDirection: "column", gap: "8px" })}>
        <div
          className={css({
            textStyle: "body.medium",
            color: "gray.500",
          })}
        >
          Open Source - Trending
        </div>
        <div
          className={css({ textStyle: "body.large", fontWeight: "semibold" })}
        >
          Park UI has been upgraded
        </div>
        <div
          className={css({
            textStyle: "body.medium",
            color: "gray.500",
          })}
        >
          12.3k views
        </div>
      </div>

      <div className={flex({ flexDirection: "column", gap: "8px" })}>
        <div
          className={css({
            textStyle: "body.medium",
            color: "gray.500",
          })}
        >
          Funding - Trending
        </div>
        <div
          className={css({
            textStyle: "body.large",
            fontWeight: "semibold",
          })}
        >
          Chakra just raised 1.3M
        </div>
        <div
          className={css({
            textStyle: "body.medium",
            color: "gray.500",
          })}
        >
          452.3k views
        </div>
      </div>

      <a
        href="#"
        className={css({
          textDecoration: "underline",
          textStyle: "body.medium",
          color: "blue.500",
          textDecorationLine: "none",
        })}
      >
        Show more
      </a>
    </div>
  );
};
