// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// import { authAction } from "./auth";
// import { counterAction } from "./counter";

const store = configureStore({
  // reducer here don't have s
  reducer: {
    // counter: counterSlice.reducer,
    // auth: authSlice.reducer
    counter: counterReducer,
    auth: authReducer,
  },
});
console.log(store.getState());
// export const authActions = authAction;
// export const counterActions = counterAction;

// Redux Use Case

// const initialState = { counter: 0, showCounter: true };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     console.log(state);
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if(action.type === 'increment5'){
//     return { counter: state.counter + action.payload, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
export default store;
