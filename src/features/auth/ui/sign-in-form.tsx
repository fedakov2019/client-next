import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";
import Box from '@mui/joy/Box';
import Alert  from "@mui/joy/Alert";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportIcon from '@mui/icons-material/Report';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useEffect, useRef, useState } from "react";
import {  CssVarsProvider } from '@mui/joy/styles';
import { StyledEngineProvider } from '@mui/material/styles';

export function SignInForm() {
  const [open, setOpen] = useState(true);
  const { handleSubmit, isLoading, register, errorMessage, errors } =
    useSignInForm();
    
    const handleClose = () => {
      setOpen(false);
    };
   
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Имя"
        
        error={errors.login?.message}
        inputProps={{
          placeholder: "login",
         autoFocus:true,
       
          
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
      <UiCheckboxField
        label="Запомнить меня?:"
        inputProps={{
          type: "checkbox",
          ...register("rememberMe"),
        }}
      />

      <UiButton disabled={isLoading} variant="primary" onClick={()=>(setOpen(true))}>
        Войти
      </UiButton>
        {open && (
      errorMessage && (<div>
           <StyledEngineProvider injectFirst>
  <CssVarsProvider>
       <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
       
         <Alert
           key={"Error"}
           
           sx={{ alignItems: 'flex-start' }}
           startDecorator={<ReportIcon />}
           variant="soft"
           color={"danger"}
           endDecorator={
             <IconButton variant="soft" color={"danger"} onClick={handleClose}>
               <CloseRoundedIcon />
             </IconButton>
           }
         >
           <div>
             <div>Error</div>
             <Typography level="body-sm" color={"danger"}>
               {errorMessage}
             </Typography>
           </div>
         </Alert>
       
     </Box>
     </CssVarsProvider>
    
   
    </StyledEngineProvider>
      </div>)
    

)
}
      
      
    </form>
  );
}
