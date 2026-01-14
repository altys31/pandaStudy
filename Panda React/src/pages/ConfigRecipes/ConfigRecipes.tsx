import { css, type RecipeVariant } from "../../../styled-system/css";
import { badge } from "../../../styled-system/recipes";
import { alert } from "../../../styled-system/recipes";
// ✅ Config Recipes는 panda.config.ts에서 정의되므로
// 여기서는 사용 예제만 보여줍니다
// 실제 정의는 Badge.recipe.ts와 panda.config.ts 파일을 참고하세요

type BadgeVariants = RecipeVariant<typeof badge>;

interface BadgeProps extends BadgeVariants {
  children: React.ReactNode;
}

const Badge = ({
  variant,
  colorScheme,
  size,
  radius,
  children,
}: BadgeProps) => {
  return (
    <span className={badge({ variant, colorScheme, size, radius })}>
      {children}
    </span>
  );
};

type AlertVariants = RecipeVariant<typeof alert>;

interface AlertProps extends AlertVariants {
  children: React.ReactNode;
}

const Alert = ({ status, variant, children }: AlertProps) => {
  return <div className={alert({ status, variant })}>{children}</div>;
};

export const ConfigRecipes = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Config Recipes 예제
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Config Recipes란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Config Recipes는 <code>panda.config.ts</code> 파일에서 전역적으로
          정의하는 레시피입니다. 프로젝트 전체에서 재사용 가능한 컴포넌트
          스타일을 중앙에서 관리할 수 있습니다.
        </p>
        <div
          className={css({
            p: "20px",
            bg: "blue.50",
            rounded: "12px",
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
            <li>
              <strong>전역 정의:</strong> <code>panda.config.ts</code>에서 한
              번만 정의
            </li>
            <li>
              <strong>재사용성:</strong> 프로젝트 전체에서 동일한 레시피 사용
            </li>
            <li>
              <strong>일관성:</strong> 디자인 시스템 전반에 걸쳐 일관된 스타일
              유지
            </li>
            <li>
              <strong>유지보수:</strong> 중앙에서 스타일 관리로 변경이 용이
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript로 자동 타입 추론
            </li>
          </ul>
        </div>
      </section>

      {/* panda.config.ts에서 정의 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. panda.config.ts에서 Recipe 정의
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>defineRecipe</code>를 사용하여 레시피를 정의하고,{" "}
          <code>theme.extend.recipes</code>에 등록합니다.
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
            {`            
//Badge.recipe.ts
import { defineConfig, defineRecipe } from "@pandacss/dev";

// Badge Recipe 정의
import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
    className: "badge",
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

  //panda.config.ts
  import { badgeRecipe } from "./Badge.recipe";

  export default defineConfig({

  ...기존 defineConfig 내용

  theme: {
    extend: {
      recipes: {
        badge: badgeRecipe,  
      },
    },
  },  
  })
  
  
  `}
          </pre>
        </div>
      </section>

      {/* 사용 방법 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. Config Recipe 사용하기
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Config Recipe는 <code>"codegen된 className"</code>을 통해 사용합니다.
          레시피 이름을 키로 사용하여 variants를 전달합니다.
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
            {`import { css } from "../../../styled-system/css";

// badge Recipe 사용
<span className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "md",
              })}
            >
              Blue Badge
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "green",
                size: "md",
              })}
            >
              Green Badge
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "red",
                size: "md",
              })}
            >
              Red Badge
            </span>
            <span
              className={badge({
                variant: "outline",
                colorScheme: "blue",
                size: "md",
              })}
            >
              Outline Badge
            </span>
            <span
              className={badge({
                variant: "subtle",
                colorScheme: "blue",
                size: "md",
              })}
            >
              Subtle Badge
            </span>
          </div>

          <div
            className={css({
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              mt: "16px",
            })}
          >
            <span
              className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "sm",
              })}
            >
              Small
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "md",
              })}
            >
              Medium
            </span>
            <span
              className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "lg",
              })}
            >
              Large
            </span>
          </div>
        </div>
      </section>`}
          </pre>
        </div>

        {/* 실제 사용 예제 */}
        <div
          className={css({
            p: "24px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "16px" })}
          >
            실제 사용 예제
          </h3>
          <p
            className={css({ mb: "16px", color: "gray.600", fontSize: "14px" })}
          >
            ✅ panda.config.ts에서 정의한 Config Recipes를 실제로 사용합니다.
          </p>

          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          ></div>

          <div
            className={css({
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              mt: "16px",
            })}
          >
            {/* Badge 예제 - 실제 Config Recipe 사용 */}
            <span
              className={badge({
                variant: "solid",
                colorScheme: "blue",
                size: "md",
              })}
            >
              Blue Badge
            </span>
            <Badge variant="solid" colorScheme="green" size="md" radius="md">
              Green Badge
            </Badge>
            <Badge variant="solid" colorScheme="red" size="md" radius="md">
              Red Badge
            </Badge>
            <Badge variant="outline" colorScheme="blue" size="md" radius="md">
              Outline Badge
            </Badge>
            <Badge variant="subtle" colorScheme="blue" size="md" radius="md">
              Subtle Badge
            </Badge>
          </div>

          <div
            className={css({
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              mt: "16px",
            })}
          >
            <Badge variant="solid" colorScheme="blue" size="sm" radius="md">
              Small
            </Badge>
            <Badge variant="solid" colorScheme="blue" size="md" radius="md">
              Medium
            </Badge>
            <Badge variant="solid" colorScheme="blue" size="lg" radius="md">
              Large
            </Badge>
          </div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              mt: "16px",
            })}
          >
            <Alert status="success" variant="solid">
              Success Alert
            </Alert>
            <Alert status="error" variant="solid">
              Error Alert
            </Alert>
            <Alert status="warning" variant="solid">
              Warning Alert
            </Alert>
            <Alert status="info" variant="solid">
              Info Alert
            </Alert>
            <Alert status="success" variant="subtle">
              Success Subtle Alert
            </Alert>
            <Alert status="error" variant="subtle">
              Error Subtle Alert
            </Alert>
            <Alert status="warning" variant="subtle">
              Warning Subtle Alert
            </Alert>
            <Alert status="info" variant="subtle">
              Info Subtle Alert
            </Alert>
          </div>
        </div>
      </section>

      {/* TypeScript 타입 사용 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. TypeScript 타입 사용
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Config Recipe의 variants를 TypeScript 타입으로 사용할 수 있습니다.
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
            {`import type { RecipeVariantProps } from "../../../styled-system/types/recipe";
import { css } from "../../../styled-system/css";

// Recipe의 variants 타입 추론
type BadgeVariants = RecipeVariant<typeof badge>;

interface BadgeProps extends BadgeVariants {
  children: React.ReactNode;
}

const Badge = ({
  variant,
  colorScheme,
  size,
  radius,
  children,
}: BadgeProps) => {
  return (
    <span className={badge({ variant, colorScheme, size, radius })}>
      {children}
    </span>
  );
};`}
          </pre>
        </div>
      </section>

      {/* Config Recipe vs CVA 비교 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. Config Recipe vs CVA 비교
        </h2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          })}
        >
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
              })}
            >
              Config Recipe
            </h3>
            <ul
              className={css({
                listStyle: "disc",
                ml: "20px",
                spaceY: "4px",
                textAlign: "left",
              })}
            >
              <li>panda.config.ts에서 정의</li>
              <li>전역적으로 사용 가능</li>
              <li>디자인 시스템의 핵심 컴포넌트에 적합</li>
              <li>중앙에서 관리</li>
              <li>
                사용: <code>{`css({ button: { variant: "solid" } })`}</code>
              </li>
            </ul>
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
              className={css({
                fontSize: "18px",
                fontWeight: "600",
                mb: "12px",
              })}
            >
              CVA (Component Variant Authority)
            </h3>
            <ul
              className={css({
                listStyle: "disc",
                ml: "20px",
                spaceY: "4px",
                textAlign: "left",
              })}
            >
              <li>컴포넌트 파일에서 정의</li>
              <li>로컬에서 사용</li>
              <li>특정 컴포넌트 전용 variants에 적합</li>
              <li>컴포넌트와 함께 관리</li>
              <li>
                사용: <code>{`button({ variant: "solid" })`}</code>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 실무 활용 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 실무 활용 팁
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
              <strong>언제 사용할까:</strong> 프로젝트 전체에서 공통으로
              사용되는 컴포넌트 (Button, Badge, Input 등)는 Config Recipe로 정의
            </li>
            <li>
              <strong>언제 CVA를 사용할까:</strong> 특정 컴포넌트에서만 사용되는
              variants는 CVA로 정의
            </li>
            <li>
              <strong>일관성 유지:</strong> 디자인 시스템의 핵심 컴포넌트는
              Config Recipe로 중앙 관리
            </li>
            <li>
              <strong>타입 안전성:</strong> <code>RecipeVariantProps</code>를
              사용하여 타입 자동 추론
            </li>
            <li>
              <strong>유지보수:</strong> 스타일 변경 시 한 곳만 수정하면 전체에
              반영
            </li>
            <li>
              <strong>성능:</strong> 빌드 타임에 최적화되어 런타임 오버헤드 없음
            </li>
          </ul>
        </div>
      </section>

      {/* 주의사항 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 주의사항
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
              <strong>빌드 필요:</strong> Config Recipe를 변경하면 빌드를 다시
              실행해야 합니다
            </li>
            <li>
              <strong>정적 분석:</strong> PandaCSS는 빌드 타임에 정적 분석을
              수행하므로 동적 variants는 사용할 수 없습니다
            </li>
            <li>
              <strong>네이밍:</strong> <code>className</code>을 명시적으로
              지정하여 클래스명 충돌 방지
            </li>
            <li>
              <strong>설명 추가:</strong> <code>description</code>을 추가하여
              문서화 개선
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
