import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { hideLoader, showLoader } from "../store/loaderSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import SearchBtn from "./SearchBtn";
import LanguageSelect from "./LanguageSelect";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isSearchOpen = useSelector((store) => store.gptSearch.isSearchOpen);
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
      <img src={NETFLIX_LOGO} alt="logo" className="w-24 md:w-44" />
      <div className="flex gap-2 md:gap-4 items-center">
        {isSearchOpen ? <LanguageSelect /> : null}
       {user ?  <SearchBtn /> : null}
        {user ? (
          <div className="flex gap-1 md:gap-2 text-white">
            <img src={user?.photoURL} alt="logo" className="w-6 md:w-10 rounded" />
            {user?.uid ? <button onClick={onLogout}>{"Logout"}</button> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
