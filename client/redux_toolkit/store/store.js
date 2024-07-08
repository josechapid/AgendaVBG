import { configureStore } from "@reduxjs/toolkit";
import tipReducer from "../features/counter/Slice.js";

const store = configureStore({
  reducer: {
    tip: tipReducer,
  },
});

export default store;
