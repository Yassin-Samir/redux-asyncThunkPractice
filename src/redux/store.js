import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./slices/shop";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
export default store;
