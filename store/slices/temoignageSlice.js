import { createSlice } from "@reduxjs/toolkit";

const temoignageSlice = createSlice({
  name: "temoignages",
  initialState: {
    items: [],
  },
  reducers: {
    setTemoignages: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setTemoignages } = temoignageSlice.actions;
export default temoignageSlice.reducer;