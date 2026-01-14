import { css } from "../../../styled-system/css";
import { FaBuilding } from "react-icons/fa";

const Login = () => {
  return (
    <div
      className={css({
        minH: "100dvh",
        bg: "#F8FAFC",
        pt: "48px",
        px: "24px",
      })}
    >
      <div
        className={css({
          maxWidth: "908px",
          marginInline: "auto",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "32px",
          })}
        >
          <FaBuilding size={24} />
          <span className={css({ fontSize: "20px", fontWeight: "800" })}>
            IHFB
          </span>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mt: { base: "56px", lg: "96px" },
            gap: { base: "48px", md: "48px", lg: "96px" },
            maxW: { base: "420px", lg: "unset" },
            mx: { base: "auto", lg: "unset" },
          })}
        >
          <div
            className={css({
              maxW: { base: "100%", lg: "320px" },
              textAlign: { base: "center", lg: "start" },
              marginInline: "auto",
            })}
          >
            <h1
              className={css({
                fontSize: "30px",
                fontWeight: "800",
                marginBottom: "12px",
              })}
            >
              Welcome back! <br />
              Sign in to your account
            </h1>
            <div>
              <span
                className={css({
                  color: "#636363",
                  marginInlineEnd: "8px",
                })}
              >
                Don't have an account?{" "}
                <a
                  href="#"
                  className={css({
                    color: "#2563EB",
                    textDecoration: "underline",
                  })}
                >
                  Sign up
                </a>
              </span>
            </div>
          </div>
          <form
            className={css({
              display: "flex",
              flexDirection: "column",
              w: { base: "100%", lg: "480px" },
              gap: "24px",
              marginTop: "40px",
              backgroundColor: "white",
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              padding: "32px",
              borderRadius: "8px",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              })}
            >
              <label htmlFor="email" className={css({ fontWeight: "500" })}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={css({
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                })}
              />
            </div>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              })}
            >
              <label htmlFor="password" className={css({ fontWeight: "500" })}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className={css({
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                })}
              />
            </div>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
            >
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button
              type="submit"
              className={css({
                padding: "8px",
                borderRadius: "4px",
                backgroundColor: "#2563EB",
                color: "white",
              })}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
