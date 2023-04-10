import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allWords: [
    { cat: "кіт" },
    { table: "стіл" },
    { dog: "собака" },
    { mother: "мама" },
    { father: "папа" },
    { sister: "сестра" },
    { brother: "брат" },
    { war: "війна" },
    { ball: "м'яч" },
    { umbrella: "парасолька" },
    { summer: "літо" },
    { music: "музика" },
    { oil: "мастило" },
  ],
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    handleDeleteWord: (state, action) => {
      state.allWords = state.allWords.filter(
        (word) => Object.keys(word)[0] !== action.payload
      );
    },
    addNewWord: (state, action) => {
      state.allWords = [...state.allWords, action.payload];
    },
  },
});

export const { handleDeleteWord, addNewWord } = questionSlice.actions;

export default questionSlice.reducer;
