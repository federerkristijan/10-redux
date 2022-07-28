const redux = require("redux");

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

// Redux toolkit suggrst configStore instead of old createStore
const store = redux.configStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState)
};

// expects subscriber function (line 12)
store.subscribe(counterSubscriber);
