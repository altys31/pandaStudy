import { css } from "../../../styled-system/css";
import { cva } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";

// ✅ 실무에서 많이 사용하는 패턴: CVA + css() 병합

// 1. CVA로 기본 variants 정의
const button = cva({
  base: {
    px: "16px",
    py: "8px",
    rounded: "6px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
      },
      secondary: {
        bg: "gray.200",
        color: "gray.900",
        _hover: { bg: "gray.300" },
      },
    },
    size: {
      sm: { px: "12px", py: "6px", fontSize: "14px" },
      md: { px: "16px", py: "8px", fontSize: "16px" },
      lg: { px: "20px", py: "10px", fontSize: "18px" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// 2. 추가 스타일을 별도로 정의
const disabledStyles = css({
  opacity: 0.5,
  cursor: "not-allowed",
  _hover: {
    bg: "inherit", // hover 효과 제거
  },
});

const loadingStyles = css({
  position: "relative",
  color: "transparent",
  _after: {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    w: "16px",
    h: "16px",
    border: "2px solid",
    borderColor: "currentColor",
    borderTopColor: "transparent",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },
});

export const Recipe = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        css() 병합 패턴 실무 예제
      </h1>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 기본 사용법
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>css()</code> 함수는 여러 인자를 받아서 병합할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          {/* ✅ CVA만 사용 */}
          <button className={button({ variant: "primary" })}>CVA만</button>

          {/* ✅ CVA + css() 병합 (cx 사용) */}
          <button
            className={cx(
              button({ variant: "primary" }),
              css({
                // 추가 스타일
                border: "2px solid",
                borderColor: "blue.700",
              })
            )}
          >
            CVA + 추가 스타일
          </button>

          {/* ✅ CVA + 미리 정의된 스타일 병합 */}
          <button
            className={cx(button({ variant: "primary" }), disabledStyles)}
          >
            Disabled
          </button>

          {/* ✅ CVA + 여러 스타일 병합 */}
          <button
            className={cx(
              button({ variant: "primary" }),
              loadingStyles,
              css({
                minW: "120px",
              })
            )}
          >
            Loading
          </button>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 조건부 스타일 병합
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          조건에 따라 스타일을 병합할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          {[false, true].map((isDisabled) => (
            <button
              key={String(isDisabled)}
              className={cx(
                button({ variant: "primary", size: "lg" }),
                isDisabled && disabledStyles,
                css({
                  // 항상 적용되는 스타일
                  w: "150px",
                })
              )}
            >
              {isDisabled ? "Disabled" : "Enabled"}
            </button>
          ))}
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 실무 패턴: 컴포넌트에서 사용
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          컴포넌트에서 props에 따라 동적으로 스타일을 병합합니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          <ButtonExample
            variant="primary"
            size="md"
            disabled={false}
            loading={false}
          />
          <ButtonExample
            variant="secondary"
            size="lg"
            disabled={true}
            loading={false}
          />
          <ButtonExample
            variant="primary"
            size="sm"
            disabled={false}
            loading={true}
          />
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 여러 CVA 병합
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          여러 CVA를 병합하여 사용할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          <button
            className={cx(
              button({ variant: "primary" }),
              button({ size: "lg" }), // size만 적용
              css({
                // 추가 커스텀 스타일
                borderRadius: "12px",
                boxShadow: "md",
              })
            )}
          >
            병합된 버튼
          </button>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          실무 팁
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
              <strong>CVA로 기본 variants 정의:</strong> 재사용 가능한
              variants는 CVA로 정의합니다.
            </li>
            <li>
              <strong>css()로 추가 스타일 병합:</strong> 컴포넌트별 특수한
              스타일은 css()로 병합합니다.
            </li>
            <li>
              <strong>조건부 병합:</strong>{" "}
              <code>css(cva(), condition && additionalStyles)</code> 형태로
              사용합니다.
            </li>
            <li>
              <strong>순서 중요:</strong> 나중에 오는 스타일이 이전 스타일을
              덮어씁니다.
            </li>
            <li>
              <strong>타입 안전성:</strong> CVA와 css() 모두 TypeScript 타입을
              지원합니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// 실무 컴포넌트 예제
interface ButtonExampleProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
}

const ButtonExample = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
}: ButtonExampleProps) => {
  return (
    <button
      className={cx(
        button({ variant, size }),
        disabled && disabledStyles,
        loading && loadingStyles,
        css({
          // 항상 적용되는 스타일
          position: "relative",
        })
      )}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : disabled ? "Disabled" : "Click me"}
    </button>
  );
};
