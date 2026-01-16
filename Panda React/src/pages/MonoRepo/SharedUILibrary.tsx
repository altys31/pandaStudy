import { css } from "../../../styled-system/css";

export const SharedUILibrary = () => {
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
        Creating a Shared UI Library
      </h1>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 개요
        </h2>
        <p className={css({ color: "gray.700", lineHeight: "1.6" })}>
          이 단원에서는 모노레포에서 UI 라이브러리 패키지를 만들고, 앱에서
          재사용하는 방법을 다룹니다. 패키지 설정, 의존성, 컴포넌트 내보내기,
          그리고 앱에서의 사용까지 포함합니다.
        </p>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 폴더 구조
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
          <pre>{`packages/
  ui/               # @mono/ui (공유 UI 라이브러리)
    src/
      Button.tsx
      Card.tsx
      index.ts
    package.json
  app/              # 실제 앱
    package.json
    src/App.tsx`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. UI 패키지 초기화
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
          <pre>{`# packages/ui
pnpm init

# package.json
{
  "name": "@mono/ui",
  "main": "src/index.ts",
  "types": "src/index.ts"
}`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. UI 컴포넌트 작성
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
          <pre>{`// packages/ui/src/Button.tsx
import { css } from "@mono/styled-system/css";

export const Button = ({ children }) => (
  <button
    className={css({
      px: "12px",
      py: "8px",
      rounded: "6px",
      bg: "blue.500",
      color: "white",
      _hover: { bg: "blue.600" },
    })}
  >
    {children}
  </button>
);

// packages/ui/src/index.ts
export { Button } from "./Button";`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 앱에서 사용
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
          <pre>{`# packages/app/package.json
{
  "dependencies": {
    "@mono/ui": "workspace:*",
    "@mono/styled-system": "workspace:*"
  }
}

// packages/app/src/App.tsx
import "@mono/styled-system/css";
import { Button } from "@mono/ui";

export const App = () => (
  <div>
    <Button>Shared UI Button</Button>
  </div>
);`}</pre>
        </div>
      </section>
    </div>
  );
};
