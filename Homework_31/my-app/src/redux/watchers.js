import { takeEvery } from "redux-saga/effects";
import {
  fetchStart,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "./slices/todoSlice";
import {
  fetchTodosSaga,
  addTodoSaga,
  deleteTodoSaga,
  toggleTodoSaga,
  updateTodoSaga,
} from "./workers";

export function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchTodosSaga);
}

export function* watchAddTodo() {
  yield takeEvery(addTodo.type, addTodoSaga);
}

export function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteTodoSaga);
}

export function* watchToggleTodo() {
  yield takeEvery(toggleTodo.type, toggleTodoSaga);
}

export function* watchUpdateTodo() {
  yield takeEvery(updateTodo.type, updateTodoSaga);
}