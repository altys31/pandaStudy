import { createContext, useContext, useMemo } from "react";
import { sva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";
import { type HTMLAttributes } from "react";

// ✅ Slot Recipe 정의
const cardSlotRecipe = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      p: "24px",
      bg: "white",
      rounded: "12px",
      border: "1px solid",
      borderColor: "gray.200",
      transition: "all 0.2s",
    },
    header: {
      pb: "16px",
      mb: "16px",
      borderBottom: "1px solid",
      borderColor: "gray.200",
    },
    body: {
      mb: "16px",
    },
    footer: {
      pt: "16px",
      borderTop: "1px solid",
      borderColor: "gray.200",
      display: "flex",
      gap: "8px",
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          boxShadow: "sm",
        },
      },
      elevated: {
        root: {
          boxShadow: "md",
          _hover: {
            boxShadow: "lg",
            transform: "translateY(-2px)",
          },
        },
      },
      outlined: {
        root: {
          boxShadow: "none",
          borderWidth: "2px",
        },
      },
    },
    size: {
      sm: {
        root: { p: "16px" },
        header: { pb: "12px", mb: "12px" },
        body: { mb: "12px" },
        footer: { pt: "12px" },
      },
      md: {
        root: { p: "24px" },
        header: { pb: "16px", mb: "16px" },
        body: { mb: "16px" },
        footer: { pt: "16px" },
      },
      lg: {
        root: { p: "32px" },
        header: { pb: "20px", mb: "20px" },
        body: { mb: "20px" },
        footer: { pt: "20px" },
      },
    },
    interactive: {
      true: {
        root: {
          cursor: "pointer",
          _hover: {
            borderColor: "blue.500",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// ============================================
// ✅ 고려사항 1: Context를 사용한 Variants 공유
// ============================================
// 여러 slot 컴포넌트가 동일한 variants를 공유해야 할 때 Context 사용

type CardContextValue = {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
};

const CardContext = createContext<CardContextValue | undefined>(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Card slot components must be used within Card");
  }
  return context;
};

// ============================================
// ✅ 고려사항 2: 메인 컴포넌트 (Root)
// ============================================
// Root 컴포넌트는 variants를 받아서 Context로 전달하고, styles를 계산

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
}

export const Card = ({
  variant = "default",
  size = "md",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) => {
  // ✅ 고려사항 3: useMemo로 스타일 계산 최적화
  // variants가 변경될 때만 재계산
  const styles = useMemo(
    () => cardSlotRecipe({ variant, size, interactive }),
    [variant, size, interactive]
  );

  const contextValue = useMemo(
    () => ({ variant, size, interactive }),
    [variant, size, interactive]
  );

  return (
    <CardContext.Provider value={contextValue}>
      <div className={cx(styles.root, className)} {...props}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

// ============================================
// ✅ 고려사항 4: Slot 컴포넌트들
// ============================================
// 각 slot 컴포넌트는 Context에서 variants를 가져와서 스타일 적용

export const CardHeader = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant, size } = useCardContext();
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant, size } = useCardContext();
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.body, className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant, size } = useCardContext();
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.footer, className)} {...props}>
      {children}
    </div>
  );
};

// ============================================
// ✅ 고려사항 5: 대안 - Props 직접 전달 방식
// ============================================
// Context 대신 각 slot 컴포넌트에 props로 직접 전달하는 방식
// 더 명시적이지만 props drilling이 발생할 수 있음

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
}

