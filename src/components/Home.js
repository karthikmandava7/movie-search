import Header from "./Header";
import MainContainer from "./MainContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";

const Home = () => {
  useNowPlaying();
  return (
    <div className="relativen h-screen w-full">
      <Header />
      <div>
        <MainContainer />
        <SecondContainer />
      </div>
    </div>
  );
};

export default Home;
