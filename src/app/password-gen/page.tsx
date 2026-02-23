import { PageHeader } from "../components/page-header";
import PageLayout from "../components/page-layout";
import PasswordGen from "./password-gen";

export default function PasswordGenPage() {
  return (
    <PageLayout>
        <PageHeader title="Memorable Password Generator" />
        <PasswordGen />
    </PageLayout>
  );
}
