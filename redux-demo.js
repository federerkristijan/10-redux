const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// Redux toolkit suggrst configStore instead of old createStore
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState)
};

// expects subscriber function (line 12)
store.subscribe(counterSubscriber);

// dispatches an action as a JS object
store.dispatch({ type: 'increment' });
