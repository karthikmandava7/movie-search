import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING, POPULAR_LIST, TOP_RATED } from "../utils/serviceConstants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayMovies } from "../store/nowPlayingSlice";

const useNowPlaying = (category) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.nowPlaying);
  // if( category ===  TOP_RATED && movies?.topRated) return;

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
    if(category === TOP_RATED && !movies?.topRated) fetchNowPlaying();
    if(category === NOW_PLAYING && !movies?.nowPlaying) fetchNowPlaying();
    if(category === POPULAR_LIST && !movies?.popularList) fetchNowPlaying();

  }, [category, dispatch, movies?.nowPlaying, movies?.popularList, movies?.topRated]);
};

export default useNowPlaying;
