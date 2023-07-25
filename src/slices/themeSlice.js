import { createSlice } from "@reduxjs/toolkit";

// Check if the theme mode is stored in localStorage, otherwise use the default value (false for light mode).
const storedThemeMode = localStorage.getItem("themeMode");

const initialState = {
  isDarkMode: storedThemeMode ? JSON.parse(storedThemeMode) : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save the updated theme mode to localStorage.
      // Persist the theme mode to localStorage whenever it changes.
      localStorage.setItem("themeMode", JSON.stringify(state.isDarkMode));
    },
  },
});


export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;