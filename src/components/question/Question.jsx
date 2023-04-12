import React from "react";
import "./Question.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentQuestionIndex,
  setSuccessLevel,
} from "../../redux/slices/checkWordSlice";

const Question = () => {
  const dispatch = useDispatch();
  const randomWord = useSelector((state) => state.checkWord.randomWord);
  const randomWordUkr = useSelector((state) => state.checkWord.randomWordUkr);
  const answerOptions = useSelector((state) => state.checkWord.answerOptions);
  const currentQuestionIndex = useSelector(
    (state) => state.checkWord.currentQuestionIndex
  );
  const successLevel = useSelector((state) => state.checkWord.successLevel);

  const handleAnswerButtonClick = (answer) => {
    if (
      answer && answer.toString().toUpperCase() === randomWordUkr.toString().toUpperCase()
    ) {
      dispatch(setSuccessLevel(successLevel + 1));
    } else {
    }

    dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
  };
  return (
    <div>
      <h1>How to translate {randomWord.toString().toUpperCase()}?</h1>
      <div className="button-container">
        {answerOptions.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerButtonClick(answer)}
          >
            {answer ? answer.toString().toUpperCase() : 'ПЕРУКАРНЯ'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
