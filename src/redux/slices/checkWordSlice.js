import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomWord: "",
  randomWordUkr: "",
  answerOptions: [],
  currentQuestionIndex: 0,
  successLevel: 0,
  gameHistory: [],
};
export const checkWordSlice = createSlice({
  name: "checkWord",
  initialState,
  reducers: {
    setRandomWord: (state, action) => {
      state.randomWord = action.payload;
    },
    setRandomWordUkr: (state, action) => {
      state.randomWordUkr = action.payload;
    },
    setAnswerOptions: (state, action) => {
      state.answerOptions = action.payload;
    },
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    setSuccessLevel: (state, action) => {
      state.successLevel = action.payload;
    },
    addGameToHistory: (state, action) => {
      state.gameHistory.push(action.payload);
    },
  },
});


export const {
  setRandomWord,
  setRandomWordUkr,
  setAnswerOptions,
  setCurrentQuestionIndex,
  setSuccessLevel,
  addGameToHistory
} = checkWordSlice.actions;

export default checkWordSlice.reducer;
