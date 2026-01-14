import { useState } from "react";
import { sva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";
import { type HTMLAttributes } from "react";

// ✅ 1. Card Slot Recipe 정의
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

// ✅ 2. Dialog Slot Recipe 정의는 아래 예제 섹션에서 코드로만 보여줍니다

// ✅ 3. Tabs Slot Recipe 정의
const tabsSlotRecipe = sva({
  slots: ["root", "list", "trigger", "content", "indicator"],
  base: {
    root: {
      w: "100%",
    },
    list: {
      display: "flex",
      gap: "4px",
      borderBottom: "2px solid",
      borderColor: "gray.200",
      position: "relative",
    },
    trigger: {
      px: "16px",
      py: "12px",
      fontSize: "14px",
      fontWeight: "500",
      color: "gray.600",
      bg: "transparent",
      border: "none",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.2s",
      _hover: {
        color: "gray.900",
      },
    },
    content: {
      p: "24px",
      display: "none",
    },
    indicator: {
      position: "absolute",
      bottom: "-2px",
      h: "2px",
      bg: "blue.500",
      transition: "all 0.2s",
    },
  },
  variants: {
    variant: {
      default: {},
      enclosed: {
        list: {
          border: "1px solid",
          borderColor: "gray.200",
          rounded: "8px",
          borderBottom: "1px solid",
        },
        trigger: {
          rounded: "8px",
          _selected: {
            bg: "blue.50",
            color: "blue.600",
          },
        },
      },
    },
    size: {
      sm: {
        trigger: { px: "12px", py: "8px", fontSize: "12px" },
        content: { p: "16px" },
      },
      md: {
        trigger: { px: "16px", py: "12px", fontSize: "14px" },
        content: { p: "24px" },
      },
      lg: {
        trigger: { px: "20px", py: "16px", fontSize: "16px" },
        content: { p: "32px" },
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

// ============================================
// ✅ JSX 컴포넌트로 변환
// ============================================

// ✅ Card 컴포넌트
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
}

export const Card = ({
  variant,
  size,
  interactive,
  className,
  children,
  ...props
}: CardProps) => {
  const styles = cardSlotRecipe({ variant, size, interactive });
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

interface CardSlotProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
}

export const CardHeader = ({
  variant,
  size,
  className,
  children,
  ...props
}: CardSlotProps) => {
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({
  variant,
  size,
  className,
  children,
  ...props
}: CardSlotProps) => {
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.body, className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  variant,
  size,
  className,
  children,
  ...props
}: CardSlotProps) => {
  const styles = cardSlotRecipe({ variant, size });
  return (
    <div className={cx(styles.footer, className)} {...props}>
      {children}
    </div>
  );
};

// ============================================
// ✅ 사용 예제 컴포넌트
// ============================================

export const SlotRecipes = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Slot Recipes (sva) 예제
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Slot Recipes란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          <code>sva()</code> (Slot Variant Authority)는 여러 부분(slots)을 가진
          복합 컴포넌트를 위한 레시피입니다. 각 부분에 대해 독립적으로 스타일을
          정의하고 variants를 적용할 수 있습니다.
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
              <strong>여러 Slots:</strong> 하나의 컴포넌트에 여러 부분(예:
              header, body, footer)을 정의
            </li>
            <li>
              <strong>독립적인 스타일:</strong> 각 slot에 대해 base 스타일과
              variants를 독립적으로 정의
            </li>
            <li>
              <strong>일관된 Variants:</strong> 모든 slots에 동일한 variants를
              적용하여 일관성 유지
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript로 각 slot의 타입을 자동
              추론
            </li>
            <li>
              <strong>재사용성:</strong> 복합 컴포넌트를 쉽게 재사용 가능한
              형태로 정의
            </li>
          </ul>
        </div>
      </section>

      {/* Card 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. Card Slot Recipe
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Card 컴포넌트를 <code>root</code>, <code>header</code>,{" "}
          <code>body</code>, <code>footer</code> slots로 정의합니다.
        </p>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            mb: "24px",
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
              <button
                className={css({
                  px: "12px",
                  py: "6px",
                  bg: "gray.200",
                  color: "gray.900",
                  rounded: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                })}
              >
                Learn More
              </button>
            </CardFooter>
          </Card>

          <Card variant="outlined" size="sm">
            <CardHeader>
              <h3 className={css({ fontSize: "16px", fontWeight: "600" })}>
                Outlined Card (Small)
              </h3>
            </CardHeader>
            <CardBody>
              <p className={css({ color: "gray.600", fontSize: "14px" })}>
                작은 크기의 카드입니다.
              </p>
            </CardBody>
            <CardFooter>
              <button
                className={css({
                  px: "10px",
                  py: "4px",
                  bg: "transparent",
                  color: "gray.700",
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
            {`// Card Slot Recipe 정의
const cardSlotRecipe = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: { /* root 스타일 */ },
    header: { /* header 스타일 */ },
    body: { /* body 스타일 */ },
    footer: { /* footer 스타일 */ },
  },
  variants: {
    variant: {
      default: { root: { /* ... */ } },
      elevated: { root: { /* ... */ } },
    },
    size: {
      sm: { root: { p: "16px" }, header: { /* ... */ } },
      md: { root: { p: "24px" }, header: { /* ... */ } },
    },
  },
});

// 사용
const styles = cardSlotRecipe({ variant: "elevated", size: "md" });
<div className={styles.root}>...</div>
<div className={styles.header}>...</div>
<div className={styles.body}>...</div>
<div className={styles.footer}>...</div>`}
          </pre>
        </div>
      </section>

      {/* Dialog 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. Dialog Slot Recipe
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Dialog 컴포넌트를 <code>overlay</code>, <code>content</code>,{" "}
          <code>header</code>, <code>body</code>, <code>footer</code>,{" "}
          <code>closeButton</code> slots로 정의합니다.
        </p>

        <div
          className={css({
            p: "24px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
          })}
        >
          <p className={css({ mb: "16px", color: "gray.600" })}>
            Dialog는 모달 오버레이와 여러 부분으로 구성됩니다. 각 부분에 대해
            독립적으로 스타일을 정의할 수 있습니다.
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
            <pre>
              {`const dialogSlotRecipe = sva({
  slots: ["overlay", "content", "header", "body", "footer", "closeButton"],
  base: {
    overlay: { /* 오버레이 스타일 */ },
    content: { /* 컨텐츠 스타일 */ },
    header: { /* 헤더 스타일 */ },
    body: { /* 본문 스타일 */ },
    footer: { /* 푸터 스타일 */ },
    closeButton: { /* 닫기 버튼 스타일 */ },
  },
  variants: {
    size: {
      sm: {
        content: { w: "400px" },
        header: { p: "16px" },
        body: { p: "16px" },
      },
      md: { /* ... */ },
      lg: { /* ... */ },
    },
  },
});`}
            </pre>
          </div>
        </div>
      </section>

      {/* Tabs 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Tabs Slot Recipe
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Tabs 컴포넌트를 <code>root</code>, <code>list</code>,{" "}
          <code>trigger</code>, <code>content</code>, <code>indicator</code>{" "}
          slots로 정의합니다.
        </p>

        <div
          className={css({
            p: "24px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
          })}
        >
          <div
            className={tabsSlotRecipe({ variant: "default", size: "md" }).root}
          >
            <div className={tabsSlotRecipe().list}>
              {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cx(
                    tabsSlotRecipe().trigger,
                    activeTab === index &&
                      css({
                        color: "blue.600",
                        fontWeight: "600",
                        _after: {
                          content: '""',
                          position: "absolute",
                          bottom: "-2px",
                          left: "0",
                          right: "0",
                          h: "2px",
                          bg: "blue.500",
                        },
                      })
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={css({ mt: "16px" })}>
              {["Content 1", "Content 2", "Content 3"].map((content, index) => (
                <div
                  key={index}
                  className={css({
                    display: activeTab === index ? "block" : "none",
                    p: "16px",
                    bg: "white",
                    rounded: "8px",
                  })}
                >
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* sva vs cva 비교 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. sva vs cva 비교
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
              cva() - 단일 컴포넌트
            </h3>
            <ul
              className={css({
                listStyle: "disc",
                ml: "20px",
                spaceY: "4px",
                textAlign: "left",
              })}
            >
              <li>하나의 요소에 대한 variants</li>
              <li>단일 클래스명 반환</li>
              <li>Button, Badge 같은 단순 컴포넌트에 적합</li>
              <li>
                사용: <code>{`button({ variant: "primary" })`}</code>
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
              sva() - 복합 컴포넌트
            </h3>
            <ul
              className={css({
                listStyle: "disc",
                ml: "20px",
                spaceY: "4px",
                textAlign: "left",
              })}
            >
              <li>여러 부분(slots)을 가진 컴포넌트</li>
              <li>객체 형태로 여러 클래스명 반환</li>
              <li>Card, Dialog, Tabs 같은 복합 컴포넌트에 적합</li>
              <li>
                사용: <code>{`card({ variant: "elevated" }).root`}</code>
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
              <strong>복합 컴포넌트에 사용:</strong> 여러 부분을 가진 컴포넌트
              (Card, Dialog, Tabs 등)에 sva를 사용합니다.
            </li>
            <li>
              <strong>일관된 Variants:</strong> 모든 slots에 동일한 variants를
              적용하여 일관성을 유지합니다.
            </li>
            <li>
              <strong>독립적인 스타일:</strong> 각 slot에 대해 base 스타일을
              독립적으로 정의할 수 있습니다.
            </li>
            <li>
              <strong>컴포넌트로 변환:</strong> sva로 정의한 레시피를 React
              컴포넌트로 변환하여 재사용성을 높입니다.
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript와 함께 사용하면 각 slot의
              타입이 자동으로 추론됩니다.
            </li>
            <li>
              <strong>compoundVariants:</strong> 여러 variants를 조합하여 특별한
              스타일을 적용할 수 있습니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
