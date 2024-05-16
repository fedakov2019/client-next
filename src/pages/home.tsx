import { UiButton } from "@/shared/ui/ui-button";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";
import { Footer } from "@/shared/ui/ui-footer";
import { Sidebar2 } from "@/shared/ui/sidebar/ui-sidebar2";
import { Profile } from "@/widgets/pages";
import {ToggleTheme} from "@/features/theme/toggle-theme";


export function HomePage() {

  // useEffect(()=>{
  // authControllerGetSessionInfo().then(console.log)
  //},[])
  return (
    <main className={`min-h-screen dark:bg-slate-900`}>


      <UiHeader right={<Profile />}  action={<ToggleTheme/>} />
     
      <Sidebar2/>
   
      <Footer />
    </main>
  );
}
