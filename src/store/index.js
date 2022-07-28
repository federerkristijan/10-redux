import { configStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      coutner: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Redux toolkit advices to replace configStore with createStore
const store = configStore(counterReducer);

// connecting React App with Redux store

export default store;
