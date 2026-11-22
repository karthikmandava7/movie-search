import Header from "./Header";
import { APP_LOGO } from "../utils/constants";

const SearchPage = () => {
  return (
    <div className="relative flex">
      <Header />
      <img src={APP_LOGO} alt="image_1" className="h-screen" />
      <div className="absolute mt-36 w-full flex justify-center">
        <div className="bg-black p-3 rounded border-white border-1 w-1/3 h-16 flex justify-between">
          <input
            placeholder="Search movies"
            className="mr-2 p-1 rounded w-[80%]"
          ></input>
          <button className="bg-[#E50914] text-white rounded p-1 w-[20%]">
            {"Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
