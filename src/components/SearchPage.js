import Header from "./Header";
import { APP_LOGO } from "../utils/constants";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";

const SearchPage = () => {
  return (
    <div className="relative flex">
      <Header />
      <div className="fixed -z-10">
        <img src={APP_LOGO} alt="image_1" className="h-screen object-cover" />
      </div>
      <div className="absolute mt-36 w-full">
        <SearchBar />
        <MovieSuggestions/>
      </div>
    </div>
  );
};

export default SearchPage;
