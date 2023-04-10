import { useDispatch, useSelector } from "react-redux";
import { addNewWord } from "../../redux/slices/questionSlice";
import {
  clearEnglishWord,
  clearUkrainianWord,
  setEnglishWord,
  setUkrainianWord,
} from "./../../redux/slices/addWordSlice";
import "./AddWordPage.scss";

const AddWordPage = () => {
  const dispatch = useDispatch();
  const englishWord = useSelector((state) => state.addWord.englishWord);
  const ukrainianWord = useSelector((state) => state.addWord.ukrainianWord);

  const handleAddWord = () => {
    if (englishWord.trim() === "" || ukrainianWord.trim() === "") {
      alert("Please fill in both fields");
      return;
    }
    const newWord = { [englishWord]: ukrainianWord };
    dispatch(addNewWord(newWord));
    dispatch(clearEnglishWord());
    dispatch(clearUkrainianWord());
  };

  return (
    <div className="add-word-page">
      <div className="input-container">
        <label htmlFor="english-word-input">Word on English:</label>
        <input
          type="text"
          id="english-word-input"
          value={englishWord}
          onChange={(e) => dispatch(setEnglishWord(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="ukrainian-word-input">Translation:</label>
        <input
          type="text"
          id="ukrainian-word-input"
          value={ukrainianWord}
          onChange={(e) => dispatch(setUkrainianWord(e.target.value))}
        />
      </div>
      <button onClick={handleAddWord}>Add word</button>
    </div>
  );
};

export default AddWordPage;
