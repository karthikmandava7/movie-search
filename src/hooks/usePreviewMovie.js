import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/serviceConstants";
import { addPreviewMovie } from "../store/nowPlayingSlice";

const usePreviewMovie = (movieId) => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch now-playing movies");
      }
      const json = await response.json();
      const trailerData = json?.results
        ? json?.results.filter((item) => item?.type === "Trailer")
        : null;

      const finalObj = trailerData.length
        ? trailerData[trailerData.length - 1]
        : null;
      dispatch(addPreviewMovie(finalObj));
    } catch (error) {
      dispatch(addPreviewMovie(null));
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default usePreviewMovie;
