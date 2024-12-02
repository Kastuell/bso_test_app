import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "../middleware/auth";
import { api } from "../services/api";
import authSlice from "../../features/auth/auth-slice";
import { productApi } from "../../entities/product/api/product-api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authSlice,
    products: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
