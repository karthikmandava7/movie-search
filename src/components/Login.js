import { useState, useRef } from "react";
import Header from "./Header";
import { validateEmailNPassword } from "../utils/validations";

const Login = () => {
  const [isSignInFormOpen, setSignInFormOpen] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const onSubmit = () => {
    const isValid = validateEmailNPassword(
      emailRef.current.value,
      passwordRef.current.value,
      !isSignInFormOpen,
      nameRef.current.value,
    );
    setErrorMsg(isValid);
    if (isSignInFormOpen) {
    } else {
    }
  };
  return (
    <div className="relativen h-screen items-center justify-center">
      <Header />
      <img
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg"
        }
        alt="image_1"
        className="h-screen"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col inset-0 m-auto w-3/12 h-fit bg-black p-5 rounded bg-opacity-75"
      >
        <p className="text-white text-xl">
          {isSignInFormOpen ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInFormOpen ? (
          <input
            ref={nameRef}
            placeholder="Enter Full Name"
            type="text"
            className="p-2 m-2 outline-none bg-gray-500 text-white rounded focus:border-white focus:border"
          />
        ) : null}
        <input
          ref={emailRef}
          placeholder="Enter Email"
          type="email"
          className="p-2 m-2 outline-none bg-gray-500 text-white rounded focus:border-white focus:border"
        />
        <input
          ref={passwordRef}
          placeholder="Enter Password"
          type="password"
          className="p-2 m-2 outline-none bg-gray-500 text-white rounded focus:border-white focus:border"
        />
        {errorMsg ? (
          <p className="text-red-700 m-2 font-medium">{errorMsg}</p>
        ) : null}
        <button
          className="p-2 m-2 bg-[#e40914] text-white rounded"
          onClick={onSubmit}
        >
          {"Continue"}
        </button>
        <button
          className="text-white p-2 m-1 text-left"
          onClick={() => setSignInFormOpen(!isSignInFormOpen)}
        >
          {isSignInFormOpen
            ? "Need help? Sign Up"
            : "Already have an account? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
