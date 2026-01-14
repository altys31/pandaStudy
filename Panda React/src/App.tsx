import { useState } from "react";
import "./App.css";
import { css } from "../styled-system/css";
import { hstack } from "../styled-system/patterns";

// Layout Patterns
import { PatternsDemo } from "./pages/Layout Patterns/PatternsDemo";
import { GridPatternsDemo } from "./pages/Layout Patterns/GridPatternsDemo";
import { ContainerQueries } from "./pages/Layout Patterns/ContainerQueries";
import { CreatingAutoflexPattern } from "./pages/Layout Patterns/CreatingAutoflexPattern";
import { CreatingScrollablePattern } from "./pages/Layout Patterns/CreatingScrollablePattern";
import { Excercise } from "./pages/Layout Patterns/Excercise";
import { ColorModeToggle } from "./pages/ColorMode/ColorMode";
import { CreatingBadgeRecipe } from "./pages/Recipies/CreatingBadgeRecipe";
import { VirtualColorExample } from "./pages/Recipies/VirtualColorExample";
import { CompoundVariants } from "./pages/Recipies/CompoundVariants";
import { ConvertToJSXComponent } from "./pages/Recipies/ConvertToJSXComponent";
import { Excercise as Recipes_Excercise } from "./pages/Recipies/Excercise";
import { SlotRecipes } from "./pages/SlotRecipes/SlotRecipes";
import { ConvertingToJSXcomp } from "./pages/SlotRecipes/ConvertingToJSXcomp";
import { SlotRecipesEx } from "./pages/SlotRecipes/Excercise";

type ExampleComponent = {
  id: string;
  name: string;
  category: string;
  component: React.ComponentType;
};

const examples: ExampleComponent[] = [
  // Layout Patterns
  {
    id: "patterns",
    name: "HStack, VStack, Circle",
    category: "Layout Patterns",
    component: PatternsDemo,
  },
  {
    id: "grid",
    name: "Grid Patterns",
    category: "Layout Patterns",
    component: GridPatternsDemo,
  },
  {
    id: "container-queries",
    name: "Container Queries",
    category: "Layout Patterns",
    component: ContainerQueries,
  },
  {
    id: "auto-flex",
    name: "Auto Flex Pattern",
    category: "Layout Patterns",
    component: CreatingAutoflexPattern,
  },
  {
    id: "scrollable",
    name: "Scrollable Pattern",
    category: "Layout Patterns",
    component: CreatingScrollablePattern,
  },
  // Styling Foundation
  {
    id: "excercise",
    name: "Excercise",
    category: "Layout Patterns",
    component: Excercise,
  },
  {
    id: "color-mode",
    name: "Color Mode",
    category: "Color Mode",
    component: ColorModeToggle,
  },
  {
    id: "recipe",
    name: "Recipe",
    category: "Recipes",
    component: CreatingBadgeRecipe,
  },
  {
    id: "virtual-color-example",
    name: "Virtual Color Example",
    category: "Recipes",
    component: VirtualColorExample,
  },
  {
    id: "compound-variants",
    name: "Compound Variants",
    category: "Recipes",
    component: CompoundVariants,
  },
  {
    id: "convert-to-jsx",
    name: "Convert to JSX Component",
    category: "Recipes",
    component: ConvertToJSXComponent,
  },
  {
    id: "recipes-excercise",
    name: "Excercise",
    category: "Recipes",
    component: Recipes_Excercise,
  },
  {
    id: "slot-recipes",
    name: "Slot Recipes",
    category: "Slot Recipes",
    component: SlotRecipes,
  },
  {
    id: "converting-to-jsx",
    name: "Converting to JSX",
    category: "Slot Recipes",
    component: ConvertingToJSXcomp,
  },
  {
    id: "slot-recipes-excercise",
    name: "Slot Recipes Excercise",
    category: "Slot Recipes",
    component: SlotRecipesEx,
  },
];

