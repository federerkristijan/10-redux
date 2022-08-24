import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth";

// Redux toolkit advices to replace configStore with createStore, works jsut with legacy_crateStore
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
