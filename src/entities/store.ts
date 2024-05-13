import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReduser from "./users/reduser/UserSlice";
import { usersApi } from "./users/user-api";
const rootReduser = combineReducers({
  userReduser,
  [usersApi.reducerPath]: usersApi.reducer,
});
export const store = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });
};
export type RootStore = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
