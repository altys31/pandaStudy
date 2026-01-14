import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

export const CreatingScrollablePattern = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        Creating Scrollable Pattern
      </h1>

      {/* 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Scrollable Pattern이란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Scrollable Pattern은 <strong>스크롤 가능한 컨테이너</strong>를 만드는
          패턴입니다.
          <br />
          <code>overflow</code>, <code>scroll-behavior</code>,{" "}
          <code>scroll-snap</code> 등을 활용하여 다양한 스크롤 경험을 제공할 수
          있습니다.
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
            <li>가로/세로 스크롤</li>
            <li>스크롤바 스타일링</li>
            <li>스크롤 스냅 (Scroll Snap)</li>
            <li>부드러운 스크롤</li>
            <li>스크롤 인디케이터</li>
          </ul>
        </div>
      </section>

      {/* 기본 세로 스크롤 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 기본 세로 스크롤
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>overflow-y: auto</code> 또는 <code>overflow-y: scroll</code>을
          사용하여 세로 스크롤을 만듭니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            overflow-y: auto (필요할 때만 스크롤바 표시)
          </h3>
          <div
            className={css({
              h: "200px",
              overflowY: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
            })}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "12px",
                  mb: "8px",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  color: "gray.700",
                })}
              >
                Item {i + 1} - 스크롤 가능한 콘텐츠입니다.
              </div>
            ))}
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            overflow-y: scroll (항상 스크롤바 표시)
          </h3>
          <div
            className={css({
              h: "200px",
              overflowY: "scroll",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
            })}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "12px",
                  mb: "8px",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  color: "gray.700",
                })}
              >
                Item {i + 1} - 항상 스크롤바가 표시됩니다.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 가로 스크롤 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 가로 스크롤
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>overflow-x: auto</code>와 <code>flex</code>를 함께 사용하여 가로
          스크롤을 만듭니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            가로 스크롤 카드
          </h3>
          <div
            className={css({
              overflowX: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
            })}
          >
            <div
              className={flex({
                gap: "16px",
                wrap: "nowrap",
              })}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    flexShrink: "0",
                    w: "200px",
                    h: "150px",
                    bg: "blue.500",
                    rounded: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "18px",
                  })}
                >
                  Card {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            가로 스크롤 이미지 갤러리
          </h3>
          <div
            className={css({
              overflowX: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
            })}
          >
            <div
              className={flex({
                gap: "12px",
                wrap: "nowrap",
              })}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    flexShrink: "0",
                    w: "120px",
                    h: "120px",
                    bg: "gradient-to-br",
                    bgGradient: `from-${
                      [
                        "blue",
                        "green",
                        "purple",
                        "orange",
                        "pink",
                        "teal",
                        "cyan",
                        "indigo",
                      ][i % 8]
                    }.400 to-${
                      [
                        "purple",
                        "teal",
                        "pink",
                        "red",
                        "blue",
                        "green",
                        "orange",
                        "purple",
                      ][i % 8]
                    }.600`,
                    rounded: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                  })}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 스크롤바 스타일링 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 스크롤바 스타일링
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          CSS를 사용하여 스크롤바의 모양을 커스터마이징할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            커스텀 스크롤바 (Webkit)
          </h3>
          <div
            className={css({
              h: "200px",
              overflowY: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              // Webkit 스크롤바 스타일링
              "&::-webkit-scrollbar": {
                width: "12px",
              },
              "&::-webkit-scrollbar-track": {
                background: "gray.200",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "blue.500",
                borderRadius: "6px",
                _hover: {
                  background: "blue.600",
                },
              },
            })}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "12px",
                  mb: "8px",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  color: "gray.700",
                })}
              >
                Item {i + 1} - 커스텀 스크롤바가 적용된 콘텐츠입니다.
              </div>
            ))}
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            얇은 스크롤바
          </h3>
          <div
            className={css({
              h: "200px",
              overflowY: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray.400",
                borderRadius: "3px",
                _hover: {
                  background: "gray.500",
                },
              },
            })}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "12px",
                  mb: "8px",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  color: "gray.700",
                })}
              >
                Item {i + 1} - 얇은 스크롤바입니다.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스크롤 스냅 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 스크롤 스냅 (Scroll Snap)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>scroll-snap-type</code>와 <code>scroll-snap-align</code>을
          사용하여 스크롤 시 자동으로 정렬됩니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            가로 스크롤 스냅
          </h3>
          <div
            className={css({
              overflowX: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            })}
          >
            <div
              className={flex({
                gap: "16px",
                wrap: "nowrap",
              })}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    flexShrink: "0",
                    w: "300px",
                    h: "200px",
                    bg: "blue.500",
                    rounded: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "24px",
                    scrollSnapAlign: "start",
                  })}
                >
                  Slide {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            세로 스크롤 스냅
          </h3>
          <div
            className={css({
              h: "300px",
              overflowY: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              scrollSnapType: "y mandatory",
              scrollBehavior: "smooth",
            })}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  h: "250px",
                  mb: "16px",
                  bg: "green.500",
                  rounded: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "24px",
                  scrollSnapAlign: "start",
                })}
              >
                Section {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 부드러운 스크롤 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 부드러운 스크롤 (Smooth Scroll)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>scroll-behavior: smooth</code>를 사용하여 부드러운 스크롤 효과를
          적용할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            부드러운 스크롤 컨테이너
          </h3>
          <div
            className={css({
              h: "200px",
              overflowY: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              scrollBehavior: "smooth",
            })}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                id={`item-${i}`}
                className={css({
                  p: "12px",
                  mb: "8px",
                  bg: "white",
                  rounded: "6px",
                  fontSize: "14px",
                  color: "gray.700",
                })}
              >
                Item {i + 1} - 부드러운 스크롤이 적용되었습니다.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 양방향 스크롤 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 양방향 스크롤
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>overflow: auto</code>를 사용하여 가로와 세로 모두 스크롤
          가능하게 만들 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            가로 + 세로 스크롤
          </h3>
          <div
            className={css({
              w: "400px",
              h: "300px",
              overflow: "auto",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
            })}
          >
            <div
              className={css({
                w: "600px",
                minH: "500px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              })}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    p: "16px",
                    bg: "purple.500",
                    rounded: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "14px",
                    minH: "100px",
                  })}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 실전 예제 - 대시보드 사이드바 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 실전 예제 - 스크롤 가능한 사이드바
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          사이드바에 스크롤을 적용하여 긴 메뉴를 관리할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            대시보드 사이드바
          </h3>
          <div
            className={flex({
              gap: "16px",
              align: "flex-start",
            })}
          >
            <div
              className={css({
                w: "250px",
                h: "400px",
                bg: "white",
                rounded: "12px",
                border: "1px solid",
                borderColor: "gray.200",
                display: "flex",
                flexDirection: "column",
              })}
            >
              <div
                className={css({
                  p: "20px",
                  borderBottom: "1px solid",
                  borderColor: "gray.200",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "gray.900",
                })}
              >
                Menu
              </div>
              <div
                className={css({
                  flex: "1",
                  overflowY: "auto",
                  p: "12px",
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "gray.300",
                    borderRadius: "3px",
                  },
                })}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={css({
                      p: "12px",
                      mb: "4px",
                      rounded: "6px",
                      fontSize: "14px",
                      color: "gray.700",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      _hover: {
                        bg: "gray.100",
                        color: "gray.900",
                      },
                    })}
                  >
                    Menu Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={css({
                flex: "1",
                p: "24px",
                bg: "gray.50",
                rounded: "12px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <h4
                className={css({
                  fontSize: "18px",
                  fontWeight: "600",
                  mb: "12px",
                  color: "gray.900",
                })}
              >
                Main Content
              </h4>
              <p className={css({ fontSize: "14px", color: "gray.600" })}>
                사이드바는 스크롤 가능하며, 메인 콘텐츠는 고정되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 실전 예제 - 탭 메뉴 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          8. 실전 예제 - 스크롤 가능한 탭 메뉴
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          많은 탭이 있을 때 가로 스크롤을 사용할 수 있습니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            가로 스크롤 탭
          </h3>
          <div
            className={css({
              overflowX: "auto",
              p: "8px",
              bg: "gray.100",
              rounded: "8px",
              border: "1px solid",
              borderColor: "gray.300",
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray.400",
                borderRadius: "3px",
              },
            })}
          >
            <div
              className={flex({
                gap: "8px",
                wrap: "nowrap",
              })}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <button
                  key={i}
                  className={css({
                    flexShrink: "0",
                    px: "20px",
                    py: "10px",
                    bg: i === 0 ? "blue.500" : "white",
                    color: i === 0 ? "white" : "gray.700",
                    rounded: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: i === 0 ? "blue.500" : "gray.300",
                    transition: "all 0.2s",
                    _hover: {
                      bg: i === 0 ? "blue.600" : "gray.50",
                    },
                  })}
                >
                  Tab {i + 1}
                </button>
              ))}
            </div>
          </div>
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
              <strong>overflow-y: auto:</strong> 필요할 때만 스크롤바를
              표시합니다.
            </li>
            <li>
              <strong>overflow-y: scroll:</strong> 항상 스크롤바를 표시합니다.
            </li>
            <li>
              <strong>scroll-behavior: smooth:</strong> 부드러운 스크롤
              애니메이션을 적용합니다.
            </li>
            <li>
              <strong>scroll-snap-type:</strong> 스크롤 시 자동으로 정렬되는
              지점을 설정합니다.
            </li>
            <li>
              <strong>스크롤바 스타일링:</strong> Webkit 브라우저에서{" "}
              <code>::-webkit-scrollbar</code>를 사용하여 커스터마이징할 수
              있습니다.
            </li>
            <li>
              <strong>flex-shrink: 0:</strong> 가로 스크롤 시 아이템이 축소되지
              않도록 설정합니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
