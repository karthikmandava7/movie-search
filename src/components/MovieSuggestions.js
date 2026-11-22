import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const movieList = useSelector((store) => store.gptSearch.movieList);

  return (
    <>
      {movieList
        ? movieList.map((item) => (
            <MovieList title={item?.movieName} movies={item?.movieList} />
          ))
        : null}
    </>
  );
};

export default MovieSuggestions;
