import { configureStore } from "@reduxjs/toolkit";
import questionReducer from './slices/questionSlice'
import addWordReducer from './slices/addWordSlice'
import checkWordReducer from "./slices/checkWordSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    addWord: addWordReducer,
    checkWord: checkWordReducer
  },
});
