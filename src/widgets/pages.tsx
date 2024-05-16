import { useGetUsersQuery } from "@/entities/users/user-api";
import { SignOutButton } from "@/features/auth";
import Image from "next/image";

export function Profile() {
    let remember:string|null;
    try {
     remember=localStorage.getItem('RememberMe');}
    catch(e){
      remember='0'
    }
    

    const rem=!remember? "0":remember
    let rembool:boolean;
    
 
    if (rem==='0') { rembool=false;
    }
    else {rembool=true  }
  const {data} = useGetUsersQuery(rembool);

  if (!data) return null;

  return (
    <div className="flex gap-2 items-center">
      <Image
          className="rounded-full object-cover"
          src={"/avatar.jpg"}
          alt=""
          width="50"
          height="50"
        />
      {data?.login}
      <SignOutButton />
    </div>
  );
}