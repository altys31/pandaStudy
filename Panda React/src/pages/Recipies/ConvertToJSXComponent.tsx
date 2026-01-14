import { useState } from "react";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";

// ✅ 1. Button Recipe 정의
const buttonRecipe = cva({
  base: {
    px: "16px",
    py: "8px",
    rounded: "6px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    border: "none",
    outline: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    _focus: {
      outline: "2px solid",
      outlineColor: "blue.500",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
        _active: { bg: "blue.700" },
      },
      secondary: {
        bg: "gray.200",
        color: "gray.900",
        _hover: { bg: "gray.300" },
        _active: { bg: "gray.400" },
      },
      danger: {
        bg: "red.500",
        color: "white",
        _hover: { bg: "red.600" },
        _active: { bg: "red.700" },
      },
      ghost: {
        bg: "transparent",
        color: "gray.700",
        _hover: { bg: "gray.100" },
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
    fullWidth: {
      true: {
        w: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// ✅ 2. Badge Recipe 정의
const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
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
      gray: {},
    },
    size: {
      sm: {
        px: "6px",
        py: "2px",
        fontSize: "12px",
        minH: "20px",
      },
      md: {
        px: "8px",
        py: "4px",
        fontSize: "14px",
        minH: "24px",
      },
      lg: {
        px: "12px",
        py: "6px",
        fontSize: "16px",
        minH: "28px",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    colorScheme: "blue",
    size: "md",
  },
  compoundVariants: [
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
    },
    {
      variant: "solid",
      colorScheme: "gray",
      css: { bg: "gray.500", color: "white" },
    },
    {
      variant: "outline",
      colorScheme: "blue",
      css: { borderColor: "blue.500", color: "blue.600" },
    },
    {
      variant: "outline",
      colorScheme: "green",
      css: { borderColor: "green.500", color: "green.600" },
    },
    {
      variant: "outline",
      colorScheme: "red",
      css: { borderColor: "red.500", color: "red.600" },
    },
    {
      variant: "subtle",
      colorScheme: "blue",
      css: { bg: "blue.100", color: "blue.700" },
    },
    {
      variant: "subtle",
      colorScheme: "green",
      css: { bg: "green.100", color: "green.700" },
    },
    {
      variant: "subtle",
      colorScheme: "red",
      css: { bg: "red.100", color: "red.700" },
    },
  ],
});

// ✅ 3. Card Recipe 정의
const cardRecipe = cva({
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
      default: {
        boxShadow: "sm",
      },
      elevated: {
        boxShadow: "md",
        _hover: {
          boxShadow: "lg",
          transform: "translateY(-2px)",
        },
      },
      outlined: {
        boxShadow: "none",
        borderWidth: "2px",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        _hover: {
          borderColor: "blue.500",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// ============================================
// ✅ JSX 컴포넌트로 변환
// ============================================

// ✅ 방법 1: 기본 컴포넌트 변환 (타입 안전성 포함)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(
        buttonRecipe({ variant, size, fullWidth }),
        loading && css({ position: "relative", color: "transparent" }),
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className={css({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            w: "16px",
            h: "16px",
            border: "2px solid",
            borderColor: "currentColor",
            borderTopColor: "transparent",
            borderRadius: "full",
            animation: "spin 0.6s linear infinite",
          })}
        />
      )}
      {children}
    </button>
  );
};

// ✅ 방법 2: forwardRef를 사용한 컴포넌트 (접근성 향상)
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "subtle";
  colorScheme?: "blue" | "green" | "red" | "yellow" | "gray";
  size?: "sm" | "md" | "lg";
  onClose?: () => void;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant, colorScheme, size, className, children, onClose, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cx(badgeRecipe({ variant, colorScheme, size }), className)}
        {...props}
      >
        {children}
        {onClose && (
          <button
            onClick={onClose}
            className={css({
              ml: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              w: "16px",
              h: "16px",
              rounded: "full",
              bg: "rgba(0,0,0,0.1)",
              border: "none",
              cursor: "pointer",
              _hover: { bg: "rgba(0,0,0,0.2)" },
            })}
            aria-label="Remove badge"
          >
            ×
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";

// ✅ 방법 3: Card 컴포넌트
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  interactive?: boolean;
}

export const Card = ({
  variant,
  interactive,
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cx(cardRecipe({ variant, interactive }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

// ✅ 방법 4: 복합 컴포넌트 (Card + Header + Body + Footer)
export const CardHeader = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        css({
          pb: "16px",
          mb: "16px",
          borderBottom: "1px solid",
          borderColor: "gray.200",
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardBody = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        css({
          mb: "16px",
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        css({
          pt: "16px",
          borderTop: "1px solid",
          borderColor: "gray.200",
          display: "flex",
          gap: "8px",
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================
// ✅ 사용 예제 컴포넌트
// ============================================

export const ConvertToJSXComponent = () => {
  const [badgeVisible, setBadgeVisible] = useState(true);

  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        레시피를 JSX 컴포넌트로 변환하기
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          레시피를 컴포넌트로 변환하는 이유
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          CVA로 정의한 레시피를 재사용 가능한 React 컴포넌트로 변환하면:
        </p>
        <ul
          className={css({
            listStyle: "disc",
            ml: "20px",
            spaceY: "8px",
            textAlign: "left",
          })}
        >
          <li>
            <strong>타입 안전성:</strong> TypeScript로 props 타입을 자동 추론
          </li>
          <li>
            <strong>재사용성:</strong> 여러 곳에서 일관된 스타일로 사용 가능
          </li>
          <li>
            <strong>유지보수:</strong> 스타일 변경 시 한 곳만 수정하면 됨
          </li>
          <li>
            <strong>확장성:</strong> 추가 props나 로직을 쉽게 추가 가능
          </li>
          <li>
            <strong>접근성:</strong> forwardRef로 ref 전달 및 접근성 향상
          </li>
        </ul>
      </section>

      {/* Button 컴포넌트 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Button 컴포넌트
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          레시피를 Button 컴포넌트로 변환하여 사용합니다.
        </p>

        <div
          className={css({
            p: "24px",
            bg: "gray.50",
            rounded: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <div
            className={css({ display: "flex", gap: "12px", flexWrap: "wrap" })}
          >
            <Button fullWidth>Full Width</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </div>

        <div
          className={css({
            mt: "16px",
            p: "16px",
            bg: "blue.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "blue.200",
          })}
        >
          <h3
            className={css({ fontSize: "16px", fontWeight: "600", mb: "8px" })}
          >
            코드 예제:
          </h3>
          <pre
            className={css({
              p: "12px",
              bg: "gray.900",
              color: "green.400",
              rounded: "6px",
              fontSize: "12px",
              overflowX: "auto",
              textAlign: "left",
            })}
          >
            {`// 레시피 정의
const buttonRecipe = cva({ /* ... */ });

// 컴포넌트로 변환
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonRecipe> {
  loading?: boolean;
}

export const Button = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(
        buttonRecipe({ variant, size, fullWidth }),
        loading && css({ /* loading styles */ }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 사용
<Button variant="primary" size="lg" loading>
  Submit
</Button>`}
          </pre>
        </div>
      </section>

      {/* Badge 컴포넌트 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. Badge 컴포넌트 (forwardRef 사용)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          forwardRef를 사용하여 ref 전달이 가능한 Badge 컴포넌트입니다.
        </p>

        <div
          className={css({
            p: "24px",
            bg: "gray.50",
            rounded: "12px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          })}
        >
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="outline" colorScheme="green">
            Green
          </Badge>
          <Badge variant="subtle" colorScheme="red">
            Red
          </Badge>
          {badgeVisible && (
            <Badge
              variant="solid"
              colorScheme="yellow"
              onClose={() => setBadgeVisible(false)}
            >
              Closable
            </Badge>
          )}
        </div>

        <div
          className={css({
            mt: "16px",
            p: "16px",
            bg: "blue.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "blue.200",
          })}
        >
          <h3
            className={css({ fontSize: "16px", fontWeight: "600", mb: "8px" })}
          >
            forwardRef 사용 이유:
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>부모 컴포넌트에서 DOM 요소에 직접 접근 가능</li>
            <li>애니메이션 라이브러리나 측정 라이브러리와 통합 용이</li>
            <li>접근성 향상 (포커스 관리 등)</li>
          </ul>
        </div>
      </section>

      {/* Card 컴포넌트 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Card 컴포넌트 (복합 컴포넌트)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Card와 함께 Header, Body, Footer를 사용하는 복합 컴포넌트 패턴입니다.
        </p>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          })}
        >
          <Card variant="default">
            <CardHeader>
              <h3 className={css({ fontSize: "18px", fontWeight: "600" })}>
                Default Card
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600" })}>
                기본 스타일의 카드입니다.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="primary">
                Action
              </Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" interactive>
            <CardHeader>
              <h3 className={css({ fontSize: "18px", fontWeight: "600" })}>
                Elevated Card
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600" })}>
                호버 시 그림자가 커지는 카드입니다.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h3 className={css({ fontSize: "18px", fontWeight: "600" })}>
                Outlined Card
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600" })}>
                두꺼운 테두리를 가진 카드입니다.
              </p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 타입 안전성 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. TypeScript 타입 안전성
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>VariantProps</code>를 사용하여 레시피의 variants를 자동으로
          타입으로 추론합니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "green.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "green.200",
          })}
        >
          <pre
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
            {`// ✅ 타입 안전성 예제
// 방법 1: 직접 타입 정의 (간단하고 명확)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

// 방법 2: RecipeVariantProps 사용 (자동 추론)
// import type { RecipeVariantProps } from "../../../styled-system/types/recipe";
// type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
//   loading?: boolean;
// }

// 이제 variant, size, fullWidth가 자동 완성되고
// 잘못된 값은 타입 에러가 발생합니다
<Button variant="primary" size="lg" /> ✅
<Button variant="invalid" /> ❌ TypeScript 에러
<Button size="xl" /> ❌ TypeScript 에러 (xl은 정의되지 않음)`}
          </pre>
        </div>
      </section>

      {/* 실무 팁 */}
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
              <strong>VariantProps 사용:</strong> 레시피의 variants를 자동으로
              타입으로 추론하여 타입 안전성을 보장합니다.
            </li>
            <li>
              <strong>className 병합:</strong> <code>cx()</code>를 사용하여
              레시피 클래스와 추가 클래스를 안전하게 병합합니다.
            </li>
            <li>
              <strong>forwardRef:</strong> DOM 접근이 필요한 경우 forwardRef를
              사용하여 ref를 전달합니다.
            </li>
            <li>
              <strong>기본 HTML 속성 확장:</strong>{" "}
              <code>ButtonHTMLAttributes</code>나 <code>HTMLAttributes</code>를
              확장하여 모든 기본 HTML 속성을 사용할 수 있습니다.
            </li>
            <li>
              <strong>복합 컴포넌트:</strong> Card처럼 여러 하위 컴포넌트를 함께
              제공하여 더 구조화된 컴포넌트를 만들 수 있습니다.
            </li>
            <li>
              <strong>조건부 스타일:</strong> loading, disabled 같은 상태에 따라
              조건부로 스타일을 적용할 수 있습니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
