import { grid, gridItem } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export const GridPatternsDemo = () => {
  return (
    <div className={css({ p: "24px", maxW: "1200px", mx: "auto" })}>
      <h1 className={css({ fontSize: "32px", fontWeight: "bold", mb: "32px" })}>
        PandaCSS Grid Patterns Demo
      </h1>

      {/* 기본 Grid 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          1. 기본 Grid (columns)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>columns</code> prop을 사용하여 고정된 열 개수를 설정할 수
          있습니다.
          <br />
          기본적으로 <code>display: grid</code>와 <code>gap: 8px</code>가
          적용됩니다.
        </p>

        {/* 3열 그리드 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            3열 그리드 (columns: 3)
          </h3>
          <div className={grid({ columns: 3 })}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
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

        {/* 4열 그리드 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            4열 그리드 (columns: 4)
          </h3>
          <div className={grid({ columns: 4, gap: "16px" })}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  h: "80px",
                  bg: "green.500",
                  rounded: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  fontWeight: "600",
                })}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* 2열 그리드 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            2열 그리드 (columns: 2)
          </h3>
          <div className={grid({ columns: 2, gap: "24px" })}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i + 10}
                className={css({
                  h: "120px",
                  bg: "purple.500",
                  rounded: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                })}
              >
                Card {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 반응형 Grid 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          2. 반응형 Grid (minChildWidth)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>minChildWidth</code> prop을 사용하면 자동으로 반응형 그리드를
          만들 수 있습니다.
          <br />각 아이템의 최소 너비를 설정하면, 화면 크기에 따라 자동으로 열
          개수가 조정됩니다.
        </p>

        {/* minChildWidth 사용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            minChildWidth: "200px" (자동 반응형)
          </h3>
          <div className={grid({ minChildWidth: "200px", gap: "16px" })}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  h: "100px",
                  bg: "orange.500",
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

        {/* 더 작은 minChildWidth */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            minChildWidth: "150px" (더 많은 열)
          </h3>
          <div className={grid({ minChildWidth: "150px", gap: "12px" })}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gap 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          3. Grid Gap 설정
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>gap</code>, <code>columnGap</code>, <code>rowGap</code>을
          사용하여 간격을 조정할 수 있습니다.
        </p>

        {/* 기본 gap */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            기본 gap (8px)
          </h3>
          <div className={grid({ columns: 3 })}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* 커스텀 gap */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            커스텀 gap (24px)
          </h3>
          <div className={grid({ columns: 3, gap: "24px" })}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* columnGap과 rowGap 분리 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            columnGap: "32px", rowGap: "16px"
          </h3>
          <div
            className={grid({ columns: 3, columnGap: "32px", rowGap: "16px" })}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GridItem - colSpan 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          4. GridItem - colSpan (열 병합)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>gridItem</code>의 <code>colSpan</code> prop을 사용하여 아이템이
          여러 열을 차지하도록 할 수 있습니다.
        </p>

        {/* colSpan: 2 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            3열 그리드에서 첫 번째 아이템이 2열 차지
          </h3>
          <div className={grid({ columns: 3, gap: "16px" })}>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 2 }),
                h: "100px",
                bg: "red.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
              })}
            >
              Span 2 columns
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* 여러 colSpan 조합 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            다양한 colSpan 조합 (4열 그리드)
          </h3>
          <div className={grid({ columns: 4, gap: "16px" })}>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 4 }),
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
              Full Width (span 4)
            </div>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 2 }),
                h: "100px",
                bg: "green.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Span 2
            </div>
            <div
              className={css({
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
              1
            </div>
            <div
              className={css({
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
              1
            </div>
            <div
              className={css({
                h: "100px",
                bg: "orange.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              1
            </div>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 3 }),
                h: "100px",
                bg: "red.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Span 3
            </div>
          </div>
        </div>
      </section>

      {/* GridItem - rowSpan 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          5. GridItem - rowSpan (행 병합)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>rowSpan</code> prop을 사용하여 아이템이 여러 행을 차지하도록 할
          수 있습니다.
        </p>

        {/* rowSpan: 2 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            3열 그리드에서 첫 번째 아이템이 2행 차지
          </h3>
          <div className={grid({ columns: 3, gap: "16px" })}>
            <div
              className={css({
                ...gridItem.raw({ rowSpan: 2 }),
                bg: "red.500",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
              })}
            >
              Span 2 rows
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* colSpan과 rowSpan 조합 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            colSpan과 rowSpan 조합 (4열 그리드)
          </h3>
          <div className={grid({ columns: 4, gap: "16px" })}>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 2, rowSpan: 2 }),
                bg: "purple.600",
                rounded: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
              })}
            >
              2x2
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  h: "100px",
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

      {/* GridItem - 위치 지정 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          6. GridItem - 위치 지정 (colStart, rowStart)
        </h2>
        <p className={css({ mb: "16px", color: "#666" })}>
          <code>colStart</code>, <code>rowStart</code>, <code>colEnd</code>,{" "}
          <code>rowEnd</code>를 사용하여 아이템의 정확한 위치를 지정할 수
          있습니다.
        </p>

        {/* colStart 사용 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            colStart을 사용한 위치 지정 (4열 그리드)
          </h3>
          <div className={grid({ columns: 4, gap: "16px" })}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 1}
              </div>
            ))}
            <div
              className={css({
                ...gridItem.raw({ colStart: 2, colSpan: 2 }),
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
              Starts at col 2
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className={css({
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
                {i + 5}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실전 예제 */}
      <section className={css({ mb: "48px" })}>
        <h2
          className={css({ fontSize: "24px", fontWeight: "600", mb: "16px" })}
        >
          7. 실전 예제
        </h2>

        {/* 카드 그리드 레이아웃 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            카드 그리드 레이아웃
          </h3>
          <div
            className={grid({
              columns: { base: 1, md: 2, lg: 3 },
              gap: "24px",
            })}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "24px",
                  bg: "white",
                  rounded: "12px",
                  border: "1px solid",
                  borderColor: "gray.200",
                  boxShadow: "sm",
                  _hover: {
                    boxShadow: "md",
                    transform: "translateY(-4px)",
                  },
                  transition: "all 0.2s",
                })}
              >
                <div
                  className={css({
                    w: "100%",
                    h: "120px",
                    bg: "blue.500",
                    rounded: "8px",
                    mb: "16px",
                  })}
                />
                <div
                  className={css({
                    fontSize: "20px",
                    fontWeight: "600",
                    mb: "8px",
                  })}
                >
                  Card Title {i + 1}
                </div>
                <div className={css({ fontSize: "14px", color: "gray.600" })}>
                  This is a description of the card content.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 대시보드 레이아웃 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            대시보드 레이아웃
          </h3>
          <div className={grid({ columns: 4, gap: "16px" })}>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 4 }),
                p: "24px",
                bg: "blue.500",
                rounded: "12px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
              })}
            >
              Header Section
            </div>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 3 }),
                p: "24px",
                bg: "white",
                rounded: "12px",
                border: "1px solid",
                borderColor: "gray.200",
                minH: "200px",
              })}
            >
              <div
                className={css({
                  fontSize: "18px",
                  fontWeight: "600",
                  mb: "16px",
                })}
              >
                Main Content
              </div>
              <div className={css({ color: "gray.600" })}>
                This is the main content area that spans 3 columns.
              </div>
            </div>
            <div
              className={css({
                ...gridItem.raw({ rowSpan: 1 }),
                p: "24px",
                bg: "gray.100",
                rounded: "12px",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <div
                className={css({
                  fontSize: "18px",
                  fontWeight: "600",
                  mb: "16px",
                })}
              >
                Sidebar
              </div>
              <div className={css({ color: "gray.600", fontSize: "14px" })}>
                Sidebar content
              </div>
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={css({
                  p: "16px",
                  bg: "white",
                  rounded: "8px",
                  border: "1px solid",
                  borderColor: "gray.200",
                  textAlign: "center",
                })}
              >
                <div
                  className={css({
                    fontSize: "24px",
                    fontWeight: "600",
                    mb: "4px",
                  })}
                >
                  {i + 1}
                </div>
                <div className={css({ fontSize: "12px", color: "gray.600" })}>
                  Metric
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 갤러리 레이아웃 */}
        <div className={css({ mb: "24px" })}>
          <h3 className={css({ fontSize: "18px", mb: "8px" })}>
            갤러리 레이아웃 (Masonry 스타일)
          </h3>
          <div
            className={grid({
              columns: { base: 2, md: 3, lg: 4 },
              gap: "16px",
            })}
          >
            <div
              className={css({
                ...gridItem.raw({ rowSpan: 2 }),
                bg: "red.500",
                rounded: "8px",
                minH: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Tall
            </div>
            <div
              className={css({
                bg: "blue.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              1
            </div>
            <div
              className={css({
                bg: "green.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              2
            </div>
            <div
              className={css({
                bg: "purple.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              3
            </div>
            <div
              className={css({
                ...gridItem.raw({ colSpan: 2 }),
                bg: "orange.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Wide
            </div>
            <div
              className={css({
                bg: "pink.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              4
            </div>
            <div
              className={css({
                bg: "teal.500",
                rounded: "8px",
                h: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              5
            </div>
            <div
              className={css({
                ...gridItem.raw({ rowSpan: 2 }),
                bg: "cyan.500",
                rounded: "8px",
                minH: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
              })}
            >
              Tall
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
