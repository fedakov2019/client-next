import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  authControllerGetSessionInfo,
  authControllerGetSessionInforef,
  authControllerSignIn,
  authControllerSignUp,
} from "../../shared/api/generated";

import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const usersApi = createApi({
  reducerPath: "users",

  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query({
      queryFn: async (arg:boolean) => {
        if (arg) {
        return await authControllerGetSessionInforef()
          .then((data) => data)
          .catch((error) => error.response.data);}
          else {
            return await authControllerGetSessionInfo()
          .then((data) => data)
          .catch((error) => error.response.data);
            
          }
      },
    }),
   

    signUp: builder.mutation<number, { login: string; password: string }>({
      queryFn: async (arg) => {
        try {
          const dat = await authControllerSignUp({ ...arg }).then(
            (data) => data.id,
          );

          return { data: dat };
        } catch (axiosError) {
          const err = axiosError as AxiosError;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }
      },
    }),

    signIn: builder.mutation({
      queryFn: async (arg) => {
        try {
          const dat = await authControllerSignIn({ ...arg }).then(
            (data) => data
          );

          return { data: dat };
        } catch (axiosError) {
          const err = axiosError as AxiosError;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }
      },
    }),
  }),
});

export const { useGetUsersQuery, useSignUpMutation, useSignInMutation } =
  usersApi;

export const fetchSesion = createAsyncThunk(
  "user/session",
  async (_, thunkAPI) => {
    try {
      const da = await authControllerGetSessionInfo().then((data) => data);
      return da;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);