/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: {
    search: "",
    location: [],
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    query: (state, action) => {
      state.query = action.payload;
      console.log(state.query);
    },
  },
});

// Action creators are generated for each case reducer function
export const { query } = searchSlice.actions;

export default searchSlice.reducer;
