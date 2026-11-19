import React from "react";
import { POSTER_PATH } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 shrink-0">
      {movie?.poster_path ? (
        <img className="w-full" src={POSTER_PATH + movie?.poster_path} alt="poster_path" />
      ) : null}
    </div>
  );
};

export default MovieCard;
