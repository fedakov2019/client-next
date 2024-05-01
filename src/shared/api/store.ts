import { configureStore } from '@reduxjs/toolkit';

    import { usersApi } from '../../features/auth/model/user-api';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
