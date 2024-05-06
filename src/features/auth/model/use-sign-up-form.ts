import { useSignUpMutation } from "@/entities/users/user-api";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
    const {register, handleSubmit,formState: { errors }, }=useForm<{
        login: string;
        password:string;
    }>();
    
    const [
        signUp,
        { error, isLoading,data },
      ]=useSignUpMutation()
console.log(isLoading, data, error);
const errorMessage = error ? error.data.type : undefined;
return {
    register,
    errorMessage,
    handleSubmit: handleSubmit(datas=>signUp({...datas})),
    isLoading: isLoading,
    errors,
  };

}
