import { PayloadAction } from '@reduxjs/toolkit';
import { useSignInMutation } from "@/entities/users/user-api";
import { useForm } from "react-hook-form";
import { useState } from 'react';

export function useSignInForm() {
    const {getValues, register, handleSubmit,formState: { errors }, }=useForm<{
        login: string;
        password:string;
        rememberMe: boolean;
    }>();
  const [rememb, setRememb] = useState(false);
    
    const [
        signIn,
        { error, isLoading,data },
      ]=useSignInMutation();
      
console.log(isLoading, data?.accesToken, error, getValues().rememberMe);
const errorMessage = error ? error.data.type : undefined;
return {
    register,
    errorMessage,
    handleSubmit: handleSubmit(datas=>{signIn({login:datas.login,password:datas.password}); 
    setRememb(datas.rememberMe)}),
    isLoading: isLoading,
    errors,
  };

}