import { createSlice } from "@reduxjs/toolkit";

const projetSlice = createSlice({
  name: "projets",
  initialState: {
    items: [],
  },
  reducers: {
    setProjets: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProjets } = projetSlice.actions;
export default projetSlice.reducer;