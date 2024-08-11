import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      console.log(state.counter);
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      console.log(state.showCounter);
      state.showCounter = !state.showCounter;
    },
  },
});
console.log(counterSlice.reducer);

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
