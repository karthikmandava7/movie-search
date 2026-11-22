import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toggleSearch } from "../store/gptSlice";

const SearchBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearchOpen = useSelector((store) => store.gptSearch.isSearchOpen);

  const onClick = () => {
    if (!isSearchOpen) {
      navigate("/search");
    } else {
      navigate(-1);
    }
    dispatch(toggleSearch());
  };
  return (
    <button
      className="bg-[#E50914] text-white p-1 px-3 font-medium rounded hover:opacity-80"
      onClick={onClick}
    >
      {isSearchOpen ? "Home" : "Search"}
    </button>
  );
};

export default SearchBtn;
