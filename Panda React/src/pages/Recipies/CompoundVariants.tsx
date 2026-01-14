import { cva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";

// ✅ CompoundVariants 예제 1: Button
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
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        color: "white",
      },
      secondary: {
        bg: "gray.200",
        color: "gray.900",
      },
      danger: {
        bg: "red.500",
        color: "white",
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
    loading: {
      true: {
        cursor: "wait",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    loading: false,
  },
  compoundVariants: [
    // 1. variant + size 조합
    {
      variant: "primary",
      size: "lg",
      css: {
        fontWeight: "600", // primary + lg일 때만 더 굵게
        boxShadow: "md", // 그림자 추가
      },
    },
    {
      variant: "danger",
      size: "sm",
      css: {
        fontSize: "13px", // danger + sm일 때 폰트 크기 조정
        letterSpacing: "0.5px", // 자간 추가
      },
    },
    // 2. loading 상태 조합
    {
      loading: true,
      variant: "primary",
      css: {
        opacity: 0.7,
        cursor: "wait",
        _hover: {
          bg: "blue.500", // hover 효과 제거
        },
      },
    },
    {
      loading: true,
      variant: "danger",
      css: {
        opacity: 0.7,
        cursor: "wait",
        _hover: {
          bg: "red.500", // hover 효과 제거
        },
      },
    },
    // 3. 여러 조건 조합
    {
      variant: "primary",
      size: "lg",
      loading: true,
      css: {
        position: "relative",
        color: "transparent",
        _after: {
          content: '""',
          position: "absolute",
          //회전
          transform: "rotate(0deg)",
          top: "calc(50% - 10px)",
          left: "calc(50% - 10px)",
          w: "20px",
          h: "20px",
          border: "2px solid white",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 0.6s linear infinite",
        },
      },
    },
  ],
});

// ✅ CompoundVariants 예제 2: Card
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
      default: {},
      elevated: {
        boxShadow: "sm",
      },
      outlined: {
        borderWidth: "2px",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
      },
      false: {},
    },
    size: {
      sm: {
        p: "16px",
      },
      md: {
        p: "24px",
      },
      lg: {
        p: "32px",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    interactive: false,
    size: "md",
  },
  compoundVariants: [
    // interactive + elevated 조합
    {
      interactive: true,
      variant: "elevated",
      css: {
        _hover: {
          boxShadow: "lg",
          transform: "translateY(-4px)",
        },
      },
    },
    // interactive + outlined 조합
    {
      interactive: true,
      variant: "outlined",
      css: {
        _hover: {
          borderColor: "blue.500",
          bg: "blue.50",
        },
      },
    },
    // size + variant 조합
    {
      size: "lg",
      variant: "elevated",
      css: {
        boxShadow: "xl", // 큰 카드는 더 큰 그림자
      },
    },
  ],
});

