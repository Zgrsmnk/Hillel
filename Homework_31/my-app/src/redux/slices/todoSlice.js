import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";

const initialState = {
  items: [],
  isLoading: false,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    addTodo: (state) => {
      state.isLoading = true;
    },
    deleteTodo: (state) => {
      state.isLoading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    toggleTodo: (state) => {
      state.isLoading = true;
    },

    updateTodo: (state) => {
      state.isLoading = true;
    },
    toggleTodoSuccess: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.isLoading = false;
    },

    updateTodoSuccess: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.isLoading = false;
    },
  },
});

export const {
  addItem,
  fetchItems,
  deleteItem,
  fetchStart,
  addTodo,
  deleteTodo,
  toggleTodoSuccess,
  updateTodoSuccess,
  updateTodo,
  toggleTodo,
} = todos.actions;
export default todos.reducer;
