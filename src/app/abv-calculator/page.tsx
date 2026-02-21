import { PageHeader } from "../components/page-header";
import PageLayout from "../components/page-layout";
import AbvCalculator from "./abv-calculator";

export default function AbvCalculatorPage() {
  return (
    <PageLayout>
        <PageHeader title="ABV Calculator" />
        <AbvCalculator />
    </PageLayout>
  );
}
