import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import projetReducer from "./slices/projetSlice";
import temoignageReducer from "./slices/temoignageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projets: projetReducer,
    temoignages: temoignageReducer,
  },
});