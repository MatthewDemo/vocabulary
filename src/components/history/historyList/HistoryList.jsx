import React from "react";
import { useSelector } from "react-redux";
import "./HistoryList.scss";

const HistoryList = () => {
  const gameHistory = useSelector((state) => state.checkWord.gameHistory);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}  ${hours}:${minutes}`;
  };

  return (
    <ul className="container">
      {gameHistory.map((game, index) => (
        <li key={index}>
          <span className="date">{formatDate(new Date(game.date))}</span>
          <span className="score">{game.score} of 10 correct answers</span>
          <div className="status-bar">
            <div
              className="progress"
              style={{ width: `${game.score * 10}%` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HistoryList;
