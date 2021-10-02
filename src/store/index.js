import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";
const store = configureStore({
  reducer: {
    data: slices.reducer,
  },
});

export default store;
