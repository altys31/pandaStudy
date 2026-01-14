import { cva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";

// ✅ Badge CVA Recipe 정의
const badge = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    userSelect: "none",
  },
  variants: {
    variant: {
      solid: {},
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      subtle: {},
    },
    colorScheme: {
      blue: {},
      green: {},
      red: {},
      yellow: {},
      purple: {},
      gray: {},
    },
    size: {
      sm: {
        px: "6px",
        py: "2px",
        fontSize: "12px",
        lineHeight: "1.2",
        minH: "20px",
      },
      md: {
        px: "8px",
        py: "4px",
        fontSize: "14px",
        lineHeight: "1.4",
        minH: "24px",
      },
      lg: {
        px: "12px",
        py: "6px",
        fontSize: "16px",
        lineHeight: "1.5",
        minH: "28px",
      },
    },
    rounded: {
      none: {
        borderRadius: "0",
      },
      sm: {
        borderRadius: "4px",
      },
      md: {
        borderRadius: "6px",
      },
      lg: {
        borderRadius: "8px",
      },
      full: {
        borderRadius: "9999px",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    colorScheme: "blue",
    size: "md",
    rounded: "md",
  },
  compoundVariants: [
    // Solid variants
    {
      variant: "solid",
      colorScheme: "blue",
      css: { bg: "blue.500", color: "white" },
    },
    {
      variant: "solid",
      colorScheme: "green",
      css: { bg: "green.500", color: "white" },
    },
    {
      variant: "solid",
      colorScheme: "red",
      css: { bg: "red.500", color: "white" },
    },
    {
      variant: "solid",
      colorScheme: "yellow",
      css: { bg: "yellow.500", color: "gray.900" },
    }, // 노란색은 검은 텍스트
    {
      variant: "solid",
      colorScheme: "purple",
      css: { bg: "purple.500", color: "white" },
    },
    {
      variant: "solid",
      colorScheme: "gray",
      css: { bg: "gray.500", color: "white" },
    },
    // Outline variants
    {
      variant: "outline",
      colorScheme: "blue",
      css: { borderColor: "blue.500", color: "blue.500" },
    },
    {
      variant: "outline",
      colorScheme: "green",
      css: { borderColor: "green.500", color: "green.500" },
    },
    {
      variant: "outline",
      colorScheme: "red",
      css: { borderColor: "red.500", color: "red.500" },
    },
    {
      variant: "outline",
      colorScheme: "yellow",
      css: { borderColor: "yellow.500", color: "yellow.500" },
    },
    {
      variant: "outline",
      colorScheme: "purple",
      css: { borderColor: "purple.500", color: "purple.500" },
    },
    {
      variant: "outline",
      colorScheme: "gray",
      css: { borderColor: "gray.500", color: "gray.500" },
    },
    // Subtle variants
    {
      variant: "subtle",
      colorScheme: "blue",
      css: { bg: "blue.50", color: "blue.700" },
    },
    {
      variant: "subtle",
      colorScheme: "green",
      css: { bg: "green.50", color: "green.700" },
    },
    {
      variant: "subtle",
      colorScheme: "red",
      css: { bg: "red.50", color: "red.700" },
    },
    {
      variant: "subtle",
      colorScheme: "yellow",
      css: { bg: "yellow.50", color: "yellow.700" },
    },
    {
      variant: "subtle",
      colorScheme: "purple",
      css: { bg: "purple.50", color: "purple.700" },
    },
    {
      variant: "subtle",
      colorScheme: "gray",
      css: { bg: "gray.100", color: "gray.700" },
    },
  ],
});

