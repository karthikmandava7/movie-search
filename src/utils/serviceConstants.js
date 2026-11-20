export const API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const POPULAR_LIST = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';