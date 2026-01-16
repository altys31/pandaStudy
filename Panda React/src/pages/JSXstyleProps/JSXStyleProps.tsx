import { css } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";
import { badge } from "../../../styled-system/recipes";
import { SlotRecipesEx } from "../SlotRecipes/Excercise";

const BadgeComponent = styled("div", badge);

export const JSXStyleProps = () => {
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
        JSX Style Props in PandaCSS
      </h1>

      {/* 설명 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. JSX Style Props란?
        </h2>
        <p className={css({ color: "gray.700", lineHeight: "1.7" })}>
          PandaCSS는 <code>styled</code> factory를 통해 JSX 요소에서 직접 스타일
          props를 사용할 수 있습니다. 예를 들어 <code>p</code>, <code>bg</code>,{" "}
          <code>rounded</code> 같은 스타일 props를 JSX에서 바로 전달할 수 있어,
          <code>css()</code> 호출 없이도 빠르게 스타일을 적용할 수 있습니다.
        </p>
      </section>

      {/* 기본 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 기본 사용 예제
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            mb: "16px",
          })}
        >
          <styled.div
            p="16px"
            bg="white"
            rounded="10px"
            border="1px solid"
            borderColor="gray.200"
          >
            <styled.h3 fontSize="18px" fontWeight="600" mb="8px">
              Card Title
            </styled.h3>
            <styled.p fontSize="14px" color="gray.600" mb="12px">
              JSX에서 스타일 props로 바로 스타일링할 수 있습니다.
            </styled.p>
            <styled.button
              px="12px"
              py="8px"
              rounded="6px"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            >
              Action
            </styled.button>
          </styled.div>
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
          <pre>{`import { styled } from "styled-system/jsx";

<styled.div p="16px" bg="white" rounded="10px">
  <styled.h3 fontSize="18px" fontWeight="600">Title</styled.h3>
  <styled.button bg="blue.500" color="white">Action</styled.button>
</styled.div>`}</pre>
        </div>
      </section>

      {/* 레이아웃 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 레이아웃 예제
        </h2>
        <styled.div
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="16px"
        >
          {["Design", "Development", "Marketing"].map((label) => (
            <styled.div
              key={label}
              p="16px"
              bg="white"
              rounded="8px"
              border="1px solid"
              borderColor="gray.200"
            >
              <styled.h4 fontSize="16px" fontWeight="600" mb="6px">
                {label}
              </styled.h4>
              <styled.p fontSize="13px" color="gray.600">
                레이아웃에서도 JSX style props를 그대로 사용합니다.
              </styled.p>
            </styled.div>
          ))}
        </styled.div>
      </section>

      {/* Badge Recipe + JSX Style Props */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 미리 정의된 Badge Recipe + JSX Style Props
        </h2>
        <p
          className={css({ color: "gray.700", mb: "16px", lineHeight: "1.6" })}
        >
          <code>RecipeExcercise</code>처럼 <code>styled()</code>에{" "}
          <code>badge</code> recipe를 연결하고, JSX에서 variant props를 전달하는
          예제입니다.
        </p>
        <styled.div
          display="flex"
          gap="12px"
          flexWrap="wrap"
          p="16px"
          bg="gray.50"
          rounded="12px"
          border="1px solid"
          borderColor="gray.200"
        >
          <BadgeComponent variant="solid" colorScheme="blue" size="md">
            Solid Blue
          </BadgeComponent>
          <BadgeComponent variant="solid" colorScheme="green" size="md">
            Solid Green
          </BadgeComponent>
          <BadgeComponent variant="solid" colorScheme="red" size="md">
            Solid Red
          </BadgeComponent>
          <BadgeComponent variant="outline" colorScheme="blue" size="md">
            Outline Blue
          </BadgeComponent>
          <BadgeComponent variant="outline" colorScheme="green" size="md">
            Outline Green
          </BadgeComponent>
        </styled.div>
        <div
          className={css({
            p: "16px",
            bg: "gray.900",
            color: "green.400",
            rounded: "8px",
            fontSize: "12px",
            overflowX: "auto",
            textAlign: "left",
            mt: "16px",
          })}
        >
          <pre>{`import { styled } from "styled-system/jsx";
import { badge } from "styled-system/recipes";

const BadgeComponent = styled("div", badge);

<styled.div display="flex" gap="12px">
  <BadgeComponent variant="solid" colorScheme="blue" size="md">
    Solid Blue
  </BadgeComponent>
  <BadgeComponent variant="outline" colorScheme="green" size="md">
    Outline Green
  </BadgeComponent>
</styled.div>`}</pre>
        </div>
      </section>

      {/* SlotRecipes Progress 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. SlotRecipes Progress (JSX 구성)
        </h2>
        <p
          className={css({ color: "gray.700", mb: "16px", lineHeight: "1.6" })}
        >
          SlotRecipes로 만든 Progress UI를 JSX 예제로 간단히 보여줍니다.
        </p>
        <div
          className={css({
            p: "16px",
            bg: "gray.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            mb: "16px",
          })}
        >
          <SlotRecipesEx />
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
          <pre>{`import { Box, Flex } from "styled-system/jsx";
import { sva } from "styled-system/css";

const ProgressSlotRecipe = sva({
  slots: ["root", "checkpoint", "line", "title", "description"],
  variants: {
    checked: {
      true: { checkpoint: { bg: "#3A3A3A", color: "white" } },
      false: { checkpoint: { border: "2px solid #D9D9D9" } },
    },
    size: { sm: { /* ... */ }, md: { /* ... */ } },
  },
});

const ProgressSlotRecipeComponent = ({ title, description, checked, size }) => {
  const styles = ProgressSlotRecipe({ size, checked });
  return (
    <Flex className={styles.root}>
      <Flex direction="column" alignItems="center" gap="2px">
        <Box className={styles.checkpoint}>{checked ? "✓" : ""}</Box>
        <Box className={styles.line} />
      </Flex>
      <Box textAlign="left" alignSelf="start">
        <Box className={styles.title}>{title}</Box>
        <Box className={styles.description}>{description}</Box>
      </Box>
    </Flex>
  );
};`}</pre>
        </div>
      </section>

      {/* 설정 안내 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 설정 (panda.config.ts)
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
          <pre>{`export default defineConfig({
  jsxStyleProps: "all", // all | minimal | none
});`}</pre>
        </div>
        <p className={css({ mt: "12px", color: "gray.700" })}>
          <code>jsxStyleProps</code>를 <code>all</code>로 두면 모든 스타일
          props를 사용할 수 있고, <code>minimal</code>이면 <code>css</code>{" "}
          prop만 허용됩니다.
        </p>
      </section>
    </div>
  );
};