export const CreatingBadgeRecipe = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Badge Recipe with CVA
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Badge Recipe란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Badge는 작은 라벨이나 태그를 표시하는 컴포넌트입니다. CVA를 사용하여
          다양한 variant, colorScheme, size를 정의할 수 있습니다.
        </p>
        <div
          className={css({
            p: "16px",
            bg: "blue.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "blue.200",
          })}
        >
          <strong>주요 특징:</strong>
          <ul
            className={css({
              mt: "8px",
              ml: "20px",
              listStyle: "disc",
              textAlign: "left",
            })}
          >
            <li>variant: solid, outline, subtle</li>
            <li>colorScheme: blue, green, red, yellow, purple, gray</li>
            <li>size: sm, md, lg</li>
            <li>rounded: none, sm, md, lg, full</li>
          </ul>
        </div>
      </section>

      {/* Variant 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Variant (solid, outline, subtle)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Badge의 스타일 variant를 선택할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            Solid Variant
          </h3>
          <div
            className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}
          >
            <span className={badge({ variant: "solid", colorScheme: "blue" })}>
              Blue
            </span>
            <span className={badge({ variant: "solid", colorScheme: "green" })}>
              Green
            </span>
            <span className={badge({ variant: "solid", colorScheme: "red" })}>
              Red
            </span>
            <span
              className={badge({ variant: "solid", colorScheme: "yellow" })}
            >
              Yellow
            </span>
            <span
              className={badge({ variant: "solid", colorScheme: "purple" })}
            >
              Purple
            </span>
            <span className={badge({ variant: "solid", colorScheme: "gray" })}>
              Gray
            </span>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            Outline Variant
          </h3>
          <div
            className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}
          >
            <span
              className={badge({ variant: "outline", colorScheme: "blue" })}
            >
              Blue
            </span>
            <span
              className={badge({ variant: "outline", colorScheme: "green" })}
            >
              Green
            </span>
            <span className={badge({ variant: "outline", colorScheme: "red" })}>
              Red
            </span>
            <span
              className={badge({ variant: "outline", colorScheme: "yellow" })}
            >
              Yellow
            </span>
            <span
              className={badge({ variant: "outline", colorScheme: "purple" })}
            >
              Purple
            </span>
            <span
              className={badge({ variant: "outline", colorScheme: "gray" })}
            >
              Gray
            </span>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            Subtle Variant
          </h3>
          <div
            className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}
          >
            <span className={badge({ variant: "subtle", colorScheme: "blue" })}>
              Blue
            </span>
            <span
              className={badge({ variant: "subtle", colorScheme: "green" })}
            >
              Green
            </span>
            <span className={badge({ variant: "subtle", colorScheme: "red" })}>
              Red
            </span>
            <span
              className={badge({ variant: "subtle", colorScheme: "yellow" })}
            >
              Yellow
            </span>
            <span
              className={badge({ variant: "subtle", colorScheme: "purple" })}
            >
              Purple
            </span>
            <span className={badge({ variant: "subtle", colorScheme: "gray" })}>
              Gray
            </span>
          </div>
        </div>
      </section>

      {/* Size 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. Size (sm, md, lg)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Badge의 크기를 조정할 수 있습니다.
        </p>

        <div
          className={css({
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          })}
        >
          <span className={badge({ size: "sm", colorScheme: "blue" })}>
            Small
          </span>
          <span className={badge({ size: "md", colorScheme: "blue" })}>
            Medium
          </span>
          <span className={badge({ size: "lg", colorScheme: "blue" })}>
            Large
          </span>
        </div>
      </section>

      {/* Rounded 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Rounded (none, sm, md, lg, full)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Badge의 모서리 둥글기를 조정할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          <span className={badge({ rounded: "none", colorScheme: "blue" })}>
            None
          </span>
          <span className={badge({ rounded: "sm", colorScheme: "blue" })}>
            Small
          </span>
          <span className={badge({ rounded: "md", colorScheme: "blue" })}>
            Medium
          </span>
          <span className={badge({ rounded: "lg", colorScheme: "blue" })}>
            Large
          </span>
          <span className={badge({ rounded: "full", colorScheme: "blue" })}>
            Full (Pill)
          </span>
        </div>
      </section>

      {/* 조합 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. Variants 조합
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          여러 variants를 조합하여 사용할 수 있습니다.
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          <div
            className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}
          >
            <span
              className={badge({
                variant: "solid",
                colorScheme: "green",
                size: "sm",
                rounded: "full",
              })}
            >
              Success
            </span>
            <span
              className={badge({
                variant: "outline",
                colorScheme: "red",
                size: "md",
                rounded: "lg",
              })}
            >
              Error
            </span>
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "yellow",
                size: "lg",
                rounded: "md",
              })}
            >
              Warning
            </span>
          </div>
        </div>
      </section>

      {/* 실전 예제 - 상태 표시 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 실전 예제 - 상태 표시
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          실제 사용 사례: 상태, 카테고리, 알림 등을 표시합니다.
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          {/* 주문 상태 */}
          <div
            className={css({
              display: "flex",
              gap: "12px",
              alignItems: "center",
            })}
          >
            <span className={css({ fontSize: "14px", color: "gray.700" })}>
              주문 상태:
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "green",
                size: "sm",
                rounded: "full",
              })}
            >
              배송 완료
            </span>
            <span
              className={badge({
                variant: "outline",
                colorScheme: "blue",
                size: "sm",
                rounded: "full",
              })}
            >
              배송 중
            </span>
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "yellow",
                size: "sm",
                rounded: "full",
              })}
            >
              준비 중
            </span>
          </div>

          {/* 알림 카운트 */}
          <div
            className={css({
              display: "flex",
              gap: "12px",
              alignItems: "center",
            })}
          >
            <span className={css({ fontSize: "14px", color: "gray.700" })}>
              알림:
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "red",
                size: "sm",
                rounded: "full",
              })}
            >
              5
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "sm",
                rounded: "full",
              })}
            >
              12
            </span>
          </div>

          {/* 카테고리 태그 */}
          <div
            className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}
          >
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "purple",
                size: "md",
                rounded: "md",
              })}
            >
              #React
            </span>
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "blue",
                size: "md",
                rounded: "md",
              })}
            >
              #TypeScript
            </span>
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "green",
                size: "md",
                rounded: "md",
              })}
            >
              #PandaCSS
            </span>
          </div>
        </div>
      </section>

      {/* 아이콘과 함께 사용 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 아이콘과 함께 사용
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Badge에 아이콘을 추가하여 더 풍부한 정보를 전달할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
        >
          <span
            className={cx(
              badge({ variant: "solid", colorScheme: "green", size: "md" }),
              css({ gap: "4px" })
            )}
          >
            <span>✓</span>
            <span>Active</span>
          </span>
          <span
            className={cx(
              badge({ variant: "outline", colorScheme: "red", size: "md" }),
              css({ gap: "4px" })
            )}
          >
            <span>✕</span>
            <span>Inactive</span>
          </span>
          <span
            className={cx(
              badge({ variant: "subtle", colorScheme: "blue", size: "md" }),
              css({ gap: "4px" })
            )}
          >
            <span>ℹ</span>
            <span>Info</span>
          </span>
        </div>
      </section>

      {/* 닫기 버튼이 있는 Badge */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 닫기 버튼이 있는 Badge
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Badge에 닫기 버튼을 추가하여 제거 가능하게 만들 수 있습니다.
        </p>

        <div className={css({ display: "flex", gap: "8px", flexWrap: "wrap" })}>
          {["React", "Vue", "Angular"].map((tag) => (
            <span
              key={tag}
              className={cx(
                badge({
                  variant: "subtle",
                  colorScheme: "blue",
                  size: "md",
                  rounded: "full",
                }),
                css({ gap: "6px", pr: "4px" })
              )}
            >
              <span>{tag}</span>
              <button
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  w: "16px",
                  h: "16px",
                  rounded: "50%",
                  bg: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                  color: "inherit",
                  opacity: 0.7,
                  _hover: {
                    opacity: 1,
                    bg: "rgba(0,0,0,0.1)",
                  },
                })}
                onClick={() => console.log(`Remove ${tag}`)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* 사용 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          사용 팁
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "yellow.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "yellow.200",
          })}
        >
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "8px",
              textAlign: "left",
            })}
          >
            <li>
              <strong>CVA로 variants 정의:</strong> 재사용 가능한 Badge
              variants를 CVA로 정의합니다.
            </li>
            <li>
              <strong>compoundVariants:</strong> 특정 조합에서만 적용되는
              스타일을 정의할 수 있습니다 (예: yellow solid는 검은 텍스트).
            </li>
            <li>
              <strong>cx()로 추가 스타일 병합:</strong> 아이콘이나 닫기 버튼 등
              추가 요소가 필요할 때 cx()를 사용합니다.
            </li>
            <li>
              <strong>의미론적 사용:</strong> variant와 colorScheme을 의미에
              맞게 사용합니다 (success=green, error=red 등).
            </li>
            <li>
              <strong>접근성:</strong> Badge는 정보를 전달하는 용도이므로 적절한
              색상 대비를 유지합니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
