import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Count";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;