import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    console.log("ran");
    const phonesPromise = fetch("https://jsonplaceholder.typicode.com/todos");
    return await (await phonesPromise).json();
  } catch (error) {
    throw error.message;
  }
});
const initialState = {
  Loading: false,
  Todos: null,
  error: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    cleartodos: (state) => {
      state.Todos = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.Loading = false;
      state.Todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
  },
});
export default todoSlice.reducer;
export { fetchTodos };
