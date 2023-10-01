import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./slices/phones";
import todosReducer from "./slices/todos";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = configureStore({
  reducer: {
    phones: phonesReducer,
    todos: todosReducer,
  },
});
export default store;
