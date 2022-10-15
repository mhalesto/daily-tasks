import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: any) => {
      state.value++;
    },
    decrement: (state: any) => {
      state.value--;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;