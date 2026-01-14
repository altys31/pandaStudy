import { css } from "../../../styled-system/css";

export const ProfileCard = () => {
  const ProfileCardStyles = css({
    width: "300px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    gap: "8px",
  });

  const ProfileCardTop = css({
    display: "flex",
  });

  const ProfilePhoto = css({
    alignSelf: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    ml: "12px",
    mr: "16px",
    bg: "gray",
  });

  const ProfileName = css({
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
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
    mt: "12px",
    pl: "36px",
    fontSize: "14px",
    fontWeight: "400",
    gap: "6px",
  });

  const DescriptionContainer = css({
    fontSize: "14px",
    fontWeight: "400",
    gap: "6px",
    textAlign: "left",
    ml: "12px",
    color: "#666666",
  });

  const BottomContainer = css({
    display: "flex",
    justifyContent: "space-between",
    mt: "12px",
    gap: "48px",
  });

  const PriceContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "600",
    gap: "12px",
    textAlign: "left",
    ml: "12px",
  });

  const ButtonContainer = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    ml: "12px",
    gap: "12px",
    fontSize: "12px",
  });

  const Button = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    border: "1px solid rgb(225, 225, 225)",
  });

  return (
    <div className={ProfileCardStyles}>
      <div className={ProfileCardTop}>
        <div className={ProfilePhoto} />
        <div className={ProfileName}>
          <div className={ProfileNameText}>John Doe</div>
          <div className={ProfileJob}>Frontend Developer</div>
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
