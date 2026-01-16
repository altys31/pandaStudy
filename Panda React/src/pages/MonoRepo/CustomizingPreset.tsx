import { css } from "../../../styled-system/css";

export const CustomizingPreset = () => {
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
        Customizing The Preset
      </h1>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 개요
        </h2>
        <p className={css({ color: "gray.700", lineHeight: "1.6" })}>
          다른 프로젝트(예: meeting, landing)에서 기본 브랜딩 프리셋을 확장해
          새로운 스타일을 만드는 흐름을 예제로 구성합니다. 독특한 스타일이
          필요한 랜딩 페이지나 회의용 페이지에 적합합니다.
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
  preset-base/       # @mono/preset-base (기본 브랜딩)
    src/index.ts
  preset-meeting/    # @mono/preset-meeting (회의 페이지용)
    src/index.ts
apps/
  meeting/           # Next.js 앱
    panda.config.ts
    next.config.js`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 기본 프리셋 만들기
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
          <pre>{`// packages/preset-base/src/index.ts
import { definePreset } from "@pandacss/dev";

export const basePreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { 500: { value: "#0ea5e9" } },
        },
      },
      textStyles: {
        heading: { value: { fontSize: "28px", fontWeight: "700" } },
      },
      layerStyles: {
        card: { value: { bg: "white", rounded: "12px", p: "20px" } },
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
          4. 프로젝트별 프리셋 확장
        </h2>
        <p
          className={css({ color: "gray.700", mb: "12px", lineHeight: "1.6" })}
        >
          회의 페이지는 좀 더 차분한 톤과 전용 버튼 스타일을 추가합니다.
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
          <pre>{`// packages/preset-meeting/src/index.ts
import { definePreset } from "@pandacss/dev";
import { basePreset } from "@mono/preset-base";

export const meetingPreset = definePreset({
  presets: [basePreset],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          "bg.page": {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.900}" },
          },
          "accent.primary": { value: "{colors.brand.500}" },
        },
      },
      textStyles: {
        meetingTitle: { value: { fontSize: "32px", fontWeight: "800" } },
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
          5. 별칭 확인 (next.config)
        </h2>
        <p
          className={css({ color: "gray.700", mb: "12px", lineHeight: "1.6" })}
        >
          모노레포에서 프리셋을 쉽게 참조하려면 Next.js에서 별칭을 잡아두는 것이
          편합니다.
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
          <pre>{`// apps/meeting/next.config.js
const path = require("path");

module.exports = {
  transpilePackages: ["@mono/preset-base", "@mono/preset-meeting"],
  webpack(config) {
    config.resolve.alias["@preset"] = path.resolve(
      __dirname,
      "../../packages/preset-meeting/src"
    );
    return config;
  },
};`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. panda.config.ts에서 사용
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
          <pre>{`// apps/meeting/panda.config.ts
import { defineConfig } from "@pandacss/dev";
import { meetingPreset } from "@preset";

export default defineConfig({
  presets: ["@pandacss/preset-panda", meetingPreset],
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "styled-system",
});`}</pre>
        </div>
      </section>

      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 예시 컴포넌트
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
          <pre>{`import { css } from "@mono/styled-system/css";

export const MeetingHero = () => (
  <section
    className={css({
      bg: "bg.page",
      textStyle: "meetingTitle",
      color: "accent.primary",
      p: "32px",
    })}
  >
    Weekly Sync Meeting
  </section>
);`}</pre>
        </div>
      </section>
    </div>
  );
};