function App() {
  const [selectedExample, setSelectedExample] = useState<string>("patterns");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const currentExample = examples.find((ex) => ex.id === selectedExample);
  const CurrentComponent = currentExample?.component || PatternsDemo;
  const isExercise = selectedExample === "excercise";

  const categories = Array.from(new Set(examples.map((ex) => ex.category)));

  // Exercise 컴포넌트는 전체 화면으로 표시
  if (isExercise && isFullscreen) {
    return (
      <div className={css({ minH: "100vh", bg: "white" })}>
        <div
          className={css({
            position: "fixed",
            top: "16px",
            right: "16px",
            zIndex: "1000",
          })}
        >
          <button
            onClick={() => {
              setIsFullscreen(false);
              setSelectedExample("patterns");
            }}
            className={css({
              px: "16px",
              py: "8px",
              bg: "gray.800",
              color: "white",
              rounded: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              _hover: { bg: "gray.900" },
            })}
          >
            ← 뒤로가기
          </button>
        </div>
        <CurrentComponent />
      </div>
    );
  }

  return (
    <div className={css({ minH: "100vh", bg: "gray.50" })}>
      {/* 네비게이션 바 */}
      <nav
        className={css({
          bg: "white",
          borderBottom: "1px solid",
          borderColor: "gray.200",
          position: "sticky",
          top: "0",
          zIndex: "100",
          boxShadow: "sm",
          display: isExercise ? "none" : "block",
        })}
      >
        <div
          className={css({
            maxW: "1400px",
            mx: "auto",
            px: "24px",
            py: "16px",
          })}
        >
          <div
            className={hstack({
              justify: "space-between",
              gap: "32px",
            })}
          >
            <h1
              className={css({
                fontSize: "24px",
                fontWeight: "bold",
                color: "gray.900",
              })}
            >
              PandaCSS Examples
            </h1>
            <div
              className={hstack({
                gap: "8px",
                flexWrap: "wrap",
              })}
            ></div>
          </div>
        </div>
      </nav>

      {/* 사이드바와 메인 콘텐츠 */}
      <div
        className={css({
          display: "flex",
          maxW: "1400px",
          mx: "auto",
          gap: "24px",
          p: "24px",
        })}
      >
        {/* 사이드바 */}
        <aside
          className={css({
            w: "250px",
            flexShrink: "0",
            bg: "white",
            rounded: "12px",
            p: "20px",
            maxH: "85vh",
            position: "sticky",
            top: "100px",
            border: "1px solid",
            borderColor: "gray.200",
            overflowY: "auto",
            height: "fit-content",
            display: isExercise ? "none" : "block",
          })}
        >
          <h2
            className={css({
              fontSize: "18px",
              fontWeight: "600",
              mb: "16px",
              color: "gray.900",
            })}
          >
            예제 목록
          </h2>
          <div className={css({ spaceY: "24px" })}>
            {categories.map((category) => (
              <div key={category}>
                <h3
                  className={css({
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    color: "gray.500",
                    mb: "8px",
                    letterSpacing: "0.5px",
                  })}
                >
                  {category}
                </h3>
                <div className={css({ spaceY: "4px" })}>
                  {examples
                    .filter((ex) => ex.category === category)
                    .map((example) => (
                      <button
                        key={example.id}
                        onClick={() => setSelectedExample(example.id)}
                        className={css({
                          w: "100%",
                          textAlign: "left",
                          px: "12px",
                          py: "8px",
                          rounded: "6px",
                          fontSize: "14px",
                          fontWeight:
                            selectedExample === example.id ? "600" : "400",
                          color:
                            selectedExample === example.id
                              ? "blue.600"
                              : "gray.700",
                          bg:
                            selectedExample === example.id
                              ? "blue.50"
                              : "transparent",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          _hover: {
                            bg:
                              selectedExample === example.id
                                ? "blue.100"
                                : "gray.50",
                          },
                        })}
                      >
                        {example.name}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main
          className={css({
            flex: isExercise ? "1" : "1",
            minW: "0",
            bg: "white",
            rounded: isExercise ? "0" : "12px",
            border: isExercise ? "none" : "1px solid",
            borderColor: "gray.200",
            overflow: "hidden",
            w: isExercise ? "100%" : "auto",
          })}
        >
          {!isExercise && (
            <div
              className={css({
                p: "24px",
                borderBottom: "1px solid",
                borderColor: "gray.200",
                bg: "gray.50",
              })}
            >
              <div>
                <div>
                  <h2
                    className={css({
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "gray.900",
                      mb: "4px",
                    })}
                  >
                    {currentExample?.name}
                  </h2>
                  <p
                    className={css({
                      fontSize: "14px",
                      color: "gray.600",
                    })}
                  >
                    {currentExample?.category}
                  </p>
                </div>
                {isExercise && (
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className={css({
                      px: "16px",
                      py: "8px",
                      bg: "blue.500",
                      color: "white",
                      rounded: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      _hover: { bg: "blue.600" },
                    })}
                  >
                    전체 화면
                  </button>
                )}
              </div>
            </div>
          )}
          {isExercise && (
            <div
              className={css({
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: "100",
              })}
            >
              <button
                onClick={() => setIsFullscreen(true)}
                className={css({
                  px: "16px",
                  py: "8px",
                  bg: "blue.500",
                  color: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  _hover: { bg: "blue.600" },
                  boxShadow: "md",
                })}
              >
                전체 화면 모드
              </button>
            </div>
          )}
          <div className={css({ p: isExercise ? "0" : "0" })}>
            <CurrentComponent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
