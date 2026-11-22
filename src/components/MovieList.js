import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="m-4 min-w-0">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-2">{title}</h1>
        <div className="flex overflow-x-auto overflow-y-hidden gap-4 hide-scrollbar">
          {movies?.map((movie) => (
            movie?.poster_path && <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
