import { all } from "redux-saga/effects";
import {
  watchAddTodo,
  watchDeleteTodo,
  watchFetchTodos,
  watchToggleTodo,
  watchUpdateTodo,
} from "./watchers";

export function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchToggleTodo(),
    watchUpdateTodo(),
  ]);
}
