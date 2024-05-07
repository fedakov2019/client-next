import { UiButton } from "@/shared/ui/ui-button";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";
import { Footer } from "@/shared/ui/ui-footer";
import { Sidebar } from "@/shared/ui/sidebar/ui-sidebar";

export function HomePage() {
  // useEffect(()=>{
  // authControllerGetSessionInfo().then(console.log)
  //},[])
  return (
    <main className={`min-h-screen`}>
<<<<<<< HEAD
      <UiHeader right={<div>fdkfdl</div>} />
      <Sidebar />
=======
     
      <UiHeader right={<div>fdkfdl</div>} />
      <Sidebar/>
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Hey</UiButton>
      <UiButton disabled variant="primary">
<<<<<<< HEAD
        Hey
      </UiButton>
      <Footer />
=======
        
        Hey
      </UiButton>
      <Footer/>
      
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
    </main>
  );
}
