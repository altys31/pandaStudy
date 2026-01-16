import { cq } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export const ContainerQueries = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        PandaCSS Container Queries Demo
      </h1>

      {/* Container Queries 소개 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          Container Queries란?
        </h2>
        <p className={css({ mb: "16px", color: "#666", lineHeight: "1.6" })}>
          Container Queries는 <strong>미디어 쿼리</strong>와 달리, 화면 크기가
          아닌 <strong>컨테이너의 크기</strong>에 따라 스타일을 조정할 수
          있습니다.
          <br />
          이를 통해 컴포넌트가 어디에 위치하든 상관없이 자신의 컨테이너 크기에
          맞춰 반응형으로 동작할 수 있습니다.
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
          <strong>차이점:</strong>
          <ul className={css({ mt: "8px", ml: "20px", listStyle: "disc" })}>
            <li>
              <strong>미디어 쿼리:</strong> 화면(viewport) 크기에 반응
            </li>
            <li>
              <strong>Container Queries:</strong> 부모 컨테이너 크기에 반응
            </li>
          </ul>
        </div>
      </section>

      {/* 기본 Container Query 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 기본 Container Query
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>cq()</code> 패턴으로 컨테이너를 설정하고,{" "}
          <code>@container</code> 조건을 사용하여 반응형 스타일을 적용합니다.
        </p>

        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            컨테이너 크기에 따라 폰트 크기 변경
          </h3>
          <div
            className={css({
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            })}
          >
            {/* 작은 컨테이너 */}
            <div
              className={css({
                ...cq.raw({ type: "inline-size" }),
                w: "200px",
                p: "16px",
                bg: "gray.100",
                rounded: "8px",
                border: "2px solid",
                borderColor: "gray.300",
              })}
            >
              <div
                className={css({
                  fontSize: "14px",
                  "@container (min-width: 300px)": {
                    fontSize: "18px",
                  },
                  "@container (min-width: 400px)": {
                    fontSize: "24px",
                  },
                  fontWeight: "600",
                  color: "gray.800",
                })}
              >
                작은 컨테이너 (200px)
              </div>
            </div>

            {/* 중간 컨테이너 */}
            <div
              className={css({
                ...cq.raw({ type: "inline-size" }),
                w: "350px",
                p: "16px",
                bg: "blue.100",
                rounded: "8px",
                border: "2px solid",
                borderColor: "blue.300",
              })}
            >
              <div
                className={css({
                  fontSize: "14px",
                  "@container (min-width: 300px)": {
                    fontSize: "18px",
                  },
                  "@container (min-width: 400px)": {
                    fontSize: "24px",
                  },
                  fontWeight: "600",
                  color: "blue.800",
                })}
              >
                중간 컨테이너 (350px)
              </div>
            </div>

            {/* 큰 컨테이너 */}
            <div
              className={css({
                ...cq.raw({ type: "inline-size" }),
                w: "500px",
                p: "16px",
                bg: "green.100",
                rounded: "8px",
                border: "2px solid",
                borderColor: "green.300",
              })}
            >
              <div
                className={css({
                  fontSize: "14px",
                  "@container (min-width: 300px)": {
                    fontSize: "18px",
                  },
                  "@container (min-width: 400px)": {
                    fontSize: "24px",
                  },
                  fontWeight: "600",
                  color: "green.800",
                })}
              >
                큰 컨테이너 (500px)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 레이아웃 변경 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 레이아웃 변경 (Flex → Grid)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          컨테이너 크기에 따라 레이아웃을 완전히 변경할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "16px", flexWrap: "wrap" })}
        >
          {/* 작은 컨테이너 - 세로 배치 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "250px",
              p: "16px",
              bg: "purple.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "purple.200",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                "@container (min-width: 400px)": {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                },
              })}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    p: "12px",
                    bg: "purple.200",
                    rounded: "6px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "purple.800",
                  })}
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* 큰 컨테이너 - 그리드 배치 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "450px",
              p: "16px",
              bg: "orange.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "orange.200",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                "@container (min-width: 400px)": {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                },
              })}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    p: "12px",
                    bg: "orange.200",
                    rounded: "6px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "orange.800",
                  })}
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 카드 컴포넌트 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. 카드 컴포넌트 (실전 예제)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          같은 카드 컴포넌트가 컨테이너 크기에 따라 다른 레이아웃을 보여줍니다.
        </p>

        <div
          className={css({ display: "flex", gap: "16px", flexWrap: "wrap" })}
        >
          {/* 작은 카드 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "280px",
              p: "16px",
              bg: "white",
              rounded: "12px",
              border: "1px solid",
              borderColor: "gray.200",
              boxShadow: "sm",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                "@container (min-width: 400px)": {
                  flexDirection: "row",
                },
              })}
            >
              <div
                className={css({
                  w: "100%",
                  h: "120px",
                  bg: "gradient-to-br",
                  bgGradient: "from-blue.400 to-purple.500",
                  rounded: "8px",
                  "@container (min-width: 400px)": {
                    w: "120px",
                    flexShrink: "0",
                  },
                })}
              />
              <div className={css({ flex: "1" })}>
                <h3
                  className={css({
                    fontSize: "16px",
                    fontWeight: "600",
                    mb: "4px",
                    "@container (min-width: 400px)": {
                      fontSize: "20px",
                    },
                  })}
                >
                  카드 제목
                </h3>
                <p
                  className={css({
                    fontSize: "12px",
                    color: "gray.600",
                    "@container (min-width: 400px)": {
                      fontSize: "14px",
                    },
                  })}
                >
                  컨테이너 크기에 따라 레이아웃이 변경됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 큰 카드 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "450px",
              p: "16px",
              bg: "white",
              rounded: "12px",
              border: "1px solid",
              borderColor: "gray.200",
              boxShadow: "sm",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                "@container (min-width: 400px)": {
                  flexDirection: "row",
                },
              })}
            >
              <div
                className={css({
                  w: "100%",
                  h: "120px",
                  bg: "gradient-to-br",
                  bgGradient: "from-green.400 to-teal.500",
                  rounded: "8px",
                  "@container (min-width: 400px)": {
                    w: "120px",
                    flexShrink: "0",
                  },
                })}
              />
              <div className={css({ flex: "1" })}>
                <h3
                  className={css({
                    fontSize: "16px",
                    fontWeight: "600",
                    mb: "4px",
                    "@container (min-width: 400px)": {
                      fontSize: "20px",
                    },
                  })}
                >
                  카드 제목
                </h3>
                <p
                  className={css({
                    fontSize: "12px",
                    color: "gray.600",
                    "@container (min-width: 400px)": {
                      fontSize: "14px",
                    },
                  })}
                >
                  컨테이너 크기에 따라 레이아웃이 변경됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Named Container 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. Named Container (이름이 있는 컨테이너)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          여러 컨테이너가 있을 때, 특정 컨테이너를 지정하여 쿼리할 수 있습니다.
        </p>

        <div
          className={css({ display: "flex", gap: "16px", flexWrap: "wrap" })}
        >
          <div
            className={css({
              ...cq.raw({ type: "inline-size", name: "sidebar" }),
              w: "300px",
              p: "16px",
              bg: "pink.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "pink.200",
            })}
          >
            <div
              className={css({
                fontSize: "14px",
                fontWeight: "600",
                mb: "8px",
                color: "pink.800",
              })}
            >
              Sidebar Container
            </div>
            <div
              className={css({
                p: "12px",
                bg: "pink.100",
                rounded: "6px",
                fontSize: "12px",
                "@container sidebar (min-width: 250px)": {
                  fontSize: "16px",
                  bg: "pink.200",
                },
              })}
            >
              이 텍스트는 sidebar 컨테이너의 크기에 반응합니다.
            </div>
          </div>

          <div
            className={css({
              ...cq.raw({ type: "inline-size", name: "content" }),
              w: "400px",
              p: "16px",
              bg: "teal.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "teal.200",
            })}
          >
            <div
              className={css({
                fontSize: "14px",
                fontWeight: "600",
                mb: "8px",
                color: "teal.800",
              })}
            >
              Content Container
            </div>
            <div
              className={css({
                p: "12px",
                bg: "teal.100",
                rounded: "6px",
                fontSize: "12px",
                "@container content (min-width: 350px)": {
                  fontSize: "16px",
                  bg: "teal.200",
                },
              })}
            >
              이 텍스트는 content 컨테이너의 크기에 반응합니다.
            </div>
          </div>
        </div>
      </section>

      {/* 반응형 그리드 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. 반응형 그리드 (Container Query)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          컨테이너 크기에 따라 그리드 열 개수가 자동으로 조정됩니다.
        </p>

        <div
          className={css({ display: "flex", gap: "16px", flexWrap: "wrap" })}
        >
          {/* 작은 컨테이너 - 1열 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "250px",
              p: "16px",
              bg: "indigo.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "indigo.200",
            })}
          >
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "8px",
                "@container (min-width: 300px)": {
                  gridTemplateColumns: "repeat(2, 1fr)",
                },
                "@container (min-width: 500px)": {
                  gridTemplateColumns: "repeat(3, 1fr)",
                },
              })}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    p: "12px",
                    bg: "indigo.200",
                    rounded: "6px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "indigo.800",
                  })}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* 큰 컨테이너 - 3열 */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "550px",
              p: "16px",
              bg: "cyan.50",
              rounded: "12px",
              border: "2px solid",
              borderColor: "cyan.200",
            })}
          >
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "8px",
                "@container (min-width: 300px)": {
                  gridTemplateColumns: "repeat(2, 1fr)",
                },
                "@container (min-width: 500px)": {
                  gridTemplateColumns: "repeat(3, 1fr)",
                },
              })}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={css({
                    p: "12px",
                    bg: "cyan.200",
                    rounded: "6px",
                    textAlign: "center",
                    fontWeight: "600",
                    color: "cyan.800",
                  })}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 미디어 쿼리 vs Container Query 비교 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. 미디어 쿼리 vs Container Query 비교
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          같은 컴포넌트를 사이드바와 메인 콘텐츠 영역에 배치했을 때의 차이를
          확인해보세요.
        </p>

        <div className={css({ display: "flex", gap: "16px" })}>
          {/* 사이드바 (좁은 영역) */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              w: "200px",
              p: "16px",
              bg: "gray.100",
              rounded: "8px",
            })}
          >
            <div
              className={css({
                fontSize: "12px",
                fontWeight: "600",
                mb: "8px",
                color: "gray.700",
              })}
            >
              사이드바 (200px)
            </div>
            <div
              className={css({
                p: "12px",
                bg: "white",
                rounded: "6px",
                fontSize: "10px",
                "@container (min-width: 300px)": {
                  fontSize: "14px",
                },
                "@container (min-width: 500px)": {
                  fontSize: "18px",
                },
              })}
            >
              Container Query 사용
              <br />
              (컨테이너 크기에 반응)
            </div>
          </div>

          {/* 메인 콘텐츠 (넓은 영역) */}
          <div
            className={css({
              ...cq.raw({ type: "inline-size" }),
              flex: "1",
              p: "16px",
              bg: "blue.100",
              rounded: "8px",
            })}
          >
            <div
              className={css({
                fontSize: "12px",
                fontWeight: "600",
                mb: "8px",
                color: "blue.700",
              })}
            >
              메인 콘텐츠 (넓은 영역)
            </div>
            <div
              className={css({
                p: "12px",
                bg: "white",
                rounded: "6px",
                fontSize: "10px",
                "@container (min-width: 300px)": {
                  fontSize: "14px",
                },
                "@container (min-width: 500px)": {
                  fontSize: "18px",
                },
              })}
            >
              Container Query 사용
              <br />
              (컨테이너 크기에 반응)
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
              <strong>container-type:</strong> <code>"inline-size"</code>{" "}
              (기본값)는 너비만, <code>"size"</code>는 너비와 높이 모두를
              측정합니다.
            </li>
            <li>
              <strong>@container 조건:</strong> 미디어 쿼리와 유사하지만
              컨테이너 크기를 기준으로 합니다.
            </li>
            <li>
              <strong>Named Container:</strong> 여러 컨테이너가 있을 때 특정
              컨테이너를 지정하여 쿼리할 수 있습니다.
            </li>
            <li>
              <strong>브라우저 지원:</strong> 최신 브라우저에서 지원됩니다.
              (Chrome 105+, Safari 16+, Firefox 110+)
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
