import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { authControllerGetSessionInfo, authControllerSignUp } from "../../../shared/api/generated";
import build from "next/dist/build";
import type { AxiosError } from "axios";

export const usersApi = createApi({
    reducerPath: "users",

    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
      getUsers: builder.query({
        queryFn: async () => {
        const {error,data}=await authControllerGetSessionInfo().then(data=>data).catch(error => 
            error.response.data
        )
        if (error) {
            return { error }
          }
          return { data }
        },
      }),

      signUp: builder.mutation({
        queryFn: async ({login,password}): Promise<
        | {
            error: BaseQueryError<BaseQuery>
            data?: undefined
          }
        | {
            error?: undefined
            data: ResultType
          }
        > => {
          try {
          const dat=await authControllerSignUp({login,password}).then(data=>data)

          return {data:dat}}
          catch (axiosError) {
            const err = axiosError as AxiosError
            return {
              error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
              },
            }
          }
          },
        }),

      
    }),
  });
  export type RootState = typeof signUP
  export const {useGetUsersQuery,useSignUpMutation} =usersApi