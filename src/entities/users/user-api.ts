import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  authControllerGetSessionInfo,
  authControllerGetSessionInforef,
  authControllerSignIn,
  authControllerSignOut,
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
        if (arg) { try 
          {
        const data = await authControllerGetSessionInforef()
          .then(data => data)
              return {data:data}

          }
          catch (e) {

            const err = e as AxiosError;
            return {
             
              error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
              },
            };
          }









          }
          else { try {
            const data= await authControllerGetSessionInfo()
          .then(data => data)
          
          return {data:data};}
            catch (e){
              const err = e as AxiosError;
            return {
             
              error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
              },
            };

            }
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
          const dat = await authControllerSignIn({ login:arg.login,password:arg.password }).then(
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
 signOut:builder.mutation({
  queryFn:async()=>{
 try {
 const data=await authControllerSignOut().then(data=>data)


return {data:1}}
catch (e) {
  const err = e as AxiosError;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }

}

  
 }),



  }),
});

export const { useGetUsersQuery, useSignUpMutation, useSignInMutation, useSignOutMutation } =
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
