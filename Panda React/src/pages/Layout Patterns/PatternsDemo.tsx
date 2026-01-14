import { hstack, vstack, circle } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export const PatternsDemo = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        PandaCSS Patterns Demo
      </h1>

      {/* HStack 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. HStack (Horizontal Stack)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          HStack는 자식 요소들을 <strong>가로로</strong> 배치하는 flex
          컨테이너입니다.
          <br />
          기본적으로 <code>display: flex</code>, <code>flexDirection: row</code>
          , <code>alignItems: center</code>가 적용되며, 기본 gap은 8px입니다.
        </p>

        {/* 기본 HStack */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            기본 HStack (gap: 8px)
          </h3>
          <div className={hstack()}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "blue.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "green.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "red.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* 커스텀 gap */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            커스텀 gap (gap: 24px)
          </h3>
          <div className={hstack({ gap: "24px" })}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "purple.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "orange.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "pink.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* justify 속성 사용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            justify 속성 (justify: "space-between")
          </h3>
          <div className={hstack({ justify: "space-between", w: "100%" })}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "teal.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "cyan.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "indigo.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* 추가 스타일 적용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            추가 스타일 (배경색, 패딩 등)
          </h3>
          <div
            className={hstack({
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "12px",
              justify: "center",
            })}
          >
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "blue.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "green.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "red.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>
      </section>

      {/* VStack 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. VStack (Vertical Stack)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          VStack는 자식 요소들을 <strong>세로로</strong> 배치하는 flex
          컨테이너입니다.
          <br />
          기본적으로 <code>display: flex</code>,{" "}
          <code>flexDirection: column</code>, <code>alignItems: center</code>가
          적용되며, 기본 gap은 8px입니다.
        </p>

        {/* 기본 VStack */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            기본 VStack (gap: 8px)
          </h3>
          <div className={vstack()}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "blue.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "green.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "red.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* 커스텀 gap */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            커스텀 gap (gap: 24px)
          </h3>
          <div className={vstack({ gap: "24px" })}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "purple.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "orange.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "pink.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* justify 속성 사용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            justify 속성 (justify: "space-around")
          </h3>
          <div className={vstack({ justify: "space-around", h: "300px" })}>
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "teal.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "cyan.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "80px",
                h: "80px",
                bg: "indigo.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>

        {/* 추가 스타일 적용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            추가 스타일 (배경색, 패딩 등)
          </h3>
          <div
            className={vstack({
              gap: "16px",
              p: "16px",
              bg: "gray.100",
              rounded: "12px",
              justify: "center",
            })}
          >
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "blue.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "green.500",
                rounded: "8px",
              })}
            />
            <div
              className={css({
                w: "60px",
                h: "60px",
                bg: "red.500",
                rounded: "8px",
              })}
            />
          </div>
        </div>
      </section>

      {/* Circle 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Circle
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          Circle는 완벽한 <strong>원형</strong> 요소를 만드는 패턴입니다.
          <br />
          <code>display: flex</code>, <code>alignItems: center</code>,{" "}
          <code>justifyContent: center</code>가 적용되며,{" "}
          <code>borderRadius: 9999px</code>로 완전한 원을 만듭니다.
          <br />
          <code>size</code> prop으로 width와 height를 동시에 설정할 수 있습니다.
        </p>

        {/* 기본 Circle */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            기본 Circle (size: 80px)
          </h3>
          <div className={hstack({ gap: "16px" })}>
            <div className={circle({ size: "80px", bg: "blue.500" })} />
            <div className={circle({ size: "80px", bg: "green.500" })} />
            <div className={circle({ size: "80px", bg: "red.500" })} />
          </div>
        </div>

        {/* 다양한 크기 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>다양한 크기</h3>
          <div className={hstack({ gap: "16px", alignItems: "flex-end" })}>
            <div className={circle({ size: "40px", bg: "purple.500" })} />
            <div className={circle({ size: "60px", bg: "orange.500" })} />
            <div className={circle({ size: "80px", bg: "pink.500" })} />
            <div className={circle({ size: "100px", bg: "teal.500" })} />
            <div className={circle({ size: "120px", bg: "cyan.500" })} />
          </div>
        </div>

        {/* 텍스트가 있는 Circle */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            텍스트가 있는 Circle
          </h3>
          <div className={hstack({ gap: "16px" })}>
            <div
              className={circle({
                size: "80px",
                bg: "blue.500",
                color: "white",
              })}
            >
              A
            </div>
            <div
              className={circle({
                size: "80px",
                bg: "green.500",
                color: "white",
              })}
            >
              B
            </div>
            <div
              className={circle({
                size: "80px",
                bg: "red.500",
                color: "white",
              })}
            >
              C
            </div>
          </div>
        </div>

        {/* 아이콘이나 이미지가 있는 Circle */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            아이콘이나 이미지가 있는 Circle
          </h3>
          <div className={hstack({ gap: "16px" })}>
            <div
              className={circle({
                size: "100px",
                bg: "gray.200",
                border: "2px solid",
                borderColor: "gray.400",
              })}
            >
              <div className={css({ fontSize: "32px" })}>👤</div>
            </div>
            <div
              className={circle({
                size: "100px",
                bg: "gray.200",
                border: "2px solid",
                borderColor: "gray.400",
              })}
            >
              <div className={css({ fontSize: "32px" })}>⭐</div>
            </div>
            <div
              className={circle({
                size: "100px",
                bg: "gray.200",
                border: "2px solid",
                borderColor: "gray.400",
              })}
            >
              <div className={css({ fontSize: "32px" })}>🎯</div>
            </div>
          </div>
        </div>

        {/* 추가 스타일 적용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            추가 스타일 (그림자, 호버 효과 등)
          </h3>
          <div className={hstack({ gap: "24px" })}>
            <div
              className={circle({
                size: "100px",
                bg: "blue.500",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                _hover: { bg: "blue.600", transform: "scale(1.1)" },
                transition: "all 0.2s",
              })}
            />
            <div
              className={circle({
                size: "100px",
                bg: "green.500",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                _hover: { bg: "green.600", transform: "scale(1.1)" },
                transition: "all 0.2s",
              })}
            />
            <div
              className={circle({
                size: "100px",
                bg: "red.500",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                _hover: { bg: "red.600", transform: "scale(1.1)" },
                transition: "all 0.2s",
              })}
            />
          </div>
        </div>
      </section>

      {/* 조합 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. 조합 예제
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          HStack, VStack, Circle를 함께 사용하여 복잡한 레이아웃을 만들 수
          있습니다.
        </p>

        {/* 프로필 카드 예제 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            프로필 카드 예제
          </h3>
          <div
            className={css({
              p: "24px",
              bg: "white",
              rounded: "16px",
              border: "1px solid",
              borderColor: "gray.200",
              maxW: "400px",
            })}
          >
            <div className={hstack({ gap: "16px", mb: "16px" })}>
              <div
                className={circle({
                  size: "60px",
                  bg: "blue.500",
                  color: "white",
                })}
              >
                JD
              </div>
              <div className={vstack({ gap: "4px", alignItems: "flex-start" })}>
                <div className={css({ fontSize: "18px", fontWeight: "600" })}>
                  John Doe
                </div>
                <div className={css({ fontSize: "14px", color: "gray.600" })}>
                  Software Engineer
                </div>
              </div>
            </div>
            <div className={hstack({ gap: "8px", justify: "space-between" })}>
              <div className={css({ fontSize: "14px", color: "gray.600" })}>
                Posts
              </div>
              <div className={css({ fontSize: "14px", color: "gray.600" })}>
                Followers
              </div>
              <div className={css({ fontSize: "14px", color: "gray.600" })}>
                Following
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 그룹 예제 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            버튼 그룹 예제
          </h3>
          <div className={hstack({ gap: "12px" })}>
            <div
              className={circle({
                size: "48px",
                bg: "blue.500",
                color: "white",
                cursor: "pointer",
                _hover: { bg: "blue.600" },
              })}
            >
              ✓
            </div>
            <div
              className={circle({
                size: "48px",
                bg: "green.500",
                color: "white",
                cursor: "pointer",
                _hover: { bg: "green.600" },
              })}
            >
              ✎
            </div>
            <div
              className={circle({
                size: "48px",
                bg: "red.500",
                color: "white",
                cursor: "pointer",
                _hover: { bg: "red.600" },
              })}
            >
              ✕
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
