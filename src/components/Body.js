import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { Outlet, useNavigate } from "react-router";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({uid, displayName, email, photoURL}));
        navigate("/home");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return <Outlet />;
};

export default Body;