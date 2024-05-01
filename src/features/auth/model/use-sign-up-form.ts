import { useSignUpMutation } from "@/features/auth/model/user-api";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
    const {register, handleSubmit,formState: { errors }, }=useForm<{
        login: string;
        password:string;
    }>();
    
    const [
        removeUser,
        { error, isLoading,data },
      ]=useSignUpMutation()
console.log(isLoading, data, error);
const errorMessage = error ? error.data.type : undefined;
return {
    register,
    errorMessage,
    handleSubmit: handleSubmit(datas=>removeUser({...datas})),
    isLoading: isLoading,
    errors,
  };

}
