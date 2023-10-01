import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPhones = createAsyncThunk("shop/fetchPhones", async () => {
  try {
    console.log("ran");
    const phonesPromise = fetch("https://dummyjson.com/products");
    return await (await phonesPromise).json();
  } catch (error) {
    throw error.message;
  }
});
const initialState = {
  Loading: false,
  phones: null,
  error: null,
};
const phonesSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearphones: (state) => {
      state.phones = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state, action) => {
      state.Loading = true;
    });
    builder.addCase(fetchPhones.fulfilled, (state, action) => {
      state.Loading = false;
      state.phones = action.payload;
    });
    builder.addCase(fetchPhones.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
  },
});
export default phonesSlice.reducer;
export { fetchPhones };