// ✅ CompoundVariants 예제 3: Alert
const alert = cva({
  base: {
    p: "16px",
    rounded: "8px",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  variants: {
    status: {
      success: {},
      error: {},
      warning: {},
      info: {},
    },
    variant: {
      solid: {},
      subtle: {},
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    },
  },
  defaultVariants: {
    status: "info",
    variant: "solid",
  },
  compoundVariants: [
    // Success variants
    {
      status: "success",
      variant: "solid",
      css: {
        bg: "green.500",
        color: "white",
      },
    },
    {
      status: "success",
      variant: "subtle",
      css: {
        bg: "green.50",
        color: "green.800",
        borderColor: "green.200",
      },
    },
    {
      status: "success",
      variant: "outline",
      css: {
        borderColor: "green.500",
        color: "green.700",
      },
    },
    // Error variants
    {
      status: "error",
      variant: "solid",
      css: {
        bg: "red.500",
        color: "white",
      },
    },
    {
      status: "error",
      variant: "subtle",
      css: {
        bg: "red.50",
        color: "red.800",
        borderColor: "red.200",
      },
    },
    {
      status: "error",
      variant: "outline",
      css: {
        borderColor: "red.500",
        color: "red.700",
      },
    },
    // Warning variants
    {
      status: "warning",
      variant: "solid",
      css: {
        bg: "yellow.500",
        color: "gray.900", // 노란색은 검은 텍스트
      },
    },
    {
      status: "warning",
      variant: "subtle",
      css: {
        bg: "yellow.50",
        color: "yellow.800",
        borderColor: "yellow.200",
      },
    },
    {
      status: "warning",
      variant: "outline",
      css: {
        borderColor: "yellow.500",
        color: "yellow.700",
      },
    },
    // Info variants
    {
      status: "info",
      variant: "solid",
      css: {
        bg: "blue.500",
        color: "white",
      },
    },
    {
      status: "info",
      variant: "subtle",
      css: {
        bg: "blue.50",
        color: "blue.800",
        borderColor: "blue.200",
      },
    },
    {
      status: "info",
      variant: "outline",
      css: {
        borderColor: "blue.500",
        color: "blue.700",
      },
    },
  ],
});

export const CompoundVariants = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        CompoundVariants 예제
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          CompoundVariants란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          CompoundVariants는 <strong>여러 variants를 조합</strong>했을 때만
          적용되는 특별한 스타일을 정의하는 기능입니다.
          <br />
          개별 variant로는 표현하기 어려운 복잡한 조건부 스타일을 쉽게 만들 수
          있습니다.
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
          <strong>사용 시나리오:</strong>
          <ul
            className={css({
              mt: "8px",
              ml: "20px",
              listStyle: "disc",
              textAlign: "left",
            })}
          >
            <li>특정 variant + size 조합에서만 다른 스타일 적용</li>
            <li>여러 조건이 모두 만족될 때만 스타일 적용</li>
            <li>복잡한 상태 조합 처리 (예: loading + primary + large)</li>
            <li>색상 조합에서 특수 케이스 처리 (예: yellow는 검은 텍스트)</li>
          </ul>
        </div>
      </section>

      {/* Button 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Button CompoundVariants
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          variant와 size를 조합하여 특별한 스타일을 적용합니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            variant + size 조합
          </h3>
          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <button className={button({ variant: "primary", size: "sm" })}>
              Primary Small
            </button>
            <button className={button({ variant: "primary", size: "md" })}>
              Primary Medium
            </button>
            <button className={button({ variant: "primary", size: "lg" })}>
              Primary Large (Compound: 더 굵고 그림자)
            </button>
          </div>
          <p
            className={css({ mt: "8px", fontSize: "14px", color: "gray.600" })}
          >
            Primary + Large 조합에서만 fontWeight와 boxShadow가 추가됩니다.
          </p>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            danger + sm 조합
          </h3>
          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <button className={button({ variant: "danger", size: "sm" })}>
              Danger Small (Compound: 자간 추가)
            </button>
            <button className={button({ variant: "danger", size: "md" })}>
              Danger Medium
            </button>
            <button className={button({ variant: "danger", size: "lg" })}>
              Danger Large
            </button>
          </div>
          <p
            className={css({ mt: "8px", fontSize: "14px", color: "gray.600" })}
          >
            Danger + Small 조합에서만 fontSize와 letterSpacing이 조정됩니다.
          </p>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            loading 상태 조합
          </h3>
          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <button className={button({ variant: "primary", loading: true })}>
              Loading Primary
            </button>
            <button className={button({ variant: "danger", loading: true })}>
              Loading Danger
            </button>
            <button
              className={button({
                variant: "primary",
                size: "lg",
                loading: true,
              })}
            >
              Loading Primary Large (3개 조건)
            </button>
          </div>
          <p
            className={css({ mt: "8px", fontSize: "14px", color: "gray.600" })}
          >
            Loading 상태일 때 opacity와 hover 효과가 제거되며, Primary + Large +
            Loading 조합에서는 로딩 스피너가 표시됩니다.
          </p>
        </div>
      </section>

      {/* Card 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. Card CompoundVariants
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          interactive와 variant를 조합하여 다양한 호버 효과를 만듭니다.
        </p>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          })}
        >
          <div className={card({ variant: "elevated", interactive: true })}>
            <h3
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "8px",
              })}
            >
              Elevated + Interactive
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              호버 시 그림자가 커지고 위로 이동합니다.
            </p>
          </div>

          <div className={card({ variant: "outlined", interactive: true })}>
            <h3
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "8px",
              })}
            >
              Outlined + Interactive
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              호버 시 테두리 색상과 배경이 변경됩니다.
            </p>
          </div>

          <div className={card({ variant: "elevated", size: "lg" })}>
            <h3
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "8px",
              })}
            >
              Elevated + Large
            </h3>
            <p className={css({ fontSize: "14px", color: "gray.600" })}>
              큰 카드는 더 큰 그림자가 적용됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Alert 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Alert CompoundVariants
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          status와 variant를 조합하여 다양한 Alert 스타일을 만듭니다.
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          {/* Success */}
          <div>
            <h3 className={css({ fontSize: "18px", mb: "8px" })}>
              Success Alerts
            </h3>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div className={alert({ status: "success", variant: "solid" })}>
                <span>✓</span>
                <div>
                  <strong>Success (Solid)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    작업이 성공적으로 완료되었습니다.
                  </p>
                </div>
              </div>
              <div className={alert({ status: "success", variant: "subtle" })}>
                <span>✓</span>
                <div>
                  <strong>Success (Subtle)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    작업이 성공적으로 완료되었습니다.
                  </p>
                </div>
              </div>
              <div className={alert({ status: "success", variant: "outline" })}>
                <span>✓</span>
                <div>
                  <strong>Success (Outline)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    작업이 성공적으로 완료되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          <div>
            <h3 className={css({ fontSize: "18px", mb: "8px" })}>
              Error Alerts
            </h3>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div className={alert({ status: "error", variant: "solid" })}>
                <span>✕</span>
                <div>
                  <strong>Error (Solid)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    오류가 발생했습니다.
                  </p>
                </div>
              </div>
              <div className={alert({ status: "error", variant: "subtle" })}>
                <span>✕</span>
                <div>
                  <strong>Error (Subtle)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    오류가 발생했습니다.
                  </p>
                </div>
              </div>
              <div className={alert({ status: "error", variant: "outline" })}>
                <span>✕</span>
                <div>
                  <strong>Error (Outline)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    오류가 발생했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div>
            <h3 className={css({ fontSize: "18px", mb: "8px" })}>
              Warning Alerts
            </h3>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div
                className={cx(
                  alert({
                    status: "warning",
                    variant: "solid",
                  }),
                  css({ textAlign: "left" })
                )}
              >
                <span>⚠</span>
                <div>
                  <strong>Warning (Solid)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    주의가 필요합니다. (Compound: 검은 텍스트)
                  </p>
                </div>
              </div>
              <div
                className={cx(
                  alert({ status: "warning", variant: "subtle" }),
                  css({ textAlign: "left" })
                )}
              >
                <span>⚠</span>
                <div>
                  <strong>Warning (Subtle)</strong>
                  <p className={css({ fontSize: "14px", mt: "4px" })}>
                    주의가 필요합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 코드 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 코드 예제
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          CompoundVariants를 정의하는 방법입니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "gray.200",
            fontFamily: "monospace",
            fontSize: "12px",
            overflowX: "auto",
          })}
        >
          <pre
            className={css({
              whiteSpace: "pre",
              color: "gray.800",
              textAlign: "left",
            })}
          >
            {`const button = cva({
  base: { /* 기본 스타일 */ },
  variants: {
    variant: { primary: {}, danger: {} },
    size: { sm: {}, lg: {} },
    loading: { true: {}, false: {} },
  },
  compoundVariants: [
    // 1. 두 개의 variant 조합
    {
      variant: "primary",
      size: "lg",
      css: {
        fontWeight: "600",
        boxShadow: "md",
      },
    },
    // 2. 세 개의 variant 조합
    {
      variant: "primary",
      size: "lg",
      loading: true,
      css: {
        position: "relative",
        color: "transparent",
        _after: { /* 로딩 스피너 */ },
      },
    },
    // 3. 배열로 여러 값 중 하나
    {
      variant: ["primary", "danger"],
      size: "sm",
      css: {
        fontSize: "13px",
      },
    },
  ],
});`}
          </pre>
        </div>
      </section>

      {/* 배열 조건 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 배열 조건 사용
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          배열을 사용하여 여러 값 중 하나라도 만족하면 적용할 수 있습니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "gray.200",
            fontFamily: "monospace",
            fontSize: "12px",
            overflowX: "auto",
          })}
        >
          <pre
            className={css({
              whiteSpace: "pre",
              color: "gray.800",
              textAlign: "left",
            })}
          >
            {`compoundVariants: [
  // primary 또는 danger일 때
  {
    variant: ["primary", "danger"],
    size: "lg",
    css: {
      fontWeight: "600",
    },
  },
  // sm 또는 md일 때
  {
    variant: "primary",
    size: ["sm", "md"],
    css: {
      letterSpacing: "0.5px",
    },
  },
]`}
          </pre>
        </div>
      </section>

      {/* 실무 활용 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 실무 활용 팁
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
              <strong>조건 우선순위:</strong> 여러 compoundVariants가 매칭되면
              모두 적용되며, 나중에 오는 것이 이전 것을 덮어씁니다.
            </li>
            <li>
              <strong>배열 조건:</strong> 배열을 사용하면 여러 값 중 하나라도
              만족하면 적용됩니다.
            </li>
            <li>
              <strong>복잡한 조건:</strong> 3개 이상의 variant를 조합하여 매우
              구체적인 스타일을 만들 수 있습니다.
            </li>
            <li>
              <strong>특수 케이스:</strong> 특정 색상 조합에서만 필요한
              스타일(예: yellow는 검은 텍스트)을 처리할 수 있습니다.
            </li>
            <li>
              <strong>성능:</strong> CompoundVariants는 빌드타임에 처리되므로
              런타임 오버헤드가 없습니다.
            </li>
            <li>
              <strong>클래스명 병합:</strong> CVA나 Pattern 함수와 추가 CSS를
              병합할 때는 <code>cx()</code> 함수를 사용합니다. 문자열 연결(
              <code>+ " " +</code>)은 작동하지만 <code>cx()</code>가 중복 제거와
              조건부 클래스 처리를 더 안전하게 해줍니다.
            </li>
          </ul>
        </div>
      </section>

      {/* 클래스명 병합 가이드 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. CVA/Pattern과 추가 CSS 병합하기
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          CVA나 Pattern 함수(예: <code>flex</code>, <code>hstack</code>)를
          사용할 때 추가 스타일이 필요하다면 <code>cx()</code> 함수를 사용하는
          것이 권장됩니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "blue.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "blue.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 권장 방법: cx() 사용
          </h3>
          <pre
            className={css({
              p: "16px",
              bg: "gray.900",
              color: "green.400",
              rounded: "8px",
              fontSize: "14px",
              overflowX: "auto",
              textAlign: "left",
            })}
          >
            {`// CVA와 추가 CSS 병합
className={cx(
  alert({ status: "warning", variant: "solid" }),
  css({ textAlign: "left" })
)}

// Pattern과 추가 CSS 병합
import { flex } from "../../../styled-system/patterns";
className={cx(
  flex({ gap: "16px", wrap: "wrap" }),
  css({ p: "24px", bg: "gray.100" })
)}

// 여러 클래스명 병합
className={cx(
  button({ variant: "primary" }),
  alert({ status: "success" }),
  css({ customStyle: "value" }),
  condition && css({ conditional: "style" })
)}`}
          </pre>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "yellow.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "yellow.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ⚠️ 작동하지만 권장하지 않음: 문자열 연결
          </h3>
          <pre
            className={css({
              p: "16px",
              bg: "gray.900",
              color: "yellow.400",
              rounded: "8px",
              fontSize: "14px",
              overflowX: "auto",
              textAlign: "left",
            })}
          >
            {`// 작동하지만 cx()가 더 안전함
className={
  alert({ status: "warning", variant: "solid" }) +
  " " +
  css({ textAlign: "left" })
}`}
          </pre>
          <p
            className={css({ mt: "12px", fontSize: "14px", color: "gray.700" })}
          >
            문자열 연결은 작동하지만, <code>cx()</code>는 중복 클래스 제거,
            falsy 값 처리, 조건부 클래스 등을 더 안전하게 처리합니다.
          </p>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "green.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "green.200",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            📝 Pattern vs CVA
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "8px",
              textAlign: "left",
            })}
          >
            <li>
              <strong>Pattern:</strong> PandaCSS에서 제공하는 레이아웃 패턴 함수
              (예: <code>flex</code>, <code>hstack</code>, <code>vstack</code>,
              <code>grid</code>). 스타일 객체를 반환하거나 클래스명을
              반환합니다.
            </li>
            <li>
              <strong>CVA:</strong> <code>cva()</code>로 정의한 컴포넌트
              variants. 클래스명 문자열을 반환합니다.
            </li>
            <li>
              <strong>병합 방법:</strong> 둘 다 <code>cx()</code>로 병합
              가능합니다. Pattern의 경우 <code>pattern.raw()</code>로 스타일
              객체를 얻어 <code>css()</code>와 병합할 수도 있습니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
