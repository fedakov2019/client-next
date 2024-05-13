
import { useSignInMutation } from "@/entities/users/user-api";
import { useForm } from "react-hook-form";

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
  

  const [signIn, { error, isLoading, data }] = useSignInMutation();

  
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
      
    }),
    isLoading: isLoading,
    errors,
  };
}
