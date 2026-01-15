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
import { ConfigRecipes } from "./pages/ConfigRecipes/ConfigRecipes";
import { ConfigRecipeExcercise } from "./pages/ConfigRecipes/ConfigRecipeExcercise";
import { DesignTokens } from "./pages/Design Tokens/DesignTokens";
import { DesignTokensExcercise } from "./pages/Design Tokens/Excercise";
import { EmotionStyledMigration } from "./pages/Migration/EmotionStyledMigration";
import { ThemeExcercises } from "./pages/Theming/Excercises";

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
  {
    id: "config-recipes",
    name: "Config Recipes",
    category: "Config Recipes",
    component: ConfigRecipes,
  },
  {
    id: "config-recipes-excercise",
    name: "Excercise",
    category: "Config Recipes",
    component: ConfigRecipeExcercise,
  },
  {
    id: "design-tokens",
    name: "Design Tokens",
    category: "Design Tokens",
    component: DesignTokens,
  },
  {
    id: "design-tokens-excercise",
    name: "Excercise",
    category: "Design Tokens",
    component: DesignTokensExcercise,
  },
  {
    id: "migration-guide",
    name: "Migration Guide",
    category: "Migration",
    component: EmotionStyledMigration,
  },
  {
    id: "theme-excercises",
    name: "Excercises",
    category: "Theming",
    component: ThemeExcercises,
  },
];

function App() {
  const [selectedExample, setSelectedExample] = useState<string>("patterns");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const currentExample = examples.find((ex) => ex.id === selectedExample);
  const CurrentComponent = currentExample?.component || PatternsDemo;

  const categories = Array.from(new Set(examples.map((ex) => ex.category)));

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

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
          display: "block",
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
            <div className={hstack({ gap: "16px", alignItems: "center" })}>
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  w: "36px",
                  h: "36px",
                  rounded: "6px",
                  color: "gray.700",
                  transition: "all 0.2s",
                  _hover: {
                    bg: "gray.100",
                    color: "gray.900",
                  },
                })}
                aria-label="Toggle Sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isSidebarOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="6" />
                      <line x1="18" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="18" x2="6" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
              <h1
                className={css({
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "gray.900",
                })}
              >
                PandaCSS Examples
              </h1>
            </div>
            <div
              className={hstack({
                gap: "8px",
                flexWrap: "wrap",
              })}
            >
              <a
                href="https://github.com/altys31/pandaStudy"
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  w: "32px",
                  h: "32px",
                  rounded: "6px",
                  color: "gray.700",
                  transition: "all 0.2s",
                  _hover: {
                    bg: "gray.100",
                    color: "gray.900",
                  },
                })}
                aria-label="pandaStudy github Code"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
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
            w: isSidebarOpen ? "250px" : "0",
            flexShrink: "0",
            bg: "white",
            rounded: "12px",
            p: isSidebarOpen ? "20px" : "0",
            maxH: "85vh",
            position: "sticky",
            top: "100px",
            border: isSidebarOpen ? "1px solid" : "none",
            borderColor: "gray.200",
            overflowY: "auto",
            overflowX: "hidden",
            height: "fit-content",
            display: isSidebarOpen ? "block" : "none",
            transition: "all 0.3s ease-in-out",
            opacity: isSidebarOpen ? 1 : 0,
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
          <div className={css({ spaceY: "8px" })}>
            {categories.map((category) => {
              const isExpanded = expandedCategories.has(category);
              const categoryExamples = examples.filter(
                (ex) => ex.category === category
              );
              return (
                <div key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className={css({
                      w: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: "8px",
                      py: "8px",
                      rounded: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      color: "gray.700",
                      letterSpacing: "0.5px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      _hover: {
                        bg: "gray.50",
                      },
                    })}
                  >
                    <span>{category}</span>
                    <span
                      className={css({
                        fontSize: "16px",
                        transition: "transform 0.2s",
                        transform: isExpanded
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      })}
                    >
                      ▶
                    </span>
                  </button>
                  {isExpanded && (
                    <div
                      className={css({ spaceY: "4px", mt: "4px", ml: "8px" })}
                    >
                      {categoryExamples.map((example) => (
                        <button
                          key={example.id}
                          onClick={() => {
                            setSelectedExample(example.id);
                          }}
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
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main
          className={css({
            flex: "1",
            minW: "0",
            bg: "white",
            rounded: "12px",
            border: "1px solid",
            borderColor: "gray.200",
            overflow: "hidden",
            w: "auto",
          })}
        >
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
            </div>
          </div>
          <div className={css({ p: "0" })}>
            <CurrentComponent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
