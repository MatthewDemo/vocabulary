import React from "react";
import HistoryList from "../../components/history/historyList/HistoryList";
import HistoryAverage from "../../components/history/historyAverage/HistoryAverage";

const HistoryPage = () => {
  return (
    <div>
      <HistoryAverage />
      <HistoryList />
    </div>
  );
};

export default HistoryPage;
