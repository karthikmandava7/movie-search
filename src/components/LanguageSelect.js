import { languages } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../store/gptSlice";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.gptSearch.languageSelected);

  const onLangChange = (e) => {
    dispatch(selectLanguage(e.target.value));
  };
  return (
    <select
      name="language"
      id="lang"
      className="p-1 rounded"
      onChange={onLangChange}
    >
      {languages.map((lang) => (
        <option key={lang.id} value={lang.id} selected={lang.id === selectedLanguage}>
          {lang.value}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
