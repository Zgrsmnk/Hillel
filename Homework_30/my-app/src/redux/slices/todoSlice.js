import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  swapiData: null,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    setSwapiData: (state, action) => {
      state.swapiData = action.payload;
    },
    clearSwapiData: (state) => {
      state.swapiData = null;
    }
  },
});

export const { addItem, setSwapiData, clearSwapiData } = todos.actions;
export default todos.reducer;
