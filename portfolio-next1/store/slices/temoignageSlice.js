import { createSlice } from "@reduxjs/toolkit";

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    items: [],
  },
  reducers: {
    setTestimonials: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialSlice.actions;
export default testimonialSlice.reducer;