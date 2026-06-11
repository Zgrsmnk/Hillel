import { API_URL } from "../constants";
import {
  addItem,
  fetchItems,
  deleteItem,
  toggleTodoSuccess,
  updateTodoSuccess,
} from "./slices/todoSlice";
import { call, put } from "redux-saga/effects";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Request error");
    }
    return response.json();
  });
}

export function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchHelper, API_URL);

    yield put(fetchItems(todos));
  } catch (error) {
    console.log("error", error);
  }
}

export function* addTodoSaga(action) {
  try {
    const todo = yield call(fetchHelper, API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: action.payload }),
    });

    yield put(addItem(todo));
  } catch (error) {
    console.log("error", error);
  }
}

export function* deleteTodoSaga(action) {
  try {
    const deletedtodo = yield call(
      fetchHelper,
      `${API_URL}/${action.payload}`,
      {
        method: "DELETE",
      },
    );

    yield put(deleteItem(deletedtodo));
  } catch (error) {
    console.log("error", error);
  }
}

export function* toggleTodoSaga(action) {
  try {
    const { id, isDone } = action.payload;

    const updatedTodo = yield call(fetchHelper, `${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: !isDone,
      }),
    });

    yield put(toggleTodoSuccess(updatedTodo));
  } catch (error) {
    console.log(error);
  }
}

export function* updateTodoSaga(action) {
  try {
    const { id, name, isDone } = action.payload;

    const updatedTodo = yield call(fetchHelper, `${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        isDone,
      }),
    });

    yield put(updateTodoSuccess(updatedTodo));
  } catch (error) {
    console.log(error);
  }
}
