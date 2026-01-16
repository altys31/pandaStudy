import { definePreset } from "@pandacss/dev";

export const pandaPreset = definePreset({
    name : "panda-preset",
    theme: {
        extend: {
            tokens: {
                // Custom Core Tokens 예제
                colors: {
                  bg: {
                    default: {
                      default: {value : "#F1F1F1"},
                      dark: {value : "#0A0A0A"}
                    },
                    card: {
                      "default":{
                        value: "#FFFFFF"
                      },
                      "dark": {
                        value: "#272727"
                      }
                    },
                  },
                  fg: {
                    default: {
                      default: {value : "#262626"},
                      dark: {value : "#FFFFFF"}
                    },
                    subtle: {
                      default: {value : "#525252"},
                      dark: {value : "#F5F5F5"}
                    }
                  },
                  border: {
                    default: {
                      value: "#EDEDED"
                    },
                    dark: {
                      value: "#424242"
                    }
                  },
                  brand: {
                    50: { value: "#f0f9ff" },
                    100: { value: "#e0f2fe" },
                    200: { value: "#bae6fd" },
                    300: { value: "#7dd3fc" },
                    400: { value: "#38bdf8" },
                    500: { value: "#0ea5e9" },
                    600: { value: "#0284c7" },
                    700: { value: "#0369a1" },
                    800: { value: "#075985" },
                    900: { value: "#0c4a6e" },
                  },
                },
                spacing: {
                  "container-sm": { value: "640px" },
                  "container-md": { value: "768px" },
                  "container-lg": { value: "1024px" },
                  "container-xl": { value: "1280px" },
                },
                fontSizes: {
                  "display-lg": { value: "72px" },
                  "display-md": { value: "60px" },
                  "display-sm": { value: "48px" },
                },
                shadows: {
                  "brand-sm": {
                    value: "0 2px 4px rgba(14, 165, 233, 0.1)",
                  },
                  "brand-md": {
                    value: "0 4px 6px rgba(14, 165, 233, 0.15)",
                  },
                },
              },
              semanticTokens: {
                colors: {
                  // 배경색 시맨틱 토큰
                  "bg.primary": {
                    value: { base: "{colors.white}", _dark: "{colors.gray.900}" },
                  },
                  "bg.secondary": {
                    value: { base: "{colors.gray.50}", _dark: "{colors.gray.800}" },
                  },
                  "bg.tertiary": {
                    value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
                  },
                  // 텍스트 색상 시맨틱 토큰
                  "text.primary": {
                    value: { base: "{colors.gray.900}", _dark: "{colors.white}" },
                  },
                  "text.secondary": {
                    value: { base: "{colors.gray.600}", _dark: "{colors.gray.300}" },
                  },
                  "text.muted": {
                    value: { base: "{colors.gray.400}", _dark: "{colors.gray.500}" },
                  },
                  // 브랜드 색상 시맨틱 토큰
                  "brand.primary": {
                    value: "{colors.brand.500}",
                  },
                  "brand.hover": {
                    value: "{colors.brand.600}",
                  },
                  "brand.light": {
                    value: "{colors.brand.100}",
                  },
                  // 상태 색상 시맨틱 토큰
                  "status.success": {
                    value: "{colors.green.500}",
                  },
                  "status.error": {
                    value: "{colors.red.500}",
                  },
                  "status.warning": {
                    value: "{colors.yellow.500}",
                  },
                  "status.info": {
                    value: "{colors.blue.500}",
                  },
                },
                spacing: {
                  // 레이아웃 간격 시맨틱 토큰
                  "layout.sm": {
                    value: "{spacing.4}",
                  },
                  "layout.md": {
                    value: "{spacing.8}",
                  },
                  "layout.lg": {
                    value: "{spacing.16}",
                  },
                },
              },
              textStyles: {
                display: {
                  large: {
                    value: {
                      fontSize: '56px',
                      lineHeight: '1.2',
                    }
                  },
                  medium: {
                    value: {
                      fontSize: '44px',
                      lineHeight: '1.2',
                      letterSpacing: '-0.01em',
                    }
                  },
                  small: {
                    value: {
                      fontSize: '36px',
                      lineHeight: '1.2',
                      letterSpacing: '-0.02em',
                    }
                  }
                },
                body: {
                  XLarge: {
                    value: {
                      fontSize: '32px',
                      lineHeight: '1.25',
                      letterSpacing: '-0.02em',
                    }
                  },
                  Large: {
                    value: {
                      fontSize: '24px',
                      lineHeight: '1.25',
                      letterSpacing: '-0.02em',
                    }
                  },
                  medium: {
                    value: {
                      fontSize: '20px',
                      lineHeight: '1.4',
                      letterSpacing: '-0.03em',
                    }
                  },
                  small: {
                    value: {
                      fontSize: '16px',
                      lineHeight: '1.5',
                      letterSpacing: '-0.03em',
                    }
                  }
                }
                },
              layerStyles:{
                surface: {
                  outline: {
                    value: {
                      borderColor: "gray.200",
                      borderWidth: "3px",
                    }
                  },
                  raised: {
                    value: {
                      boxShadow: "0px 12px 25px 0px #0000002B",
                      border: "1px solid #F5F5F5",
                      borderColor: "neutral.100",
                    }
                  },
                  subtle: {
                    value: {
                      background: "neutral.100",
                    }
                  },
                },
                control: {
                  selected: {
                    value: {
                      background : "blue.100",
                      borderColor: "blue.500",
                      borderWidth: "4px",
                    }
                  },
                  disabled: {
                    value: {
                      background: "gray.300",
                    }
                  },
                  solid: {
                    value: {
                      background: "blue.600",
                    }
                  },
                }
              },
        },
    }
});