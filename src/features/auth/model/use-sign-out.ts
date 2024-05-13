import { useSignOutMutation } from "@/entities/users/user-api";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/router";

export function useSignOut() {
    
    const router = useRouter();
    const [signOut, { isError, isLoading, isSuccess }]=useSignOutMutation()
    
    
    if (isSuccess) {
        router.push(ROUTES.SIGN_IN);
        localStorage.removeItem('Token');   
        localStorage.removeItem('RememberMe');
      }
    
  
    return {
      isLoading: isLoading,
      singOut: signOut,
    };
  }