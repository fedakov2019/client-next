import { useGetUsersQuery } from "@/entities/users/user-api";

import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement} from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    let remember:string|null='0';
    try {
      if (localStorage.getItem('RememberMe')){
     remember=localStorage.getItem('RememberMe');}}
    catch(e){
      remember='0'
    }
    

    
    let rembool:boolean;
    
 
    if (remember==='0') { rembool=false;
    }
    else {rembool=true  }
   
    const {  isLoading,error } = useGetUsersQuery(rembool);

  

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (error) {
      
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
