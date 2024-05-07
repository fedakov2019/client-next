import { useGetUsersQuery } from "@/entities/users/user-api";

import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement, useReducer } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    let remember:string|null='0';
    try {
     remember=localStorage.getItem('RememberMe');}
    catch(e){}
    

    const rem=!remember? "0":remember
    let rembool:boolean;
    
 
    if (rem==='0') { rembool=false;
    }
    else {rembool=true  }
    let{ isError, isLoading } = useGetUsersQuery(rembool);



    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
