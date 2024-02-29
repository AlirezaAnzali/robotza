import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: {
    isDarkMode: document.documentElement.classList.contains("dark")
      ? true
      : false,
  },
  reducers: {
    toggleDark: (state) => {
      document.documentElement.classList.toggle("dark");
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDark } = darkSlice.actions;
export default darkSlice.reducer;