export const CardHeaderDirect = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: CardHeaderProps) => {
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

// ============================================
// ✅ 고려사항 6: 복합 컴포넌트 패턴
// ============================================
// Card.Header, Card.Body 같은 네임스페이스 패턴 사용

export const CardComposition = Card as typeof Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

CardComposition.Header = CardHeader;
CardComposition.Body = CardBody;
CardComposition.Footer = CardFooter;

// ============================================
// ✅ 사용 예제 컴포넌트
// ============================================

export const ConvertingToJSXcomp = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Slot Recipes를 JSX 컴포넌트로 변환하기
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          변환 시 고려해야 할 주요 사항
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Slot Recipes를 React 컴포넌트로 변환할 때는 여러 가지 중요한
          고려사항이 있습니다. 각 고려사항을 이해하고 적절히 적용하면 더 나은
          컴포넌트를 만들 수 있습니다.
        </p>
      </section>

      {/* 고려사항 1: Context를 사용한 Variants 공유 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Context를 사용한 Variants 공유
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          여러 slot 컴포넌트가 동일한 variants를 공유해야 할 때 Context를
          사용합니다. 이렇게 하면 props drilling을 피하고, 일관성을 유지할 수
          있습니다.
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
            ✅ 장점
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>Props drilling 방지</li>
            <li>일관된 variants 보장</li>
            <li>사용자가 실수로 다른 variant를 전달하는 것을 방지</li>
            <li>코드가 더 깔끔해짐</li>
          </ul>

          <h3
            className={css({
              fontSize: "18px",
              fontWeight: "600",
              mb: "12px",
              mt: "16px",
            })}
          >
            ⚠️ 주의사항
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>Context Provider 내부에서만 사용 가능</li>
            <li>잘못된 사용 시 에러 처리 필요</li>
            <li>과도한 Context 사용은 성능 저하 가능</li>
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
            {`// Context 정의
const CardContext = createContext<CardContextValue | undefined>(undefined);

// Root 컴포넌트에서 Provider로 감싸기
<CardContext.Provider value={{ variant, size }}>
  <div className={styles.root}>...</div>
</CardContext.Provider>

// Slot 컴포넌트에서 Context 사용
const { variant, size } = useCardContext();
const styles = cardSlotRecipe({ variant, size });`}
          </pre>
        </div>

        {/* 실제 사용 예제 */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          })}
        >
          <Card variant="elevated" size="md" interactive>
            <CardHeader>
              <h3 className={css({ fontSize: "18px", fontWeight: "600" })}>
                Context 사용 예제
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600" })}>
                CardHeader와 CardBody가 자동으로 동일한 variant와 size를
                공유합니다.
              </p>
            </CardBody>
            <CardFooter>
              <button
                className={css({
                  px: "12px",
                  py: "6px",
                  bg: "blue.500",
                  color: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                })}
              >
                Action
              </button>
            </CardFooter>
          </Card>

          <Card variant="outlined" size="sm">
            <CardHeader>
              <h3 className={css({ fontSize: "16px", fontWeight: "600" })}>
                Small Outlined
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600", fontSize: "14px" })}>
                모든 slot이 자동으로 sm size를 공유합니다.
              </p>
            </CardBody>
            <CardFooter>
              <button
                className={css({
                  px: "10px",
                  py: "4px",
                  bg: "gray.200",
                  color: "gray.900",
                  rounded: "4px",
                  fontSize: "12px",
                  cursor: "pointer",
                })}
              >
                Cancel
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 고려사항 2: 성능 최적화 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 성능 최적화 (useMemo)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Slot Recipe의 스타일 계산은 variants가 변경될 때만 재계산되도록{" "}
          <code>useMemo</code>를 사용합니다.
        </p>

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
            ✅ 최적화 전략
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>
              <code>useMemo</code>로 스타일 계산 결과를 메모이제이션
            </li>
            <li>Context value도 메모이제이션하여 불필요한 리렌더링 방지</li>
            <li>variants가 변경될 때만 재계산</li>
            <li>대량의 컴포넌트 렌더링 시 성능 향상</li>
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
          })}
        >
          <pre>
            {`// ✅ 최적화된 코드
const styles = useMemo(
  () => cardSlotRecipe({ variant, size, interactive }),
  [variant, size, interactive] // 의존성 배열
);

const contextValue = useMemo(
  () => ({ variant, size, interactive }),
  [variant, size, interactive]
);

// ❌ 최적화되지 않은 코드 (매 렌더링마다 재계산)
const styles = cardSlotRecipe({ variant, size, interactive });`}
          </pre>
        </div>
      </section>

      {/* 고려사항 3: 타입 안전성 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 타입 안전성
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          TypeScript를 사용하여 variants의 타입을 명확히 정의하고, 잘못된 사용을
          방지합니다.
        </p>

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
            ✅ 타입 정의 예제
          </h3>
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
            <pre>
              {`// 명시적인 타입 정의
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
}

// Context 타입 정의
type CardContextValue = {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
};

// 타입 안전한 Context 사용
const CardContext = createContext<CardContextValue | undefined>(undefined);`}
            </pre>
          </div>
        </div>
      </section>

      {/* 고려사항 4: 컴포지션 패턴 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 컴포지션 패턴 (네임스페이스)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>Card.Header</code>, <code>Card.Body</code> 같은 네임스페이스
          패턴을 사용하면 더 직관적인 API를 제공할 수 있습니다.
        </p>

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
            ✅ 사용 예제
          </h3>
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
            <pre>
              {`// 컴포지션 패턴 적용
export const CardComposition = Card as typeof Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

CardComposition.Header = CardHeader;
CardComposition.Body = CardBody;
CardComposition.Footer = CardFooter;

// 사용
<CardComposition variant="elevated">
  <CardComposition.Header>...</CardComposition.Header>
  <CardComposition.Body>...</CardComposition.Body>
  <CardComposition.Footer>...</CardComposition.Footer>
</CardComposition>`}
            </pre>
          </div>
        </div>

        {/* 실제 사용 예제 */}
        <CardComposition variant="elevated" size="md">
          <CardComposition.Header>
            <h3 className={css({ fontSize: "18px", fontWeight: "600" })}>
              컴포지션 패턴 예제
            </h3>
          </CardComposition.Header>
          <CardComposition.Body>
            <p className={css({ color: "gray.600" })}>
              Card.Header, Card.Body 같은 네임스페이스로 사용할 수 있습니다.
            </p>
          </CardComposition.Body>
          <CardComposition.Footer>
            <button
              className={css({
                px: "12px",
                py: "6px",
                bg: "blue.500",
                color: "white",
                rounded: "6px",
                fontSize: "14px",
                cursor: "pointer",
              })}
            >
              Action
            </button>
          </CardComposition.Footer>
        </CardComposition>
      </section>

      {/* 고려사항 5: 에러 처리 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 에러 처리
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Context를 사용할 때는 slot 컴포넌트가 Provider 외부에서 사용되는
          경우를 대비한 에러 처리가 필요합니다.
        </p>

        <div
          className={css({
            p: "20px",
            bg: "red.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "red.200",
            mb: "24px",
          })}
        >
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            ✅ 에러 처리 예제
          </h3>
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
            <pre>
              {`const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Card slot components must be used within Card");
  }
  return context;
};

// 사용 시 명확한 에러 메시지 제공
// 개발자가 실수로 CardHeader를 Card 외부에서 사용하면
// 즉시 에러를 확인할 수 있음`}
            </pre>
          </div>
        </div>
      </section>

      {/* 고려사항 6: 확장성 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 확장성과 재사용성
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          컴포넌트를 확장 가능하게 만들고, 추가 스타일을 쉽게 적용할 수 있도록
          설계합니다.
        </p>

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
            ✅ 확장성 고려사항
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>
              <code>className</code> prop을 받아서 추가 스타일 적용 가능
            </li>
            <li>
              <code>...props</code>로 모든 HTML 속성 전달 가능
            </li>
            <li>기본 스타일을 덮어쓸 수 있는 유연성 제공</li>
            <li>컴포넌트 조합을 통한 확장</li>
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
          })}
        >
          <pre>
            {`// ✅ 확장 가능한 컴포넌트
export const CardHeader = ({
  className, // 추가 스타일을 위한 className
  children,
  ...props // 모든 HTML 속성 전달
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant, size } = useCardContext();
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

// 사용 예제: 추가 스타일 적용
<CardHeader className={css({ bg: "blue.50" })}>
  Custom Header
</CardHeader>`}
          </pre>
        </div>
      </section>

      {/* 실무 활용 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 실무 활용 팁
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
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "8px",
              textAlign: "left",
            })}
          >
            <li>
              <strong>Context vs Props:</strong> 간단한 컴포넌트는 props 전달,
              복잡한 컴포넌트는 Context 사용
            </li>
            <li>
              <strong>성능 최적화:</strong> <code>useMemo</code>로 스타일 계산
              메모이제이션
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript로 variants 타입 명확히
              정의
            </li>
            <li>
              <strong>에러 처리:</strong> Context 사용 시 Provider 외부 사용
              방지
            </li>
            <li>
              <strong>확장성:</strong> <code>className</code>과{" "}
              <code>...props</code> 제공
            </li>
            <li>
              <strong>컴포지션:</strong> 네임스페이스 패턴으로 더 직관적인 API
              제공
            </li>
            <li>
              <strong>일관성:</strong> 모든 slot 컴포넌트가 동일한 variants를
              공유하도록 보장
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
