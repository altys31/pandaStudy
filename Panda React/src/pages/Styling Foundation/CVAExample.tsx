import { cva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";

// ✅ 실무에서 많이 사용하는 CVA 패턴
const button = cva({
  base: {
    px: "16px",
    py: "8px",
    rounded: "6px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    border: "none",
    outline: "none",
    _focus: {
      outline: "2px solid",
      outlineColor: "blue.500",
      outlineOffset: "2px",
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
        _active: { bg: "blue.700" },
      },
      secondary: {
        bg: "gray.200",
        color: "gray.900",
        _hover: { bg: "gray.300" },
        _active: { bg: "gray.400" },
      },
      danger: {
        bg: "red.500",
        color: "white",
        _hover: { bg: "red.600" },
        _active: { bg: "red.700" },
      },
      ghost: {
        bg: "transparent",
        color: "gray.700",
        _hover: { bg: "gray.100" },
      },
    },
    size: {
      sm: {
        px: "12px",
        py: "6px",
        fontSize: "14px",
      },
      md: {
        px: "16px",
        py: "8px",
        fontSize: "16px",
      },
      lg: {
        px: "20px",
        py: "12px",
        fontSize: "18px",
      },
    },
    fullWidth: {
      true: {
        w: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "lg",
      css: {
        fontWeight: "600",
      },
    },
  ],
});

// Card 컴포넌트용 CVA
const card = cva({
  base: {
    p: "24px",
    bg: "white",
    rounded: "12px",
    border: "1px solid",
    borderColor: "gray.200",
    transition: "all 0.2s",
  },
  variants: {
    variant: {
      default: {
        boxShadow: "sm",
      },
      elevated: {
        boxShadow: "md",
        _hover: {
          boxShadow: "lg",
          transform: "translateY(-2px)",
        },
      },
      outlined: {
        boxShadow: "none",
        borderWidth: "2px",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        _hover: {
          borderColor: "blue.500",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const CVAExample = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        CVA 실무 사용 예제
      </h1>

      {/* Button Variants */}
      <section className={css({ mb: "48px" })}>
        <h2 className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}>
          1. Button Variants (CVA)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          CVA를 사용하여 버튼의 variants를 정의하고 재사용합니다.
        </p>

        <div className={css({ display: "flex", flexWrap: "wrap", gap: "12px" })}>
          <button className={button()}>Default</button>
          <button className={button({ variant: "primary" })}>Primary</button>
          <button className={button({ variant: "secondary" })}>Secondary</button>
          <button className={button({ variant: "danger" })}>Danger</button>
          <button className={button({ variant: "ghost" })}>Ghost</button>
        </div>

        <div className={css({ mt: "16px", display: "flex", flexWrap: "wrap", gap: "12px" })}>
          <button className={button({ size: "sm" })}>Small</button>
          <button className={button({ size: "md" })}>Medium</button>
          <button className={button({ size: "lg" })}>Large</button>
        </div>

        <div className={css({ mt: "16px" })}>
          <button className={button({ fullWidth: true })}>
            Full Width Button
          </button>
        </div>

        <div className={css({ mt: "16px", display: "flex", flexWrap: "wrap", gap: "12px" })}>
          <button className={button({ variant: "primary", size: "lg" })}>
            Primary Large (Compound)
          </button>
          <button className={button({ variant: "danger", size: "sm" })}>
            Danger Small
          </button>
        </div>
      </section>

      {/* Card Variants */}
      <section className={css({ mb: "48px" })}>
        <h2 className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}>
          2. Card Variants (CVA)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          CVA를 사용하여 카드의 variants를 정의합니다.
        </p>

        <div className={css({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" })}>
          <div className={card()}>
            <h3 className={css({ fontSize: "18px", fontWeight: "600", mb: "8px" })}>
              Default Card
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              기본 카드 스타일입니다.
            </p>
          </div>

          <div className={card({ variant: "elevated" })}>
            <h3 className={css({ fontSize: "18px", fontWeight: "600", mb: "8px" })}>
              Elevated Card
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              호버 시 그림자가 커집니다.
            </p>
          </div>

          <div className={card({ variant: "outlined", interactive: true })}>
            <h3 className={css({ fontSize: "18px", fontWeight: "600", mb: "8px" })}>
              Interactive Card
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              클릭 가능한 카드입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실무 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2 className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}>
          실무 사용 팁
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "blue.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "blue.200",
          })}
        >
          <ul className={css({ listStyle: "disc", ml: "20px", spaceY: "8px" })}>
            <li>
              <strong>CVA는 컴포넌트 파일과 함께 정의:</strong> 컴포넌트가 있는
              곳에 variants도 함께 관리합니다.
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript와 함께 사용하면 variants의
              타입이 자동으로 추론됩니다.
            </li>
            <li>
              <strong>compoundVariants:</strong> 여러 variants를 조합하여 특별한
              스타일을 적용할 수 있습니다.
            </li>
            <li>
              <strong>defaultVariants:</strong> 기본값을 설정하여 사용을 간편하게
              합니다.
            </li>
            <li>
              <strong>Recipe는 전역 디자인 시스템용:</strong> 모든 프로젝트에서
              동일하게 사용되는 컴포넌트만 Recipe로 정의합니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
