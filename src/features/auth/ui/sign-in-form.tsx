
import { UiButton } from "@/shared/ui/ui-button";

import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";
import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";

export function SignInForm() {
  const { handleSubmit, isLoading, register, errorMessage,errors } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Имя" error={errors.login?.message}
        inputProps={{ placeholder:"login",type: "text", ...register("login", { required: {value:true, message:"Login не пустое значение" }}) }}
        />
         <UiTextField
        label="Пароль" error={errors.password?.message}
        inputProps={{placeholder:"password",
          type: "password",
          ...register("password", { required: true, minLength: {
            value: 3,
            message: "минимальная длинна пароля 3 символа",
          } }),
        }}
      />
      <UiCheckboxField label="Запомнить меня?:" 
       inputProps={{ type: "checkbox",...register("rememberMe", { required: true})}}/>


      <UiButton disabled={isLoading} variant="primary">
        Sign In
      </UiButton>
      
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}