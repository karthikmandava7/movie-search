import Header from "./Header";
import { APP_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { languagejson } from "../utils/languagejson";
import { useRef } from "react";
import client from "../services/openaiConfig";

const SearchPage = () => {
  const lang = useSelector((store) => store.gptSearch.languageSelected);
  const inputRef = useRef();

  const onSearch = async () => {
    if (!inputRef.current.value) return;
    try {
      const response = await client.responses.create({
        model: "gpt-5.5",
        instructions: `
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
`,
        input: inputRef.current.value,
      });
      console.log(response.output_text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex">
      <Header />
      <img src={APP_LOGO} alt="image_1" className="h-screen" />
      <div className="absolute mt-36 w-full flex justify-center">
        <div className="bg-black p-3 rounded border-white border-1 w-1/3 h-16 flex justify-between">
          <input
            ref={inputRef}
            placeholder={languagejson[lang].searchPlacholder}
            className="mr-2 p-1 rounded w-[80%] caret-[#E50914]"
          ></input>
          <button
            className="bg-[#E50914] text-white rounded p-1 w-[20%]"
            onClick={onSearch}
            disabled={inputRef.current.value.length}
          >
            {languagejson[lang].searchTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
