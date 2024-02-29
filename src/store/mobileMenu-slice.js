import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    isMobileMenuOpen: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const { toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
