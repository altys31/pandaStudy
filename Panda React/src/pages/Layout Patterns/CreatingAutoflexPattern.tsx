import { flex } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export const CreatingAutoflexPattern = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Creating Auto Flex Pattern
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Auto Flex Pattern이란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Auto Flex Pattern은 <strong>자동으로 반응형</strong>으로 동작하는 flex
          레이아웃을 만드는 패턴입니다.
          <br />
          <code>flex-wrap</code>, <code>flex-grow</code>,{" "}
          <code>flex-shrink</code> 등을 활용하여 컨테이너 크기에 따라 자동으로
          레이아웃이 조정됩니다.
        </p>
        <div
          className={css({
            p: "16px",
            bg: "blue.50",
            rounded: "8px",
            border: "1px solid",
            borderColor: "blue.200",
            textAlign: "left",
          })}
        >
          <strong>주요 특징:</strong>
          <ul className={css({ mt: "8px", ml: "20px", listStyle: "disc" })}>
            <li>자동 줄바꿈 (flex-wrap)</li>
            <li>자동 크기 조정 (flex-grow, flex-shrink)</li>
            <li>자동 간격 조정</li>
            <li>반응형 레이아웃</li>
          </ul>
        </div>
      </section>

      {/* 기본 Auto Flex - wrap 사용 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 자동 줄바꿈 (Auto Wrap)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>wrap</code> 속성을 사용하면 공간이 부족할 때 자동으로 다음 줄로
          넘어갑니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            flex-wrap: wrap (자동 줄바꿈)
          </h3>
          <div
            className={flex({
              wrap: "wrap",
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  w: "150px",
                  h: "80px",
                  bg: "blue.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            flex-wrap: nowrap (줄바꿈 없음)
          </h3>
          <div
            className={flex({
              wrap: "nowrap",
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              overflow: "auto",
            })}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  w: "150px",
                  flexShrink: "0",
                  h: "80px",
                  bg: "red.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자동 크기 조정 - flex-grow */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 자동 크기 조정 (Auto Sizing)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>grow</code> 속성을 사용하면 남은 공간을 자동으로 채웁니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            flex-grow: 1 (균등 분배)
          </h3>
          <div
            className={flex({
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  ...flex.raw({ grow: 1 }),
                  h: "80px",
                  bg: "green.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                Grow {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            flex-grow: 2 (2배 더 크게)
          </h3>
          <div
            className={flex({
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            <div
              className={css({
                ...flex.raw({ grow: 1 }),
                h: "80px",
                bg: "purple.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Grow 1
            </div>
            <div
              className={css({
                ...flex.raw({ grow: 2 }),
                h: "80px",
                bg: "orange.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Grow 2 (2배)
            </div>
            <div
              className={css({
                ...flex.raw({ grow: 1 }),
                h: "80px",
                bg: "pink.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Grow 1
            </div>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            flex-shrink: 0 (축소 방지)
          </h3>
          <div
            className={flex({
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            <div
              className={css({
                ...flex.raw({ shrink: 0 }),
                w: "200px",
                h: "80px",
                bg: "teal.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              고정 크기 (200px)
            </div>
            <div
              className={css({
                ...flex.raw({ grow: 1 }),
                h: "80px",
                bg: "cyan.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              자동 크기 (남은 공간)
            </div>
          </div>
        </div>
      </section>

      {/* 자동 간격 조정 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 자동 간격 조정 (Auto Gap)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>gap</code> 속성과 함께 사용하면 자동으로 일정한 간격을
          유지합니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            자동 간격 (gap: "auto" 또는 고정값)
          </h3>
          <div
            className={flex({
              wrap: "wrap",
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  w: {
                    base: "100%",
                    md: "calc(50% - 8px)",
                    lg: "calc(33.333% - 11px)",
                  },
                  h: "80px",
                  bg: "indigo.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 반응형 Auto Flex */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 반응형 Auto Flex
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          화면 크기에 따라 자동으로 레이아웃이 변경됩니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            반응형 방향 변경
          </h3>
          <div
            className={flex({
              direction: { base: "column", md: "row" },
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  ...flex.raw({ grow: 1 }),
                  h: "100px",
                  bg: "blue.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            반응형 정렬 변경
          </h3>
          <div
            className={flex({
              align: { base: "flex-start", md: "center" },
              justify: { base: "flex-start", md: "space-between" },
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              minH: "150px",
            })}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  w: "100px",
                  h: "80px",
                  bg: "green.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                })}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실전 예제 - 카드 그리드 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 실전 예제 - 자동 카드 그리드
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Auto Flex를 사용하여 자동으로 반응형 카드 그리드를 만들 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            자동 카드 그리드 (min-width 기반)
          </h3>
          <div
            className={flex({
              wrap: "wrap",
              gap: "20px",
              p: "20px",
              bg: "gray.50",
              rounded: "12px",
            })}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  ...flex.raw({ grow: 1, shrink: 1 }),
                  minW: {
                    base: "100%",
                    sm: "calc(50% - 10px)",
                    md: "calc(33.333% - 14px)",
                    lg: "calc(25% - 15px)",
                  },
                  maxW: {
                    base: "100%",
                    sm: "calc(50% - 10px)",
                    md: "calc(33.333% - 14px)",
                    lg: "calc(25% - 15px)",
                  },
                  p: "20px",
                  bg: "white",
                  rounded: "12px",
                  border: "1px solid",
                  borderColor: "gray.200",
                  boxShadow: "sm",
                })}
              >
                <div
                  className={css({
                    w: "100%",
                    h: "120px",
                    bg: "gradient-to-br",
                    bgGradient: "from-blue.400 to-purple.500",
                    rounded: "8px",
                    mb: "12px",
                  })}
                />
                <h4
                  className={css({
                    fontSize: "18px",
                    fontWeight: "600",
                    mb: "8px",
                    color: "gray.900",
                  })}
                >
                  Card {i + 1}
                </h4>
                <p
                  className={css({
                    fontSize: "14px",
                    color: "gray.600",
                    lineHeight: "1.5",
                  })}
                >
                  자동으로 반응형으로 동작하는 카드입니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실전 예제 - 네비게이션 바 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 실전 예제 - 자동 네비게이션 바
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Auto Flex를 사용하여 반응형 네비게이션 바를 만들 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            반응형 네비게이션 바
          </h3>
          <nav
            className={flex({
              direction: { base: "column", md: "row" },
              align: { base: "stretch", md: "center" },
              justify: { base: "flex-start", md: "space-between" },
              gap: "16px",
              p: "16px",
              bg: "white",
              rounded: "12px",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <div
              className={css({
                fontSize: "20px",
                fontWeight: "bold",
                color: "gray.900",
              })}
            >
              Logo
            </div>
            <div
              className={flex({
                direction: { base: "column", md: "row" },
                gap: "12px",
                flex: { base: "1", md: "0" },
              })}
            >
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={css({
                    px: "16px",
                    py: "8px",
                    rounded: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "gray.700",
                    bg: "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    _hover: {
                      bg: "gray.100",
                      color: "gray.900",
                    },
                  })}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className={css({
                px: "20px",
                py: "10px",
                bg: "blue.500",
                color: "white",
                rounded: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                _hover: {
                  bg: "blue.600",
                },
              })}
            >
              Sign In
            </button>
          </nav>
        </div>
      </section>

      {/* 실전 예제 - 자동 폼 레이아웃 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 실전 예제 - 자동 폼 레이아웃
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Auto Flex를 사용하여 반응형 폼 레이아웃을 만들 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            반응형 폼 레이아웃
          </h3>
          <form
            className={css({
              p: "24px",
              bg: "white",
              rounded: "12px",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <div
              className={flex({
                direction: { base: "column", md: "row" },
                gap: "16px",
                mb: "16px",
              })}
            >
              <div
                className={css({
                  ...flex.raw({ grow: 1 }),
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                })}
              >
                <label
                  className={css({
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "gray.700",
                  })}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className={css({
                    px: "12px",
                    py: "10px",
                    border: "1px solid",
                    borderColor: "gray.300",
                    rounded: "6px",
                    fontSize: "14px",
                    _focus: {
                      outline: "2px solid",
                      outlineColor: "blue.500",
                      outlineOffset: "2px",
                    },
                  })}
                />
              </div>
              <div
                className={css({
                  ...flex.raw({ grow: 1 }),
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                })}
              >
                <label
                  className={css({
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "gray.700",
                  })}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className={css({
                    px: "12px",
                    py: "10px",
                    border: "1px solid",
                    borderColor: "gray.300",
                    rounded: "6px",
                    fontSize: "14px",
                    _focus: {
                      outline: "2px solid",
                      outlineColor: "blue.500",
                      outlineOffset: "2px",
                    },
                  })}
                />
              </div>
            </div>
            <div
              className={flex({
                justify: { base: "stretch", md: "flex-end" },
                gap: "12px",
              })}
            >
              <button
                type="button"
                className={css({
                  px: "20px",
                  py: "10px",
                  border: "1px solid",
                  borderColor: "gray.300",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  _hover: {
                    bg: "gray.50",
                  },
                })}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css({
                  px: "20px",
                  py: "10px",
                  bg: "blue.500",
                  color: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  _hover: {
                    bg: "blue.600",
                  },
                })}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 사용 팁 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          사용 팁
        </h2>
        <div
          className={css({
            p: "20px",
            bg: "yellow.50",
            rounded: "12px",
            border: "1px solid",
            borderColor: "yellow.200",
            textAlign: "left",
          })}
        >
          <ul className={css({ listStyle: "disc", ml: "20px", spaceY: "8px" })}>
            <li>
              <strong>flex-wrap: wrap:</strong> 공간이 부족할 때 자동으로 다음
              줄로 넘어갑니다.
            </li>
            <li>
              <strong>flex-grow:</strong> 남은 공간을 자동으로 채웁니다. 숫자가
              클수록 더 많은 공간을 차지합니다.
            </li>
            <li>
              <strong>flex-shrink:</strong> 공간이 부족할 때 축소 여부를
              결정합니다. 0으로 설정하면 축소되지 않습니다.
            </li>
            <li>
              <strong>gap:</strong> 자식 요소들 사이의 간격을 자동으로
              조정합니다.
            </li>
            <li>
              <strong>반응형:</strong> direction, align, justify 등에 객체를
              사용하여 화면 크기에 따라 자동으로 변경할 수 있습니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
