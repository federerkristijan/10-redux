import {legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// createSlice preapres a slice of our global state
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
})

// Redux toolkit advices to replace configStore with createStore, works jsut with legacy_crateStore
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
