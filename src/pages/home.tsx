import { UiButton } from "@/shared/ui/ui-button";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";
import { Footer } from "@/shared/ui/ui-footer";
import { Sidebar } from "@/shared/ui/sidebar/ui-sidebar";
import { Profile } from "@/widgets/pages";


export function HomePage() {

  // useEffect(()=>{
  // authControllerGetSessionInfo().then(console.log)
  //},[])
  return (
    <main className={`min-h-screen`}>


      <UiHeader right={<Profile />} />
     
      <Sidebar />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Hey</UiButton>
      <UiButton disabled variant="primary">
        Hey
      </UiButton>
      <Footer />
    </main>
  );
}
