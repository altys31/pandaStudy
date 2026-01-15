import { css } from "../../../styled-system/css";

export const DesignTokens = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1
        className={css({
          fontSize: "32px",
          fontWeight: "bold",
          mb: "32px",
          color: "gray.900",
        })}
      >
        Design Tokens in PandaCSS
      </h1>

      {/* 1. Design Tokens 정의 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Design Tokens란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Design Tokens는 디자인 시스템의 기본 구성 요소입니다. 색상, 간격,
          타이포그래피, 그림자 등의 디자인 값을 의미 있는 이름으로 정의하여
          일관성 있는 디자인을 유지할 수 있게 해줍니다.
        </p>

        <div className={css({ spaceY: "24px" })}>
          <div
            className={css({
              p: "20px",
              bg: "blue.50",
              rounded: "12px",
              border: "1px solid",
              borderColor: "blue.200",
            })}
          >
            <h3
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "12px",
                color: "blue.900",
              })}
            >
              Atomic Token (원자 토큰)
            </h3>
            <p className={css({ mb: "12px", color: "gray.700" })}>
              <strong>Atomic Token</strong>은 가장 기본적인 디자인 값입니다.
              직접적인 값(색상 코드, 픽셀 값 등)을 가집니다.
            </p>
            <ul
              className={css({
                listStyle: "disc",
                ml: "24px",
                spaceY: "8px",
                color: "gray.700",
                textAlign: "left",
              })}
            >
              <li>
                <code
                  className={css({ bg: "blue.100", px: "4px", rounded: "4px" })}
                >
                  colors.blue.500
                </code>
                : 직접적인 색상 값 (#3B82F6)
              </li>
              <li>
                <code
                  className={css({ bg: "blue.100", px: "4px", rounded: "4px" })}
                >
                  spacing.4
                </code>
                : 직접적인 간격 값 (16px)
              </li>
              <li>
                <code
                  className={css({ bg: "blue.100", px: "4px", rounded: "4px" })}
                >
                  fontSizes.lg
                </code>
                : 직접적인 폰트 크기 (18px)
              </li>
            </ul>
          </div>

          <div
            className={css({
              p: "20px",
              bg: "purple.50",
              rounded: "12px",
              border: "1px solid",
              borderColor: "purple.200",
            })}
          >
            <h3
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "12px",
                color: "purple.900",
              })}
            >
              Semantic Token (의미 토큰)
            </h3>
            <p className={css({ mb: "12px", color: "gray.700" })}>
              <strong>Semantic Token</strong>은 의미를 가진 토큰입니다. Atomic
              Token을 참조하여 사용 목적에 맞는 이름을 가집니다.
            </p>
            <ul
              className={css({
                listStyle: "disc",
                ml: "24px",
                spaceY: "8px",
                color: "gray.700",
                textAlign: "left",
              })}
            >
              <li>
                <code
                  className={css({
                    bg: "purple.100",
                    px: "4px",
                    rounded: "4px",
                  })}
                >
                  colors.bg.primary
                </code>
                : 주요 배경색 (의미: primary background)
              </li>
              <li>
                <code
                  className={css({
                    bg: "purple.100",
                    px: "4px",
                    rounded: "4px",
                  })}
                >
                  colors.text.primary
                </code>
                : 주요 텍스트 색상 (의미: primary text)
              </li>
              <li>
                <code
                  className={css({
                    bg: "purple.100",
                    px: "4px",
                    rounded: "4px",
                  })}
                >
                  spacing.container
                </code>
                : 컨테이너 간격 (의미: container spacing)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. PandaCSS Default Tokens */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. PandaCSS Default Tokens
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          PandaCSS는 기본적으로 다양한 디자인 토큰을 제공합니다. 기본 토큰들은
          Tailwind CSS와 유사한 구조를 가지고 있습니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            📚 공식 문서
          </h3>
          <ul
            className={css({
              spaceY: "8px",
              listStyle: "disc",
              ml: "24px",
              textAlign: "left",
            })}
          >
            <li>
              <a
                href="https://panda-css.com/docs/theming/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  color: "blue.600",
                  textDecoration: "underline",
                  _hover: { color: "blue.800" },
                })}
              >
                Tokens Documentation
              </a>
            </li>
          </ul>
        </div>

        <div className={css({ spaceY: "16px" })}>
          <div
            className={css({
              p: "16px",
              bg: "white",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <h4
              className={css({
                fontSize: "16px",
                fontWeight: "600",
                mb: "12px",
              })}
            >
              기본 제공 토큰 카테고리
            </h4>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              })}
            >
              {[
                { name: "Colors", example: "blue.500, red.300" },
                { name: "Spacing", example: "4, 8, 16, 24" },
                { name: "Typography", example: "fontSizes, fontWeights" },
                { name: "Borders", example: "borderWidths, radii" },
                { name: "Shadows", example: "sm, md, lg, xl" },
                { name: "Sizes", example: "widths, heights" },
                { name: "Z-Index", example: "1, 10, 100" },
                { name: "Animations", example: "durations, easings" },
              ].map((token) => (
                <div
                  key={token.name}
                  className={css({
                    p: "12px",
                    bg: "gray.50",
                    rounded: "6px",
                  })}
                >
                  <div
                    className={css({
                      fontSize: "14px",
                      fontWeight: "600",
                      mb: "4px",
                    })}
                  >
                    {token.name}
                  </div>
                  <div
                    className={css({
                      fontSize: "12px",
                      color: "gray.600",
                      fontFamily: "monospace",
                    })}
                  >
                    {token.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Customizing Core Tokens */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Customizing Core Tokens (원자 토큰 커스터마이징)
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          <code>theme.extend.tokens</code>를 사용하여 기본 토큰을 확장하거나
          새로운 토큰을 추가할 수 있습니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mb: "24px",
          })}
        >
          <pre>
            {`// panda.config.ts
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  theme: {
    extend: {
      tokens: {
        // 1. 색상 토큰 추가
        colors: {
          brand: {
            50: { value: "#f0f9ff" },
            100: { value: "#e0f2fe" },
            200: { value: "#bae6fd" },
            300: { value: "#7dd3fc" },
            400: { value: "#38bdf8" },
            500: { value: "#0ea5e9" },
            600: { value: "#0284c7" },
            700: { value: "#0369a1" },
            800: { value: "#075985" },
            900: { value: "#0c4a6e" },
          },
        },
        
        // 2. 간격 토큰 추가
        spacing: {
          "container-sm": { value: "640px" },
          "container-md": { value: "768px" },
          "container-lg": { value: "1024px" },
          "container-xl": { value: "1280px" },
        },
        
        // 3. 폰트 크기 토큰 추가
        fontSizes: {
          "display-lg": { value: "72px" },
          "display-md": { value: "60px" },
          "display-sm": { value: "48px" },
        },
        
        // 4. 그림자 토큰 추가
        shadows: {
          "brand-sm": {
            value: "0 2px 4px rgba(14, 165, 233, 0.1)",
          },
          "brand-md": {
            value: "0 4px 6px rgba(14, 165, 233, 0.15)",
          },
        },
      },
    },
  },
});`}
          </pre>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "green.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "green.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 사용 예제
          </h3>
          <div className={css({ spaceY: "12px" })}>
            <div
              className={css({
                p: "16px",
                bg: "brand.500",
                color: "white",
                rounded: "8px",
                fontSize: "18px",
                fontWeight: "600",
              })}
            >
              Brand Color (brand.500)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "white",
                rounded: "8px",
                border: "1px solid",
                borderColor: "gray.200",
                shadow: "brand-md",
              })}
            >
              Brand Shadow (brand-md)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "gray.50",
                rounded: "8px",
                fontSize: "display-sm",
                fontWeight: "bold",
                color: "gray.900",
              })}
            >
              Display Font Size
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customizing Semantic Tokens */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. Customizing Semantic Tokens (시맨틱 토큰 커스터마이징)
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          <code>theme.extend.semanticTokens</code>를 사용하여 시맨틱 토큰을
          정의할 수 있습니다. Semantic Tokens는 다른 토큰을 참조할 수 있습니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mb: "24px",
          })}
        >
          <pre>
            {`// panda.config.ts
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // 배경색 의미 토큰
          "bg.primary": {
            value: { base: "{colors.white}", _dark: "{colors.gray.900}" },
          },
          "bg.secondary": {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.800}" },
          },
          "bg.tertiary": {
            value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
          },
          
          // 텍스트 색상 의미 토큰
          "text.primary": {
            value: { base: "{colors.gray.900}", _dark: "{colors.white}" },
          },
          "text.secondary": {
            value: { base: "{colors.gray.600}", _dark: "{colors.gray.300}" },
          },
          "text.muted": {
            value: { base: "{colors.gray.400}", _dark: "{colors.gray.500}" },
          },
          
          // 브랜드 색상 의미 토큰
          "brand.primary": {
            value: "{colors.brand.500}",
          },
          "brand.hover": {
            value: "{colors.brand.600}",
          },
          "brand.light": {
            value: "{colors.brand.100}",
          },
          
          // 상태 색상 의미 토큰
          "status.success": {
            value: "{colors.green.500}",
          },
          "status.error": {
            value: "{colors.red.500}",
          },
          "status.warning": {
            value: "{colors.yellow.500}",
          },
          "status.info": {
            value: "{colors.blue.500}",
          },
        },
        
        spacing: {
          // 레이아웃 간격 의미 토큰
          "layout.sm": {
            value: "{spacing.4}",
          },
          "layout.md": {
            value: "{spacing.8}",
          },
          "layout.lg": {
            value: "{spacing.16}",
          },
        },
      },
    },
  },
});`}
          </pre>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "purple.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "purple.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 사용 예제
          </h3>
          <div className={css({ spaceY: "12px" })}>
            <div
              className={css({
                p: "16px",
                bg: "bg.primary",
                color: "text.primary",
                rounded: "8px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              Primary Background & Text
            </div>
            <div
              className={css({
                p: "16px",
                bg: "brand.primary",
                color: "white",
                rounded: "8px",
              })}
            >
              Brand Primary Color
            </div>
            <div
              className={css({
                p: "16px",
                bg: "status.success",
                color: "white",
                rounded: "8px",
              })}
            >
              Status Success Color
            </div>
          </div>
        </div>
      </section>

      {/* 5. Color Opacity Modifier */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. Color Opacity Modifier
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          PandaCSS는 색상 토큰에 투명도를 적용하는 간편한 방법을 제공합니다.{" "}
          <code>/</code> 구문을 사용하여 투명도를 지정할 수 있습니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mb: "24px",
          })}
        >
          <pre>
            {`// 사용법: {colorToken}/{opacity}
// opacity는 0-100 사이의 값

// 예제:
bg: "blue.500/50"        // 50% 투명도
bg: "red.500/20"         // 20% 투명도
borderColor: "gray.500/30"  // 30% 투명도
color: "text.primary/80"     // 80% 투명도`}
          </pre>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "orange.100",
            rounded: "12px",
            border: "1px solid",
            borderColor: "yellow.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 투명도 예제
          </h3>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "16px",
            })}
          >
            {[100, 80, 60, 40, 20].map((opacity, index) => (
              <div
                key={opacity}
                className={css({
                  p: "16px",
                  bg: `${
                    [
                      "blue.500/100",
                      "blue.500/80",
                      "blue.500/60",
                      "blue.500/40",
                      "blue.500/20",
                    ][index]
                  }`,
                  rounded: "8px",
                  textAlign: "center",
                  fontWeight: "600",
                })}
              >
                {opacity}% Opacity
              </div>
            ))}
          </div>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "blue.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "blue.200",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            💡 실용적인 사용 예제
          </h3>
          <div className={css({ spaceY: "12px" })}>
            <div
              className={css({
                p: "16px",
                bg: "white",
                rounded: "8px",
                border: "2px solid",
                borderColor: "blue.500/30",
              })}
            >
              Border with Opacity (blue.500/30)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "red.500/10",
                rounded: "8px",
                color: "red.700",
              })}
            >
              Background with Opacity (red.500/10)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "gray.900",
                rounded: "8px",
                color: "white/80",
              })}
            >
              Text with Opacity (white/80)
            </div>
          </div>
        </div>
      </section>

      {/* 6. CSS Variables 사용법 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. CSS Variables 사용법
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          PandaCSS는 모든 토큰을 CSS 변수로 자동 생성합니다. 이를 통해 런타임에
          동적으로 스타일을 변경하거나, JavaScript에서 직접 접근할 수 있습니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            mb: "24px",
            textAlign: "left",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            📝 CSS 변수 네이밍 규칙
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "24px",
              spaceY: "8px",
              color: "gray.700",
            })}
          >
            <li>
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                colors.blue.500
              </code>
              →{" "}
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                var(--colors-blue-500)
              </code>
            </li>
            <li>
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                spacing.4
              </code>
              →{" "}
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                var(--spacing-4)
              </code>
            </li>
            <li>
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                semanticTokens.colors.bg.primary
              </code>
              →{" "}
              <code
                className={css({ bg: "gray.200", px: "4px", rounded: "4px" })}
              >
                var(--colors-bg-primary)
              </code>
            </li>
          </ul>
        </div>

        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mb: "24px",
          })}
        >
          <pre>
            {`// 1. CSS에서 직접 사용
.my-custom-class {
  background-color: var(--colors-blue-500);
  padding: var(--spacing-4);
  color: var(--colors-text-primary);
}

// 2. React에서 동적 스타일 적용
const MyComponent = () => {
  const [color, setColor] = useState('blue');
  
  return (
    <div
      style={{
        backgroundColor: \`var(--colors-\${color}-500)\`,
      }}
    >
      Dynamic Color
    </div>
  );
};

// 3. 인라인 스타일에서 사용
<div style={{ backgroundColor: 'var(--colors-brand-500)' }}>
  Using CSS Variable
</div>`}
          </pre>
        </div>

        <div
          className={css({
            p: "20px",
            bg: "indigo.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "indigo.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 실전 예제
          </h3>
          <div className={css({ spaceY: "16px" })}>
            <div
              className={css({
                p: "16px",
                bg: "white",
                rounded: "8px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <h4
                className={css({
                  fontSize: "16px",
                  fontWeight: "600",
                  mb: "8px",
                })}
              >
                1. CSS 변수 직접 참조
              </h4>
              <div
                style={{
                  backgroundColor: "var(--colors-blue-500)",
                  color: "white",
                  padding: "var(--spacing-4)",
                  borderRadius: "var(--radii-md)",
                }}
                className={css({ rounded: "6px" })}
              >
                Using CSS Variables Directly
              </div>
            </div>

            <div
              className={css({
                p: "16px",
                bg: "white",
                rounded: "8px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <h4
                className={css({
                  fontSize: "16px",
                  fontWeight: "600",
                  mb: "8px",
                })}
              >
                2. 동적 CSS 변수 변경
              </h4>
              <div
                id="dynamic-color-demo"
                style={{
                  backgroundColor: "var(--colors-red-500)",
                  color: "white",
                  padding: "var(--spacing-4)",
                  borderRadius: "var(--radii-md)",
                  transition: "background-color 0.3s",
                }}
                className={css({ rounded: "6px", cursor: "pointer" })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--colors-green-500)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--colors-red-500)";
                }}
              >
                Hover to Change Color (Red → Green)
              </div>
            </div>

            <div
              className={css({
                p: "16px",
                bg: "white",
                rounded: "8px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <h4
                className={css({
                  fontSize: "16px",
                  fontWeight: "600",
                  mb: "8px",
                })}
              >
                3. CSS 변수와 PandaCSS 조합
              </h4>
              <div
                className={css({
                  p: "16px",
                  rounded: "8px",
                  border: "2px solid",
                  borderColor: "blue.500",
                })}
                style={{
                  backgroundColor: "var(--colors-blue-50)",
                  boxShadow: "var(--shadows-md)",
                }}
              >
                Combining CSS Variables with PandaCSS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 요약 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          📋 요약
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            textAlign: "left",
          })}
        >
          <ul
            className={css({
              listStyle: "disc",
              ml: "24px",
              spaceY: "12px",
              color: "gray.700",
            })}
          >
            <li>
              <strong>Atomic Tokens</strong>: 직접적인 값 (색상 코드, 픽셀 값)
            </li>
            <li>
              <strong>Semantic Tokens</strong>: 의미를 가진 토큰 (다른 토큰 참조
              가능)
            </li>
            <li>
              <strong>Core Tokens 커스터마이징</strong>:{" "}
              <code>theme.extend.tokens</code> 사용
            </li>
            <li>
              <strong>Semantic Tokens 커스터마이징</strong>:{" "}
              <code>theme.extend.semanticTokens</code> 사용
            </li>
            <li>
              <strong>Color Opacity Modifier</strong>:{" "}
              <code>colorToken/opacity</code> 형식 사용
            </li>
            <li>
              <strong>CSS Variables</strong>: 모든 토큰이 자동으로 CSS 변수로
              생성됨
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
