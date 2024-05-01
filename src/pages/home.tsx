import { UiButton } from "@/shared/ui/ui-button";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiCheckboxField } from "@/shared/ui/ui-checkbox-field";

export function HomePage() {
  // useEffect(()=>{
  // authControllerGetSessionInfo().then(console.log)
  //},[])
  return (
    <main className={`min-h-screen`}>
      <UiHeader right={<div>fdkfdl</div>} />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Hey</UiButton>
      <UiButton disabled variant="primary">
        
        Hey
      </UiButton>
      <UiCheckboxField label="Запомнить меня?:" inputProps={{ type: "checkbox", name:"rememberMe",}}></UiCheckboxField>
    </main>
  );
}
