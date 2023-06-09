import { useEffect } from "react";
import "./CheckWordPage.scss";
import TestIsFinished from "../../components/checkWord/testIsFinished/TestIsFinished";
import Question from "../../components/checkWord/question/Question";
import { useSelector, useDispatch } from "react-redux";
import {
  setRandomWord,
  setRandomWordUkr,
  setAnswerOptions,
  setCurrentQuestionIndex,
  setSuccessLevel,
  addGameToHistory,
} from "../../redux/slices/checkWordSlice";

const CheckWordPage = () => {
  const dispatch = useDispatch();
  const successLevel = useSelector((state) => state.checkWord.successLevel);
  const allWords = useSelector((state) => state.question.allWords);
  const currentQuestionIndex = useSelector(
    (state) => state.checkWord.currentQuestionIndex
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (currentQuestionIndex >= 10) return;
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const randomWord = allWords[randomIndex];
    const propertyName = Object.keys(randomWord);
    const propertyNameUkr = Object.values(randomWord);
    dispatch(setRandomWord(propertyName));
    dispatch(setRandomWordUkr(propertyNameUkr));

    let answerOptions = new Set(
      allWords
        .filter((word) => word[1] !== propertyName)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((word) => Object.values(word))
        .flat()
    );
    answerOptions.add(propertyNameUkr);
    while (answerOptions.size < 4) {
      const randomAnswerIndex = Math.floor(Math.random() * allWords.length);
      const randomAnswer = Object.values(allWords[randomAnswerIndex])[1];
      answerOptions.add(randomAnswer);
    }
    answerOptions = Array.from(answerOptions);
    shuffleArray(answerOptions);
    dispatch(setAnswerOptions(answerOptions));
  }, [allWords, currentQuestionIndex, dispatch]);

  let currentQuestion = null;
  let currentAnswerOptions = null;

  if (currentQuestionIndex < allWords.length && currentQuestionIndex < 10) {
    currentQuestion = Object.keys(allWords[currentQuestionIndex]);
    currentAnswerOptions = allWords
      .filter((word) => word[1] !== currentQuestion)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((word) => Object.values(word));
    currentAnswerOptions.push(Object.values(allWords[currentQuestionIndex]));
    shuffleArray(currentAnswerOptions);
  }

  const handleRestart = () => {
    const now = new Date().toISOString()
    const gameResult = {
      date: now,
      score: successLevel,
    };
    dispatch(addGameToHistory(gameResult));
    dispatch(setCurrentQuestionIndex(0));
    dispatch(setSuccessLevel(0));
  };

  return (
    <div>
      {currentQuestion ? (
        <>
          <Question />
        </>
      ) : (
        <TestIsFinished />
      )}
      <button onClick={handleRestart} className="restart-button">
        Start new game
      </button>
    </div>
  );
};

export default CheckWordPage;
