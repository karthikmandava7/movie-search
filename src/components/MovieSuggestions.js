import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const movieList = useSelector((store) => store.gptSearch.movieList);
  if (!movieList) return null;
  return (
    <div className="bg-black bg-opacity-70 mt-2 p-1 md:m-4 md:p-4 rounded-lg">
      {movieList.map((item) => (
        <MovieList title={item?.movieName} movies={item?.movieList} />
      ))}
    </div>
  );
};

export default MovieSuggestions;
