import Header from "./Header";
import MainContainer from "./MainContainer";
import { SecondContainer } from "./SecondContainer";
import useNowPlaying from "../hooks/useNowPlaying";
import {
  NOW_PLAYING,
  POPULAR_LIST,
  TOP_RATED,
} from "../utils/serviceConstants";

const Home = () => {
  useNowPlaying(NOW_PLAYING);
  useNowPlaying(POPULAR_LIST);
  useNowPlaying(TOP_RATED);
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
