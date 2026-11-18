import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING } from "../utils/serviceConstants";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../store/nowPlayingSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch(NOW_PLAYING, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch now-playing movies");
      }
      const json = await response.json();
      dispatch(addNowPlayMovies(json));
    } catch (error) {
      dispatch(addNowPlayMovies(null));
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
};

export default useNowPlaying;
