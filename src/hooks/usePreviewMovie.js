import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/serviceConstants";
import { addPreviewMovie } from "../store/nowPlayingSlice";

const usePreviewMovie = (movieId) => {
  const dispatch = useDispatch();
  const previewMve = useSelector((store) => store?.nowPlaying?.previewMovie);

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
    if(!previewMve) fetchVideos();
  }, []);
};

export default usePreviewMovie;
