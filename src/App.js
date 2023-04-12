import "./App.css";
import Header from "./components/header/Header";
import AllWordsPage from "./pages/allWordsPage/AllWordsPage";
import AddWordPage from "./pages/addWordPage/AddWordPage";
import CheckWordPage from "./pages/checkWordPage/CheckWordPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import HistoryPage from "./pages/historyPage/HistoryPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllWordsPage />} />
        <Route path="/add" element={<AddWordPage />} />
        <Route path="/check" element={<CheckWordPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
