import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";

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
    },
  },
});

export const { addItem, clearSwapiData } = todos.actions;
export default todos.reducer;

export const { setSwapiData } = todos.actions;

export const getSwapi = () => async (dispatch) => {
  try {
    const data = await fetch(API_URL);
    const response = await data.json();

    dispatch(setSwapiData(response));
  } catch (error) {
    console.log("Error", error);
  }
};
