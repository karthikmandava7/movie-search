import React, { useRef } from "react";
import { languagejson } from "../utils/languagejson";
import { useDispatch, useSelector } from "react-redux";
import client from "../services/openaiConfig";
import { openaiInstructions, searchMovieList } from "../utils/constants";
import { setMovieResults } from "../store/gptSlice";
import { API_OPTIONS, SEARCH_MOVIES } from "../utils/serviceConstants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const lang = useSelector((store) => store.gptSearch.languageSelected);

  const searchMovies = async (item) => {
    try {
      const response = await fetch(
        SEARCH_MOVIES + "query=" + item,
        API_OPTIONS,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch now-playing movies");
      }
      const json = await response.json();
      return json.results;
    } catch (error) {}
  };

  const onSearch = async () => {
    if (!inputRef.current.value) return;
    try {
      const response = await client.responses.create({
        model: "gpt-5.5",
        instructions: openaiInstructions,
        input: inputRef.current.value,
      });
      console.log(response.output_text);
    } catch (error) {
      console.log(error);
    }
    const responseList = searchMovieList.map(async (item) => {
      const list = await searchMovies(item);
      return {
        movieName: item,
        movieList: list,
      };
    });
    const finalList = await Promise.all(responseList);
    dispatch(setMovieResults(finalList));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-black p-3 rounded border-white border-1 w-1/3 h-16 flex justify-between">
        <input
          ref={inputRef}
          placeholder={languagejson[lang].searchPlacholder}
          className="mr-2 p-1 rounded w-[80%] caret-[#E50914]"
        ></input>
        <button
          className="bg-[#E50914] text-white rounded p-1 w-[20%]"
          onClick={onSearch}
        >
          {languagejson[lang].searchTxt}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
