import { css, type RecipeVariant } from "../../../styled-system/css";
import { Box, Flex, Stack, styled } from "../../../styled-system/jsx";
import { badge } from "../../../styled-system/recipes";
import { progress } from "../../../styled-system/recipes";
import type { JsxStyleProps } from "../../../styled-system/types/system-types";

type ProgressVariants = RecipeVariant<typeof progress>;

interface ProgressProps extends ProgressVariants, JsxStyleProps {
  checked: boolean[];
  titles: string[];
  descriptions: string[];
}

interface ProgressItemProps extends ProgressVariants {
  checked: boolean;
  title: string;
  description: string;
  isLast?: boolean;
}

const Badge = styled("div", badge);

const Progress = (props: ProgressProps) => {
  return (
    <>
      {props.checked.map((checked, index) => (
        <ProgressItem
          key={index}
          checked={checked}
          title={props.titles[index]}
          description={props.descriptions[index]}
          size={props.size}
          isLast={index !== props.checked.length - 1}
        />
      ))}
    </>
  );
};

const ProgressItem = (props: ProgressItemProps) => {
  const styles = progress({ size: props.size, checked: props.checked });
  return (
    <Flex className={styles.root}>
      <Flex
        direction="column"
        justifyContent="start"
        alignItems="center"
        gap="2px"
      >
        <Box className={styles.checkpoint}>{props.checked ? "✓" : ""}</Box>
        {props.isLast && <Box className={styles.line}></Box>}
      </Flex>
      <Box textAlign="left" alignSelf="start">
        <Box className={styles.title}>{props.title}</Box>
        <Box className={styles.description}>{props.description}</Box>
      </Box>
    </Flex>
  );
};

export const RecipeExcercise = () => {
  const titles = ["Ordered", "Shiped", "Out for delivery", "Delivered"];
  const descriptions = [
    "9:15 AM, January 2024",
    "12:45 PM, January 5 2024",
    "07:00 AM, January 8, 2024",
    "Estimated delivery today by 5:30 PM",
  ];
  const checked = [true, true, false, false];
  return (
    <div
      className={css({
        display: "flex",
        p: "36px",
        maxW: "1200px",
        mx: "auto",
        flexDirection: "column",
        gap: "48px",
      })}
    >
      <div className={css({ fontSize: "24px", fontWeight: "600" })}>
        1. Recipe as JSX Excercise
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          mb: "24px",
        })}
      >
        <Badge variant="solid" colorScheme="blue" size="md">
          Badge
        </Badge>
        <Badge variant="solid" colorScheme="green" size="md">
          Badge
        </Badge>
        <Badge variant="solid" colorScheme="red" size="md">
          Badge
        </Badge>
        <Badge variant="outline" colorScheme="blue" size="md">
          Badge
        </Badge>
        <Badge variant="outline" colorScheme="green" size="md">
          Badge
        </Badge>
      </div>
      <div
        className={css({
          fontSize: "24px",
          justifyContent: "center",
          gap: "10px",
          mb: "24px",
          fontWeight: "600",
        })}
      >
        2. Slot Recipe as JSX Excercise
        <Stack>
          <div className={css({ mt: "24px" })}>Size = Medium</div>
          <Progress
            checked={checked}
            titles={titles}
            descriptions={descriptions}
            size="md"
          />
          <div className={css({ mt: "24px" })}>Size = Small</div>
          <Progress
            checked={checked}
            titles={titles}
            descriptions={descriptions}
            size="sm"
          />
        </Stack>
      </div>
    </div>
  );
};
