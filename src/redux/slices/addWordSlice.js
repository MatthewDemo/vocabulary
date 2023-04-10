import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  englishWord: "",
  ukrainianWord: "",
};

export const addWordSlice = createSlice({
  name: "addWord",
  initialState,
  reducers: {
    clearEnglishWord: (state) => {
      state.englishWord = "";
    },
    clearUkrainianWord: (state) => {
      state.ukrainianWord = "";
    },
    setEnglishWord: (state, action) => {
      state.englishWord = action.payload;
    },
    setUkrainianWord: (state, action) => {
        state.ukrainianWord = action.payload;
      },
  },
});

export const { clearEnglishWord, clearUkrainianWord, setEnglishWord, setUkrainianWord } = addWordSlice.actions;

export default addWordSlice.reducer;
