import { configureStore } from "@reduxjs/toolkit";
import navSlice from "@/components/Nav/navSlice";

export const store = configureStore({
  reducer: {
    navSlice,
  },
});

store.subscribe(() => console.log(store.getState()))