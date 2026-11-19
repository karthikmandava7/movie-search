import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { hideLoader, showLoader } from "../store/loaderSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const onLogout = () => {
    dispatch(showLoader());
    signOut(auth)
      .then(() => {
        dispatch(hideLoader());
        // Sign-out successful.
      })
      .catch((error) => {
        dispatch(hideLoader());
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black to-transparent w-screen flex justify-between p-4">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      {user ? (
        <div className="flex gap-4 text-white">
          <img src={user?.photoURL} alt="logo" className="w-10" />
          {user?.uid ? <button onClick={onLogout}>{"Logout"}</button> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
