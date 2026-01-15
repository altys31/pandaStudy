import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

export const ProfileCard = () => {
  const ProfileCardStyles = css({
    width: "370px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "10px",
    padding: "24px",
    gap: "16px",
    bg: { base: "bg.card.default", _dark: "bg.card.dark" },
  });

  const ProfileCardTop = css({
    display: "flex",
    justifyContent: "space-between",
  });

  const ProfilePhoto = css({
    alignSelf: "center",
    width: "43px",
    height: "43px",
    borderRadius: "50%",
    bg: "gray",
  });

  const ProfileName = css({
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    color: { base: "fg.default.default", _dark: "fg.default.dark" },
  });

  const ProfileNameText = css({
    fontSize: "16px",
    fontWeight: "600",
  });

  const ProfileJob = css({
    fontSize: "14px",
    fontWeight: "400",
  });

  const ScoreContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "600",
    gap: "6px",
  });

  const DescriptionContainer = css({
    fontSize: "16px",
    fontWeight: "400",
    gap: "6px",
    textAlign: "left",
    color: { base: "fg.subtle.default", _dark: "fg.subtle.dark" },
  });

  const BottomContainer = css({
    display: "flex",
    justifyContent: "space-between",
    gap: "48px",
  });

  const PriceContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "600",
    gap: "24px",
    textAlign: "left",
  });

  const ButtonContainer = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "12px",
    fontSize: "12px",
  });

  const Button = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    border: "1px solid",
    borderColor: { base: "border.default", _dark: "border.dark" },
  });

  return (
    <div className={ProfileCardStyles}>
      <div className={ProfileCardTop}>
        <div className={flex({ flexDirection: "row", gap: "16px" })}>
          <div className={ProfilePhoto} />
          <div className={ProfileName}>
            <div className={ProfileNameText}>John Doe</div>
            <div className={ProfileJob}>Frontend Developer</div>
          </div>
        </div>
        <div className={ScoreContainer}>
          <span>4.2</span>
          <span>☆</span>
        </div>
      </div>
      <div className={DescriptionContainer}>
        Creative developer with a passion for crefting responsive web
        applications
      </div>
      <div className={BottomContainer}>
        <div className={PriceContainer}>
          <div>$40/hr</div>
          <div>Top Rated</div>
        </div>
        <div className={ButtonContainer}>
          <button className={Button}>✉️</button>
          <button className={Button}>❤️</button>
        </div>
      </div>
    </div>
  );
};
