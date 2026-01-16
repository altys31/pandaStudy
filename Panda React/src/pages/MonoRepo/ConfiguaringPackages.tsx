import { css } from "../../../styled-system/css";

export const ConfiguaringPackages = () => {
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
        MonoRepo PandaCSS 예제
      </h1>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 개요
        </h2>
        <p className={css({ color: "gray.700", lineHeight: "1.6" })}>
          이 예제는 모노레포에서 <strong>공유 Panda preset</strong>을 만들어 각
          패키지에서 동일한 디자인 토큰을 사용하는 방법을 보여줍니다.
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
  preset/           # @mono/preset (design tokens)
    src/index.ts
    package.json
  styled-system/    # @mono/styled-system (codegen 결과)
    dist/
    package.json
  app/              # 실제 앱
    panda.config.ts
    package.json`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 모든 패키지에 Panda 설치
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
          <pre>{`pnpm add -w @pandacss/dev`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. preset 패키지 만들기
        </h2>
        <p
          className={css({ color: "gray.700", mb: "12px", lineHeight: "1.6" })}
        >
          디자인 토큰, 텍스트 스타일, 레이어 스타일을 정의하는 패키지입니다.
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
          })}
        >
          <pre>{`# packages/preset
pnpm init

# package.json
{
  "name": "@mono/preset",
  "main": "src/index.ts"
}

# src/index.ts
import { definePreset } from "@pandacss/dev";

export const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: { brand: { 500: { value: "#0ea5e9" } } },
      },
      textStyles: {
        body: { value: { fontSize: "14px", lineHeight: "1.6" } },
      },
      layerStyles: {
        card: { value: { bg: "white", rounded: "12px" } },
      },
    },
  },
});`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. styled-system 패키지 만들기
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
          <pre>{`# packages/styled-system
pnpm init

# package.json
{
  "name": "@mono/styled-system"
}

# codegen
pnpm panda init --outdir=dist
pnpm panda init-pkg --base=dist

# scripts
{
  "scripts": {
    "prepare": "panda codegen --clean",
    "dev": "panda codegen --watch"
  }
}

# dependencies
{
  "dependencies": {
    "@mono/preset": "workspace:*"
  }
}`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 앱에서 스타일 시스템 사용
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
          <pre>{`# packages/app
pnpm panda init --postcss --no-codegen

# panda.config.ts
import { preset } from "@mono/preset";

export default defineConfig({
  presets: ["@pandacss/preset-panda", preset],
  importMap: "@mono/styled-system",
});

# dependencies
{
  "dependencies": {
    "@mono/styled-system": "workspace:*"
  }
}`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 테스트 확인
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
          <pre>{`import "@mono/styled-system/css";
import { css } from "@mono/styled-system/css";

export const App = () => (
  <div className={css({ bg: "brand.500", color: "white", p: "16px" })}>
    PandaCSS preset working
  </div>
);`}</pre>
        </div>
      </section>
    </div>
  );
};
