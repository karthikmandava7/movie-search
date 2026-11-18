import { useSelector } from "react-redux";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Home = () => {
  const user = useSelector((store) => store.user);

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
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
    </div>
  );
};

export default Home;
