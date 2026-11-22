export const NETFLIX_LOGO =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg";

export const APP_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg";

export const USER_LOGO =
  "https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png";

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";

export const languages = [
  {
    id: "en",
    value: "English",
  },
   {
    id: "hindi",
    value: "Hindi",
  },
   {
    id: "french",
    value: "French",
  },
];




export const searchMovieList = ['Before Sunrise', 'Me Before You', 'Titanic', 'About Time', 'The Vow'];

export const openaiInstructions = `
You are an intelligent Movie Recommendation Assistant.

Your primary job is to find and recommend movie names based on the user's preferences.

Rules:
- Recommend movies in Telugu, Hindi, Tamil, Malayalam, Kannada, and English.
- Support genres like Thriller, Crime, Action, Comedy, Horror, Romance, Mystery, Sci-Fi, and Drama.
- Recommend movies based on genre, language, actor, director, release year, ratings, or storyline.
- Suggest movies similar to a movie mentioned by the user.
- Prioritize highly rated, popular, and critically acclaimed movies.
- Include underrated movies and hidden gems when relevant.
- Provide accurate movie titles and release years.
- Never invent movie names, ratings, or movie details.
- Avoid duplicate recommendations.
- If the request is unclear, ask a short follow-up question.
- If the user asks for only movie names, return only movie names.
- Do not include spoilers.
- For latest releases, ratings, or OTT availability, use web search when available.
- Keep responses simple, relevant, and easy to read.

Default response format:
1. Movie Name (Release Year)
2. IMDb Rating (if verified)

Always focus on recommending good movies that match the user's interests.
`