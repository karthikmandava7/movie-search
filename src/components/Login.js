import { useState, useRef } from "react";
import Header from "./Header";
import { validateEmailNPassword } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { APP_LOGO, USER_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/loaderSlice";

const Login = () => {
  const dispatch = useDispatch();
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
      nameRef?.current?.value,
    );
    setErrorMsg(isValid);
    if (isValid) return;
    if (isSignInFormOpen) {
      dispatch(showLoader());
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(hideLoader());
        })
        .catch((error) => {
          dispatch(showLoader());
          setErrorMsg(error?.message);
        });
    } else {
      dispatch(showLoader());
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: nameRef?.current?.value ?? "Guest User",
            photoURL: USER_LOGO,
          })
            .then(() => {
              dispatch(hideLoader());
            })
            .catch((error) => {
              dispatch(hideLoader());
            });
        })
        .catch((error) => {
          dispatch(hideLoader());
          setErrorMsg(error?.message);
        });
    }
  };
  return (
    <div className="relativen h-screen items-center justify-center">
      <Header />
      <img src={APP_LOGO} alt="image_1" className="h-screen" />
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
