<<<<<<< HEAD
=======

>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";

import { useSignUpForm } from "../model/use-sign-up-form";
export function SignUpForm() {
<<<<<<< HEAD
  const { handleSubmit, isLoading, register, errorMessage, errors } =
    useSignUpForm();
  console.log(errorMessage);
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Имя"
        error={errors.login?.message}
        inputProps={{
          placeholder: "login",
          type: "text",
          ...register("login", {
            required: { value: true, message: "Login не пустое значение" },
          }),
        }}
      />
      <UiTextField
        label="Пароль"
        error={errors.password?.message}
        inputProps={{
          placeholder: "password",
          type: "password",
          ...register("password", {
            required: true,
            minLength: {
              value: 3,
              message: "минимальная длинна пароля 3 символа",
            },
          }),
        }}
      />

=======
  const { handleSubmit, isLoading, register, errorMessage,errors } = useSignUpForm();
    console.log(errorMessage);
    return (
        <form className="flex flex-col gap-2" 
        onSubmit={handleSubmit}>
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
      
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
      <UiButton disabled={isLoading} variant="primary">
        Войти
      </UiButton>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
<<<<<<< HEAD
    </form>
  );
}
=======
        </form>
    )
}
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
