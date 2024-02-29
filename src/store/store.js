import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./dark-slice";
import mobileMenuSlice from "./mobileMenu-slice";

const store = configureStore({
  reducer: {
    dark: darkSlice,
    mobileMenu: mobileMenuSlice,
  },
});

export default store;
