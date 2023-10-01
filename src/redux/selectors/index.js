import { createSelector } from "@reduxjs/toolkit";

const phoneSelector = createSelector(
  (state) => state,
  ({ phones }) => phones
);
const todosSelector = createSelector(
  (state) => state,
  ({ todos }) => todos
);
export { todosSelector, phoneSelector };
