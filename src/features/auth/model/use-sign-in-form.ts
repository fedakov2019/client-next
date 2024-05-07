import { PayloadAction } from "@reduxjs/toolkit";
import { useSignInMutation } from "@/entities/users/user-api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ROUTES } from "@/shared/constants/routes";
import router from "next/router";

export function useSignInForm() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    login: string;
    password: string;
    rememberMe: boolean;
  }>();
  const [rememb, setRememb] = useState(false);

  const [signIn, { error, isLoading, data }] = useSignInMutation();

  console.log(isLoading, data?.accesToken, error, getValues().rememberMe);
  if (data) {
    localStorage.setItem("Token", data.accesToken);

    localStorage.setItem("RememberMe", getValues().rememberMe ? "1" : "0");

    router.push(ROUTES.HOME);
  }

  const errorMessage = error
    ? error.data.type
      ? error.data.type
      : error.data.message[0]
    : undefined;
  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit((datas) => {
      signIn({ login: datas.login, password: datas.password });
      setRememb(datas.rememberMe);
    }),
    isLoading: isLoading,
    errors,
  };
}
