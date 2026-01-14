import { css } from "../../../styled-system/css";
import { cq } from "../../../styled-system/patterns";
import { ProfileCard } from "../Styling Foundation/ProfileCard";

export const Excercise = () => {
  return (
    <div
      className={css({
        p: "4rem",
        mx: "auto",
        display: "flex",
        flexDirection: { base: "row", sm: "column" },
        justifyContent: "space-arund",
        gap: "24px",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          textAlign: "left",
          mr: "48px",
        })}
      >
        <h1 className={css({ fontSize: "32px", fontWeight: "bold" })}>
          Hire Talents
        </h1>
        <div
          className={css({
            fontSize: "16px",
            fontWeight: "400",
            color: "#666",
          })}
        >
          Connect with professionals around the world to get your projects done
          easily
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          width: "100%",
          justifyContent: "center",
        })}
      >
        {/* Container Query를 사용한 반응형 그리드 */}
        <div
          className={css({
            ...cq.raw({ type: "inline-size" }),
            w: "100%",
          })}
        >
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "24px",
              "@container (min-width: 600px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              "@container (min-width: 900px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
              },
            })}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <ProfileCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
