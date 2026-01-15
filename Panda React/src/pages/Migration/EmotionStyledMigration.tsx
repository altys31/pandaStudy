import { css } from "../../../styled-system/css";

export const EmotionStyledMigration = () => {
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
        PandaCSS 마이그레이션 가이드
      </h1>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 핵심 전환 포인트
        </h2>
        <ul
          className={css({
            listStyle: "disc",
            ml: "24px",
            spaceY: "8px",
            color: "gray.700",
            textAlign: "left",
          })}
        >
          <li>런타임 스타일 → 빌드타임 추출 (variants/recipes 중심)</li>
          <li>ThemeProvider 의존 제거 → `panda.config.ts`에서 토큰 정의</li>
          <li>GlobalStyle → `globalCss`로 전역 스타일 관리</li>
          <li>props 조건부 스타일 → variants 조합으로 구조화</li>
        </ul>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 마이그레이션 체크리스트
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
          })}
        >
          <ol
            className={css({
              listStyle: "decimal",
              ml: "20px",
              spaceY: "8px",
              textAlign: "left",
              color: "gray.700",
            })}
          >
            <li>기존 theme 값을 `tokens`로 이관</li>
            <li>의미 기반 색상은 `semanticTokens`로 분리</li>
            <li>styled 컴포넌트는 `cva` 또는 `recipe`로 변환</li>
            <li>GlobalStyle은 `globalCss`로 이동</li>
            <li>반응형/상태 스타일은 Panda 조건 문법으로 치환</li>
          </ol>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 토큰 이전 예시
        </h2>
        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mb: "16px",
          })}
        >
          <pre>{`// panda.config.ts
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { 500: { value: "#0ea5e9" } },
        },
      },
      semanticTokens: {
        colors: {
          "bg.primary": {
            value: { base: "{colors.white}", _dark: "{colors.gray.900}" },
          },
          "text.primary": {
            value: { base: "{colors.gray.900}", _dark: "{colors.white}" },
          },
        },
      },
    },
  },
});`}</pre>
        </div>
        <p className={css({ color: "gray.700" })}>
          기존 theme의 색상 값을 tokens로 옮긴 뒤, UI 의미에 맞는 컬러는
          semanticTokens로 분리합니다.
        </p>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 컴포넌트 변환 예시
        </h2>
        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
          })}
        >
          <pre>{`// styled-components
const Button = styled.button\`
  background: \${(p) => (p.primary ? p.theme.colors.brand : "#eee")};
  padding: 8px 12px;
\`;

// PandaCSS (cva)
const button = cva({
  base: { px: "12px", py: "8px" },
  variants: {
    variant: {
      primary: { bg: "brand.500", color: "white" },
      secondary: { bg: "gray.100", color: "gray.800" },
    },
  },
  defaultVariants: { variant: "primary" },
});`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 참고 문서
        </h2>
        <ul
          className={css({
            listStyle: "disc",
            ml: "24px",
            spaceY: "8px",
            textAlign: "left",
          })}
        >
          <li>
            <a
              href="https://panda-css.com/docs/migration/styled-components"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: "blue.600",
                textDecoration: "underline",
                _hover: { color: "blue.800" },
              })}
            >
              Migration (styled-components)
            </a>
          </li>
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
              Tokens & Semantic Tokens
            </a>
          </li>
          <li>
            <a
              href="https://panda-css.com/docs/customization/theme"
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                color: "blue.600",
                textDecoration: "underline",
                _hover: { color: "blue.800" },
              })}
            >
              Theme Customization
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
