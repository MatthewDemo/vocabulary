import { useSelector } from "react-redux";
import "./TestIsFinished.scss";

const TestIsFinished = () => {
  const successLevel = useSelector((state) => state.checkWord.successLevel);

  return (
    <div className="test-finished-container">
      <h1>You've answered all questions!</h1>
      <p>You answered {successLevel * 10} % of the questions correctly</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{ width: `${successLevel * 10}%` }}></div>
      </div>
    </ div>
  );
};

export default TestIsFinished;
