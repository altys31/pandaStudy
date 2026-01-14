import { css } from "../../../styled-system/css";

export const VirtualColorExample = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Virtual Color (가상 색상) 설명
      </h1>

      {/* Virtual Color 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Virtual Color란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Virtual Color는 <strong>실제 색상 값 대신 의미론적인 이름</strong>을
          사용하는 색상 시스템입니다.
          <br />
          실제 색상 값(예: <code>blue.500</code>)을 직접 사용하는 대신,
          의미론적인 이름(예: <code>brand</code>, <code>success</code>,{" "}
          <code>error</code>)을 사용하여 나중에 쉽게 변경할 수 있습니다.
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
          <strong>장점:</strong>
          <ul
            className={css({
              mt: "8px",
              ml: "20px",
              listStyle: "disc",
              textAlign: "left",
            })}
          >
            <li>
              <strong>유지보수성:</strong> 색상을 변경할 때 한 곳만 수정하면
              됩니다.
            </li>
            <li>
              <strong>의미론적 명명:</strong> 색상의 용도를 명확하게 표현합니다.
            </li>
            <li>
              <strong>테마 변경:</strong> 다크 모드나 다른 테마로 쉽게 전환할 수
              있습니다.
            </li>
            <li>
              <strong>일관성:</strong> 프로젝트 전체에서 동일한 색상 체계를
              유지합니다.
            </li>
          </ul>
        </div>
      </section>

      {/* 설정 방법 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. panda.config.ts에서 설정
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>theme.tokens.colors</code>에서 virtual color를 정의합니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "gray.200",
            fontFamily: "monospace",
            fontSize: "14px",
            overflowX: "auto",
          })}
        >
          <pre
            className={css({
              whiteSpace: "pre",
              color: "gray.800",
              textAlign: "left",
              textWrap: "wrap",
            })}
          >
            {`// panda.config.ts
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          // Virtual Colors 정의
          brand: {
            value: "{colors.blue.500}",  // 실제 색상 참조
          },
          "brand.light": {
            value: "{colors.blue.100}",
          },
          "brand.dark": {
            value: "{colors.blue.700}",
          },
          success: {
            value: "{colors.green.500}",
          },
          error: {
            value: "{colors.red.500}",
          },
          warning: {
            value: "{colors.yellow.500}",
          },
          info: {
            value: "{colors.cyan.500}",
          },
        },
      },
    },
  },
});`}
          </pre>
        </div>
      </section>

      {/* 사용 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 사용 예제
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Virtual Color를 정의하면 일반 색상처럼 사용할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            ❌ Virtual Color 없이 사용 (비권장)
          </h3>
          <div
            className={css({
              p: "16px",
              bg: "gray.50",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <code className={css({ fontSize: "14px", color: "gray.700" })}>
              bg: "blue.500" // 직접 색상 값 사용
            </code>
            <p
              className={css({
                mt: "8px",
                fontSize: "14px",
                color: "gray.600",
              })}
            >
              문제: 브랜드 색상을 변경하려면 모든 곳을 수정해야 함
            </p>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            ✅ Virtual Color 사용 (권장)
          </h3>
          <div
            className={css({
              p: "16px",
              bg: "gray.50",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <code className={css({ fontSize: "14px", color: "gray.700" })}>
              bg: "brand" // 의미론적 이름 사용
            </code>
            <p
              className={css({
                mt: "8px",
                fontSize: "14px",
                color: "gray.600",
              })}
            >
              장점: panda.config.ts에서 한 곳만 수정하면 전체 색상 변경
            </p>
          </div>
        </div>

        {/* 실제 사용 예제 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            실제 사용 예제 (현재는 직접 색상 사용)
          </h3>
          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <div
              className={css({
                p: "16px",
                bg: "blue.500",
                color: "white",
                rounded: "8px",
                fontWeight: "500",
              })}
            >
              Brand (blue.500 직접 사용)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "green.500",
                color: "white",
                rounded: "8px",
                fontWeight: "500",
              })}
            >
              Success (green.500 직접 사용)
            </div>
            <div
              className={css({
                p: "16px",
                bg: "red.500",
                color: "white",
                rounded: "8px",
                fontWeight: "500",
              })}
            >
              Error (red.500 직접 사용)
            </div>
          </div>
          <p
            className={css({ mt: "12px", fontSize: "14px", color: "gray.600" })}
          >
            Virtual Color를 설정하면 <code>bg: "brand"</code>,{" "}
            <code>bg: "success"</code>, <code>bg: "error"</code>로 사용 가능
          </p>
        </div>
      </section>

      {/* 다크 모드 지원 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 다크 모드 지원
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Virtual Color는 다크 모드에서도 쉽게 대응할 수 있습니다.
        </p>

        <div
          className={css({
            p: "16px",
            bg: "gray.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "gray.200",
            fontFamily: "monospace",
            fontSize: "14px",
            overflowX: "auto",
          })}
        >
          <pre
            className={css({
              whiteSpace: "pre",
              color: "gray.800",
              textAlign: "left",
              textWrap: "wrap",
            })}
          >
            {`// panda.config.ts
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            value: {
              base: "{colors.blue.500}",    // 라이트 모드
              _dark: "{colors.blue.400}",   // 다크 모드
            },
          },
        },
      },
    },
  },
});`}
          </pre>
        </div>
      </section>

      {/* 실무 활용 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 실무 활용 예시
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Virtual Color를 사용하면 디자인 시스템을 더 쉽게 관리할 수 있습니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "yellow.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "yellow.200",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            시나리오: 브랜드 색상 변경
          </h3>
          <div className={css({ spaceY: "8px" })}>
            <p
              className={css({
                fontSize: "14px",
                color: "gray.700",
                textAlign: "left",
              })}
            >
              <strong>Virtual Color 없이:</strong>
            </p>
            <ul
              className={css({
                ml: "20px",
                listStyle: "disc",
                fontSize: "14px",
                textAlign: "left",
              })}
            >
              <li>
                프로젝트 전체에서 <code>blue.500</code>를 찾아서 모두 변경
              </li>
              <li>수백 개의 파일을 수정해야 할 수 있음</li>
              <li>실수로 일부를 놓칠 수 있음</li>
            </ul>

            <p
              className={css({
                fontSize: "14px",
                color: "gray.700",
                mt: "16px",
                textAlign: "left",
              })}
            >
              <strong>Virtual Color 사용:</strong>
            </p>
            <ul
              className={css({
                ml: "20px",
                listStyle: "disc",
                fontSize: "14px",
                textAlign: "left",
              })}
            >
              <li>
                <code>panda.config.ts</code>에서 <code>brand</code> 값만 변경
              </li>
              <li>한 곳만 수정하면 전체 프로젝트에 반영</li>
              <li>실수 가능성 최소화</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 설정 예제 코드 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 완전한 설정 예제
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          실무에서 사용할 수 있는 완전한 Virtual Color 설정 예제입니다.
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
            {`// panda.config.ts
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          // 브랜드 색상
          brand: {
            value: "{colors.blue.500}",
          },
          "brand.light": {
            value: "{colors.blue.100}",
          },
          "brand.dark": {
            value: "{colors.blue.700}",
          },
          
          // 상태 색상
          success: {
            value: "{colors.green.500}",
          },
          error: {
            value: "{colors.red.500}",
          },
          warning: {
            value: "{colors.yellow.500}",
          },
          info: {
            value: "{colors.cyan.500}",
          },
          
          // 텍스트 색상
          "text.primary": {
            value: "{colors.gray.900}",
          },
          "text.secondary": {
            value: "{colors.gray.600}",
          },
          "text.muted": {
            value: "{colors.gray.400}",
          },
          
          // 배경 색상
          "bg.primary": {
            value: "{colors.white}",
          },
          "bg.secondary": {
            value: "{colors.gray.50}",
          },
          "bg.muted": {
            value: "{colors.gray.100}",
          },
        },
      },
    },
  },
});`}
          </pre>
        </div>

        <div className={css({ mt: "16px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>사용 예제</h3>
          <div
            className={css({
              p: "16px",
              bg: "gray.50",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.200",
              fontFamily: "monospace",
              fontSize: "12px",
            })}
          >
            <pre
              className={css({
                whiteSpace: "pre",
                color: "gray.800",
                textAlign: "left",
              })}
            >
              {`// 컴포넌트에서 사용
<div className={css({ 
  bg: "brand",           // blue.500
  color: "text.primary",  // gray.900
})}>

<button className={css({ 
  bg: "success",         // green.500
  color: "white",
})}>

<div className={css({ 
  bg: "bg.secondary",    // gray.50
  color: "text.secondary", // gray.600
})}>`}
            </pre>
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          주의사항
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "red.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "red.200",
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
              <strong>빌드타임 추출:</strong> Virtual Color도 빌드타임에 실제
              색상 값으로 변환되므로, 코드에서 사용된 Virtual Color만 CSS에
              포함됩니다.
            </li>
            <li>
              <strong>정적 분석:</strong> 동적으로 생성된 Virtual Color는
              인식되지 않으므로, 배열이나 변수에 명시적으로 정의해야 합니다.
            </li>
            <li>
              <strong>순환 참조 주의:</strong> Virtual Color가 서로를 참조하지
              않도록 주의해야 합니다.
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript를 사용하면 Virtual
              Color의 타입이 자동으로 추론됩니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
