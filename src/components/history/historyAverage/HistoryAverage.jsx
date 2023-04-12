import React from "react";
import { useSelector } from "react-redux";
import "./HistoryAverage.scss";

const HistoryAverage = () => {
  const gameHistory = useSelector((state) => state.checkWord.gameHistory);
  const calculateAverage = (gameHistory) => {
    const totalScore = gameHistory.reduce((acc, game) => acc + game.score, 0);
    return Math.round((totalScore / gameHistory.length) * 10) / 10;
  };
  const averageScore = calculateAverage(gameHistory);

  return (
    <div className="average-container">
      <span>Average score: </span>
      <div className="status-bar">
        <div
          className="progress"
          style={{ width: `${averageScore * 10}%` }}
        ></div>
      </div>
      <span>{averageScore} of 10 correct answers</span>
    </div>
  );
};

export default HistoryAverage;
