import "./AllWordsTable.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteWord } from "../../redux/slices/questionSlice";

const AllWordsTable = () => {
  const allWords = useSelector((state) => state.question.allWords);
  const dispatch = useDispatch();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allWords.map((word, index) => (
          <tr key={index}>
            <td>{capitalizeFirstLetter(Object.keys(word)[0])}</td>
            <td>{capitalizeFirstLetter(Object.values(word)[0])}</td>
            <td>
              <button
                onClick={() => dispatch(handleDeleteWord(Object.keys(word)[0]))}
                className="delete-button"
              >
                &#10005;
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllWordsTable;
