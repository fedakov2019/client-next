import { SignInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeader } from "@/shared/ui/ui-header";

export function SignInPage() {
  return (
    <UiFormPageLayout
      title="Регистрация"
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
}