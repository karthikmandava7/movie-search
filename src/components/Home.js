import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { hideLoader, showLoader } from "../store/loaderSlice";
import MainContainer from "./MainContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";


const Home = () => {
  const dispatch = useDispatch();
  useNowPlaying();
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
    <div className="relativen h-screen w-full">
      <Header />
      <div className="flex justify-end items-center m-4 gap-3">
        <img src={user?.photoURL} alt="logo" className="w-10" />
        {user?.uid ? <button onClick={onLogout}>{"Logout"}</button> : null}
      </div>
      <div className="p-4">
        <MainContainer />
        <SecondContainer />
      </div>
    </div>
  );
};

export default Home;
