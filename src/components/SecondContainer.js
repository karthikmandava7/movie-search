import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondContainer = () => {
  const movies = useSelector((store) => store.nowPlaying);
  return (
    <div className="flex flex-col relative z-20 bg-black">
      <div className="-mt-60">
        <MovieList title={"Now Playing"} movies={movies?.nowPlaying?.results} />
        <MovieList
          title={"Today's Popular"}
          movies={movies?.popularList?.results}
        />
        <MovieList title={"Top Rated"} movies={movies?.topRated?.results} />
      </div>
    </div>
  );
};
