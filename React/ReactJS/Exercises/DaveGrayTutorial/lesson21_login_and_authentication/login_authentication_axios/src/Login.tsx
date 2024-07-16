import React, {
  FormEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import api from "./api/api";
import AuthContext from "./context/AuthProvider";
import { LOGIN_URL } from "./utils/URL";
import { AxiosError, AxiosResponse } from "axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    try {
      const response: AxiosResponse = await api.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });

      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (!err?.response) {
          setErrMsg("No server response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
            setErrMsg('Login Failed');
        }
        }
        errRef.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            />

            <button type="submit">Sign In</button>
            <p>
              Need an Account? <br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
