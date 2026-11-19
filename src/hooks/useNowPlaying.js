import { useEffect } from "react";
import { API_OPTIONS } from "../utils/serviceConstants";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../store/nowPlayingSlice";

const useNowPlaying = (category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(category, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch now-playing movies");
        }
        const json = await response.json();
        dispatch(addNowPlayMovies({ json, category }));
      } catch (error) {
        dispatch(addNowPlayMovies(null));
      }
    };
    fetchNowPlaying();
  }, [category, dispatch]);
};

export default useNowPlaying;
