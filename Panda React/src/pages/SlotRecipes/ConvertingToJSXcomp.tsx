import { useState } from "react";
import { sva } from "../../../styled-system/css";
import { css } from "../../../styled-system/css";
import { cx } from "../../../styled-system/css";
import type { RecipeVariant } from "../../../styled-system/types/recipe";
import { type HTMLAttributes } from "react";

// ✅ Step 1: Tabs Slot Recipe 정의
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

// ✅ Step 2: Props Interface 정의
// RecipeVariant를 사용하여 타입을 자동으로 추론
type TabsVariant = RecipeVariant<typeof tabsSlotRecipe>;

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface DataTabsProps extends HTMLAttributes<HTMLDivElement> {
  // ✅ Step 8: Recipe Variants 지원
  variant?: TabsVariant["variant"];
  size?: TabsVariant["size"];
  // ✅ Step 4: 동적 데이터를 위한 props
  data: TabData[];
  // ✅ Step 6: 커스터마이제이션을 위한 추가 props
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

// ============================================
// ✅ Step 3: DataTabs 컴포넌트 정의
// ============================================
// 하드코딩된 값을 제거하고 동적으로 렌더링

export const DataTabs = ({
  data,
  variant = "default",
  size = "md",
  defaultValue,
  onValueChange,
  className,
  ...props
}: DataTabsProps) => {
  // ✅ Step 9: Recipe Props 분리
  // splitVariantProps를 사용하여 recipe props와 다른 props를 분리
  const [recipeProps, restProps] = tabsSlotRecipe.splitVariantProps({
    variant,
    size,
    ...props,
  });

  const styles = tabsSlotRecipe(recipeProps);
  const [activeTab, setActiveTab] = useState(defaultValue || data[0]?.id || "");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onValueChange?.(tabId);
  };

  // ✅ Step 5: 동적 탭 콘텐츠 렌더링
  // 데이터를 map하여 동적으로 탭과 콘텐츠를 렌더링
  return (
    <div className={cx(styles.root, className)} {...restProps}>
      <div className={styles.list}>
        {data.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cx(
              styles.trigger,
              activeTab === tab.id &&
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
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {data.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

// ============================================
// ✅ 사용 예제 컴포넌트
// ============================================

export const ConvertingToJSXcomp = () => {
  // ✅ Step 5: 데이터 정의 및 컴포넌트에 전달
  const tabsData: TabData[] = [
    {
      id: "tab1",
      label: "Overview",
      content: (
        <div>
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            Overview Content
          </h3>
          <p className={css({ color: "gray.600" })}>
            This is the overview tab content. It's dynamically rendered from the
            data array.
          </p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Analytics",
      content: (
        <div>
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            Analytics Content
          </h3>
          <p className={css({ color: "gray.600" })}>
            This is the analytics tab content. The content is passed as part of
            the data structure.
          </p>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Reports",
      content: (
        <div>
          <h3
            className={css({ fontSize: "18px", fontWeight: "600", mb: "12px" })}
          >
            Reports Content
          </h3>
          <p className={css({ color: "gray.600" })}>
            This is the reports tab content. All tabs are rendered dynamically
            from the data array.
          </p>
        </div>
      ),
    },
  ];

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
          변환 단계
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Slot Recipe를 재사용 가능한 컴포넌트로 변환하는 단계별 과정을
          설명합니다.
        </p>
        <ol
          className={css({
            listStyle: "decimal",
            ml: "24px",
            spaceY: "8px",
            textAlign: "left",
          })}
        >
          <li>Tabs 컴포넌트 생성</li>
          <li>DataTabs 컴포넌트 정의 및 하드코딩된 값 제거</li>
          <li>Props Interface 정의</li>
          <li>동적 탭 콘텐츠 렌더링</li>
          <li>컴포넌트에 데이터 전달</li>
          <li>커스터마이제이션 Props 노출</li>
          <li>추가 Props 처리</li>
          <li>Recipe Variants 지원</li>
          <li>Recipe Props 분리 (splitVariantProps)</li>
        </ol>
      </section>

      {/* Step 1: Tabs 컴포넌트 생성 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 1: Tabs Slot Recipe 정의
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          먼저 <code>sva()</code>를 사용하여 Tabs의 slot recipe를 정의합니다.
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
            {`const tabsSlotRecipe = sva({
  slots: ["root", "list", "trigger", "content", "indicator"],
  base: {
    root: { /* ... */ },
    list: { /* ... */ },
    trigger: { /* ... */ },
    content: { /* ... */ },
  },
  variants: {
    variant: { default: {}, enclosed: {} },
    size: { sm: {}, md: {}, lg: {} },
  },
});`}
          </pre>
        </div>
      </section>

      {/* Step 2: Props Interface 정의 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 2: Props Interface 정의
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>RecipeVariant</code>를 사용하여 타입을 자동으로 추론하고,
          데이터와 커스터마이제이션을 위한 props를 정의합니다.
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
            {`import type { RecipeVariant } from "../../../styled-system/types/recipe";

type TabsVariant = RecipeVariant<typeof tabsSlotRecipe>;

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface DataTabsProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TabsVariant["variant"];
  size?: TabsVariant["size"];
  data: TabData[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}`}
          </pre>
        </div>
      </section>

      {/* Step 3: DataTabs 컴포넌트 정의 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 3: DataTabs 컴포넌트 정의
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          하드코딩된 값을 제거하고 동적으로 데이터를 받아서 렌더링하는
          컴포넌트를 만듭니다.
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
            {`export const DataTabs = ({
  data,
  variant = "default",
  size = "md",
  defaultValue,
  onValueChange,
  className,
  ...props
}: DataTabsProps) => {
  // splitVariantProps로 recipe props 분리
  const [recipeProps, restProps] = tabsSlotRecipe.splitVariantProps({
    variant,
    size,
    ...props,
  });

  const styles = tabsSlotRecipe(recipeProps);
  // ... 동적 렌더링 로직
};`}
          </pre>
        </div>
      </section>

      {/* Step 4: 동적 탭 콘텐츠 렌더링 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 4: 동적 탭 콘텐츠 렌더링
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          데이터 배열을 <code>map()</code>하여 동적으로 탭과 콘텐츠를
          렌더링합니다.
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
            {`// 데이터를 map하여 동적으로 렌더링
<div className={styles.list}>
  {data.map((tab) => (
    <button
      key={tab.id}
      onClick={() => handleTabChange(tab.id)}
      className={styles.trigger}
    >
      {tab.label}
    </button>
  ))}
</div>
<div className={styles.content}>
  {data.find((tab) => tab.id === activeTab)?.content}
</div>`}
          </pre>
        </div>
      </section>

      {/* Step 5: 컴포넌트에 데이터 전달 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 5: 컴포넌트에 데이터 전달
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          데이터 배열을 정의하고 컴포넌트에 전달합니다.
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
            {`const tabsData: TabData[] = [
  {
    id: "tab1",
    label: "Overview",
    content: <div>Overview Content</div>,
  },
  {
    id: "tab2",
    label: "Analytics",
    content: <div>Analytics Content</div>,
  },
];

<DataTabs data={tabsData} variant="default" size="md" />`}
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
            mb: "24px",
          })}
        >
          <DataTabs data={tabsData} variant="default" size="md" />
        </div>
      </section>

      {/* Step 6: 커스터마이제이션 Props 노출 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 6: 커스터마이제이션 Props 노출
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          컴포넌트를 확장 가능하게 만들기 위해 추가 props를 노출합니다. (예:
          <code>defaultValue</code>, <code>onValueChange</code>)
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
            {`interface DataTabsProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TabsVariant["variant"];
  size?: TabsVariant["size"];
  data: TabData[];
  defaultValue?: string; // 커스터마이제이션 prop
  onValueChange?: (value: string) => void; // 커스터마이제이션 prop
}`}
          </pre>
        </div>
      </section>

      {/* Step 7: 추가 Props 처리 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 7: 추가 Props 처리
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>...props</code>를 사용하여 모든 HTML 속성을 전달할 수 있도록
          합니다.
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
            {`export const DataTabs = ({
  data,
  variant,
  size,
  className,
  ...props // 모든 HTML 속성 전달
}: DataTabsProps) => {
  // ...
  return (
    <div className={cx(styles.root, className)} {...restProps}>
      {/* ... */}
    </div>
  );
};`}
          </pre>
        </div>
      </section>

      {/* Step 8: Recipe Variants 지원 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 8: Recipe Variants 지원
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>RecipeVariant</code>를 import하여 타입을 자동으로 추론하고,
          variants를 props로 받을 수 있도록 합니다.
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
            {`import type { RecipeVariant } from "../../../styled-system/types/recipe";

type TabsVariant = RecipeVariant<typeof tabsSlotRecipe>;

interface DataTabsProps {
  variant?: TabsVariant["variant"]; // 자동 타입 추론
  size?: TabsVariant["size"]; // 자동 타입 추론
}`}
          </pre>
        </div>

        {/* Variants 사용 예제 */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          })}
        >
          <div>
            <h3
              className={css({
                fontSize: "16px",
                fontWeight: "600",
                mb: "12px",
              })}
            >
              Default Variant
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
              <DataTabs data={tabsData} variant="default" size="md" />
            </div>
          </div>
          <div>
            <h3
              className={css({
                fontSize: "16px",
                fontWeight: "600",
                mb: "12px",
              })}
            >
              Enclosed Variant
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
              <DataTabs data={tabsData} variant="enclosed" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Step 9: Recipe Props 분리 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Step 9: Recipe Props 분리 (splitVariantProps)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>splitVariantProps</code>를 사용하여 recipe props와 다른 props를
          분리합니다. 이렇게 하면 recipe variants와 일반 HTML 속성을 명확히
          구분할 수 있습니다.
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
            ✅ splitVariantProps의 장점
          </h3>
          <ul
            className={css({
              listStyle: "disc",
              ml: "20px",
              spaceY: "4px",
              textAlign: "left",
            })}
          >
            <li>Recipe variants와 일반 props를 자동으로 분리</li>
            <li>타입 안전성 보장</li>
            <li>코드가 더 명확해짐</li>
            <li>실수로 잘못된 props를 전달하는 것을 방지</li>
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
            {`export const DataTabs = ({
  data,
  variant,
  size,
  className,
  ...props
}: DataTabsProps) => {
  // splitVariantProps로 recipe props와 일반 props 분리
  const [recipeProps, restProps] = tabsSlotRecipe.splitVariantProps({
    variant,
    size,
    ...props, // 모든 추가 props 포함
  });

  // recipeProps는 { variant, size }만 포함
  const styles = tabsSlotRecipe(recipeProps);

  // restProps는 recipe props를 제외한 나머지 props
  return (
    <div className={cx(styles.root, className)} {...restProps}>
      {/* ... */}
    </div>
  );
};`}
          </pre>
        </div>
      </section>

      {/* 실무 활용 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          실무 활용 팁
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
              <strong>RecipeVariant 사용:</strong> 타입을 자동으로 추론하여 타입
              안전성을 보장합니다.
            </li>
            <li>
              <strong>splitVariantProps:</strong> Recipe props와 일반 props를
              분리하여 코드를 더 명확하게 만듭니다.
            </li>
            <li>
              <strong>동적 렌더링:</strong> 데이터 배열을 사용하여 컴포넌트를
              재사용 가능하게 만듭니다.
            </li>
            <li>
              <strong>커스터마이제이션:</strong> 추가 props를 노출하여
              컴포넌트를 확장 가능하게 만듭니다.
            </li>
            <li>
              <strong>타입 안전성:</strong> TypeScript를 사용하여 모든 props의
              타입을 명확히 정의합니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
